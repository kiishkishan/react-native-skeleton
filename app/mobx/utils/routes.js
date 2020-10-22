/*
 * Arista Application 16.10.2020
 * Copyright © 2020 Arista. All rights reserved.
 */

import {
    createAppContainer,
    NavigationActions
} from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import React from 'react';
import { Dimensions } from 'react-native';
import { fromRight } from 'react-navigation-transitions';
import {
    SplashPage
} from '../../components/pages';
import {
    MAX_WIDTH_SIDE_MENU,
    SIDE_MENU_OFFSET,
    NAVIGATION_SCREENS
} from '../../utilities/constants/constants';
import commonStyles from '../../theme/styles/commonStyles';
import navigationService from '../../services/navigationService';

const navigationOptions = {
    header: () => null,
    gestureEnabled: false
};

const Stack = createStackNavigator(
    {
        SplashPage: {
            screen: SplashPage,
            navigationOptions: props => ({
                headerShown: false,
                gestureEnabled: false
            })
        },
    },
    {
        initialRouteName: NAVIGATION_SCREENS.SplashPage, // 'UiTestPage', // NAVIGATION_SCREENS.Splash,
        headerMode: 'screen',
        defaultNavigationOptions: {
            ...TransitionPresets.SlideFromRightIOS,
        },
        navigationOptions: {
            backgroundColor: commonStyles.appBackground
        }
    }
);

const drawerWidth = Dimensions.get('window').width - SIDE_MENU_OFFSET
    ? MAX_WIDTH_SIDE_MENU
    : Dimensions.get('window').width - SIDE_MENU_OFFSET;


const DrawerNavigator = createDrawerNavigator(
    {
        Stack: {
            screen: Stack,
            path: '',
            navigationOptions: (props) => {
                const checkDrawerPermissionForScreen = navigationService.checkDrawerPermissionForScreen(
                    props.navigation.state
                );

                return {
                    headerShown: false,
                    drawerLockMode: 'locked-closed',
                    disableGestures: checkDrawerPermissionForScreen
                };
            }
        },

    },
);

const defaultGetStateForAction = DrawerNavigator.router.getStateForAction;
const previousGetActionForPathAndParams = DrawerNavigator.router.getActionForPathAndParams;

DrawerNavigator.router.getStateForAction = (action, state) => {
    if (
        (state && state.drawerMovementDirection == 'opening')
        || action.type == 'Navigation/MARK_DRAWER_ACTIVE'
        || action.type == 'Navigation/DRAWER_OPENED'
        || (action.type === 'Navigation/MARK_DRAWER_SETTLING' && action.willShow)
        || action.type === 'Navigation/TOGGLE_DRAWER'
    ) {
        navigationService.drawerOpenedState(true);
    } else if (
        action.type === 'Navigation/DRAWER_CLOSED'
        || (action.type === 'Navigation/MARK_DRAWER_SETTLING' && !action.willShow)
    ) {
        navigationService.drawerOpenedState(false);
    }

    return defaultGetStateForAction(action, state);
};

// Object.assign(DrawerNavigator.router, {
//     getActionForPathAndParams(path, params) {
//         const stateActions = previousGetActionForPathAndParams(path, params);

//         if (!stateActions) {
//             return previousGetActionForPathAndParams(path, params);
//         }

//         const routeName = stateActions && stateActions.action
//             ? stateActions.action.routeName
//             : NAVIGATION_SCREENS.MyAccount;
//         const pathParams = stateActions && stateActions.action ? stateActions.action.params : {};

//         LOGGER.info('getActionForPathAndParams::routeName', routeName);
//         LOGGER.info('getActionForPathAndParams::pathParams', pathParams);

//         if (pathParams.isInternal === 'true') {
//             return previousGetActionForPathAndParams(path, params);
//         }

//         return NavigationActions.navigate({
//             routeName: NAVIGATION_SCREENS.Splash,
//             params: { deepLink: { routeName, pathParams } }
//         });
//     }
// });

export default createAppContainer(DrawerNavigator);
