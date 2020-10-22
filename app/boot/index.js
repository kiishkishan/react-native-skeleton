/*
 * Arista Application 15.10.2020
 * Copyright © 2020 Arista. All rights reserved.
 */

import React from 'react';
import { Provider, observer } from 'mobx-react';
import {
    View,
    AppState,
    Platform,
    Keyboard,
} from 'react-native';

import { responsiveWidth } from 'react-native-responsive-dimensions';
import AppContainer from '../mobx/utils/routes';
import mobx from '../mobx/stores/index';
import { Footer } from '../components/organisms';
import navigationService from '../services/navigationService';
import {
    APP_PREFIX,
    OS,
} from '../utilities/constants/constants';
import LOGGER from '../utilities/logger';

const stores = mobx();

@observer
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appState: AppState.currentState
        };
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this._keyboardDidShow
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this._keyboardDidHide
        );

        this.keyboardWillShowListener = Keyboard.addListener(
            'keyboardWillShow',
            this._keyboardDidShow
        );

        this.keyboardWillHideListener = Keyboard.addListener(
            'keyboardWillHide',
            this._keyboardDidHide
        );
    }

    componentDidMount() {
        AppState.addEventListener('change', this._handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
        this.keyboardWillShowListener.remove();
        this.keyboardWillHideListener.remove();

    }

    _handleAppStateChange = (nextAppState) => {
        const { appState } = this.state;

        if (appState.match(/inactive|background/) && nextAppState === 'active') {
            if (Platform.OS === OS.ios) {
                LOGGER.info('trackAppLaunch0');
            }
        }

        LOGGER.info('_handleAppStateChange::appState', appState);

        // APP MAXIMIZED FUNCTIONS...
        if (
            navigationService.isAppInitiated()
            && appState.match(/background/)
            && nextAppState === 'active'
        ) {
            LOGGER.info('RESTORED APPLICATION STATE');
            this.handleDisplayPage();
            this.forceUpdate(() => {
                LOGGER.info('APPLICATION STATE FORCE UPDATED');
            });
        }

        this.setState({ appState: nextAppState });
    };

    _keyboardDidShow(e) {
        const { endCoordinates } = e;
        const height = endCoordinates ? endCoordinates.height : 0;
        const { settingsStore } = stores;
        settingsStore.setKeyboardOpenStatus(true, height);
    }

    _keyboardDidHide() {
        const { settingsStore } = stores;
        const a = this.deeplinkDefered;
        settingsStore.setKeyboardOpenStatus(false, 0);
    }

    render() {
        const { appState } = this.state;
        return (
            <Provider {...stores}>
                <View style={{ flex: 1, backgroundColor: 'black', overflow: 'hidden' }}>
                    {/* <StatusBar barStyle="dark-content" /> */}
                    <View
                        style={{
                            flex: 1,
                            width: responsiveWidth(100),
                            alignSelf: 'center',
                            overflow: 'hidden',
                            position: 'relative'
                        }}
                    >
                        <AppContainer
                            uriPrefix={APP_PREFIX}
                            ref={(navigatorRef) => {
                                navigationService.setTopLevelNavigator(
                                    navigatorRef,
                                    stores,
                                    appState
                                );
                            }}
                        />

                    </View>
                </View>
            </Provider>
        );
    }
}

export default App;
