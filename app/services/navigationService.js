/*
 * Arista Application 22.7.2020
 * Copyright © 2020 Arista. All rights reserved.
 */

import { NavigationActions, StackActions } from 'react-navigation';
import { Linking, Platform } from 'react-native';
import {
    NAVIGATION_SCREENS,
} from '../utilities/constants/constants';
import LOGGER from '../utilities/logger';

let _navigator;
let _isDrawerOpen;
let _isKeyboardActive;
let _scroller;
let stores;
let _appState;
let _storeUpdated;
let _appInitiated;

const STORES_HYDRATED_COUNT = 8;

function isAppInitiated() {
    return _appInitiated;
}

function storeUpdating() {
    _storeUpdated = {};
    _appInitiated = false;
}

function storeUpdated(storeName) {
    _storeUpdated[storeName] = true;
    LOGGER.info('storeUpdated::_storeUpdated', _storeUpdated);
    LOGGER.info('storeUpdated::storeName', storeName);
}

function allStoresRehydrated() {
    if (Object.keys(_storeUpdated).length === STORES_HYDRATED_COUNT) {
        _appInitiated = true;
        return true;
    }

    return false;
}

function getAppState() {
    return _appState;
}

function setTopLevelNavigator(navigatorRef, store, appState) {
    // firebase.perf().setPerformanceCollectionEnabled(true);
    _navigator = navigatorRef;
    stores = store;
    _appState = appState;
}

function getNavigator() {
    return _navigator;
}

function getStores() {
    return stores;
}

// function renderHeaderTitle(props) {
//   const currentNav = props.getCurrentNav();

//   if (!currentNav) {
//     return '';
//   }

//   if (currentNav.params && currentNav.params.title) {
//     return currentNav.params.title;
//   }
//   switch (currentNav.routeName) {
//     case NAVIGATION_SCREENS.MyAccount:
//       return 'HEADER_TITLE_MY_ACCOUNT';
//     case NAVIGATION_SCREENS.Settings:
//       return 'HEADER_TITLE_SETTINGS';

//     default:
//       return 'HEADER_TITLE_MY_ACCOUNT';
//   }
// }

function getDrawerPermissionFroScreen(routeName) {
    const DISABLED = true;
    const ENABLED = false;

    if (!routeName || routeName === '') {
        return true;
    }

    switch (routeName) {
        case NAVIGATION_SCREENS.SupportFAQPage:
        case NAVIGATION_SCREENS.HotPromotionDetails:
        case NAVIGATION_SCREENS.AddonsDetails:
        case NAVIGATION_SCREENS.VASDetails:
        case NAVIGATION_SCREENS.SupportHistory:
        case NAVIGATION_SCREENS.BalanceAdvUsage:
        case NAVIGATION_SCREENS.BalanceAdvSelection:
        case NAVIGATION_SCREENS.ISDetailsPage:
        case NAVIGATION_SCREENS.TopUpScratchCardPage:
        case NAVIGATION_SCREENS.TopUpWingPortalPage:
        case NAVIGATION_SCREENS.TopUpWingPayPage:
        case NAVIGATION_SCREENS.MusicDetailsPage:
        case NAVIGATION_SCREENS.MusicListingPage:
        case NAVIGATION_SCREENS.VasSubscriptionPage:
        case NAVIGATION_SCREENS.InsSubscriptionPage:
        case NAVIGATION_SCREENS.SubscriptionsAddonsDetailPage:
        case NAVIGATION_SCREENS.Tutorial:
        case NAVIGATION_SCREENS.MyStarsPage:
        case NAVIGATION_SCREENS.DeviceManagerPage:
        case NAVIGATION_SCREENS.BonusPage:
        case NAVIGATION_SCREENS.GamePlayPage:
        case NAVIGATION_SCREENS.TariffPlanDetailPage:
        case NAVIGATION_SCREENS.SpecialDealslistingPage:
        case NAVIGATION_SCREENS.MyRewardsListingPage:
        case NAVIGATION_SCREENS.PdfViewerPage:
        case NAVIGATION_SCREENS.GameListPage:
        case NAVIGATION_SCREENS.Splash:
        case NAVIGATION_SCREENS.Signup:
        case NAVIGATION_SCREENS.LoginRegistration:
        case NAVIGATION_SCREENS.GameVendorListPage:
        case NAVIGATION_SCREENS.GameDetailsPage:
        case NAVIGATION_SCREENS.WatchTvListPage:
        case NAVIGATION_SCREENS.WatchTvDetailsPage:
        case NAVIGATION_SCREENS.GameSubscriptionPage:
        case NAVIGATION_SCREENS.WatchTvSubscriptionPage:
        case NAVIGATION_SCREENS.ContainerizedWebView:
        case NAVIGATION_SCREENS.PaymentPortalPage:
            return DISABLED;
        default:
            return ENABLED;
    }
}

function showHeaderContent(routeName) {
    switch (routeName) {
        case NAVIGATION_SCREENS.Splash:
        case NAVIGATION_SCREENS.DeepLinkLoader:
        case NAVIGATION_SCREENS.LoginRegistration:
        case NAVIGATION_SCREENS.Signup:
        case NAVIGATION_SCREENS.FingerprintPage:
        case NAVIGATION_SCREENS.FingerprintLoginPage:
            return false;
        default:
            return true;
    }
}

// function shouldRenderFooter(routeName) {
//   switch (routeName) {
//     case NAVIGATION_SCREENS.MyAccount:
//     case NAVIGATION_SCREENS.HotPromotion:
//     case NAVIGATION_SCREENS.Notifications:
//     case NAVIGATION_SCREENS.ProfileSettings:
//     case NAVIGATION_SCREENS.Settings:
//     case NAVIGATION_SCREENS.TopUp:
//     case NAVIGATION_SCREENS.AddonsList:
//     case NAVIGATION_SCREENS.VASList:
//     case NAVIGATION_SCREENS.BalanceAdvSelection:
//     case NAVIGATION_SCREENS.BalanceAdvUsage:
//     case NAVIGATION_SCREENS.ISListPage:
//     case NAVIGATION_SCREENS.MusicListingPage:
//     case NAVIGATION_SCREENS.SubscriptionPage:
//     case NAVIGATION_SCREENS.AboutPage:
//     case NAVIGATION_SCREENS.FavoritesPage:
//     case NAVIGATION_SCREENS.RegistrationPage:
//     case NAVIGATION_SCREENS.LevelLandingPage:
//     case NAVIGATION_SCREENS.ShakeNWinPage:
//     case NAVIGATION_SCREENS.FindStorePage:
//     case NAVIGATION_SCREENS.TariffPlanListPage:
//     case NAVIGATION_SCREENS.BillDetailsPage:
//     case NAVIGATION_SCREENS.SpecialDealslistingPage:
//     case NAVIGATION_SCREENS.MyRewardsListingPage:
//     case NAVIGATION_SCREENS.PayNowPage:
//     case NAVIGATION_SCREENS.EntListPage:
//     case NAVIGATION_SCREENS.SubscriptionListingPage:
//     case NAVIGATION_SCREENS.HotPromoListingPage:
//     case NAVIGATION_SCREENS.MenuPage:
//     case NAVIGATION_SCREENS.ServiceBundleListingPage:
//     case NAVIGATION_SCREENS.LoyaltyLandingPage:
//     case NAVIGATION_SCREENS.GroupListPage:
//       return true;
//     case NAVIGATION_SCREENS.DiscoverPage:
//       return true;
//     default:
//       return false;
//   }
// }

// function shouldRenderHeaderBackButton(routeName) {
//   switch (routeName) {
//     case NAVIGATION_SCREENS.ScanCodePage:
//       return true;
//     default:
//       return false;
//   }
// }



function navigateWithState(routeName, params) {
    const { navStore, securityStore } = stores;
    securityStore.turnOnBiometricSecurity();

    if (navStore) {
        navStore.navigatedWithDeepLink(false);
        navStore.setNavigatedDeepLinkHeaderName('');
        if (routeName !== NAVIGATION_SCREENS.FingerprintLoginPage) {
            navStore.setStoredParams(params);
        }
    }
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

function navigate(currentRoute, nextRouteName, params, prevParams = null) {
    LOGGER.info('navigate::currentRoute', currentRoute);
    LOGGER.info('navigate::nextRouteName', nextRouteName);
    LOGGER.info('navigate::params', params);
    // analyticsService.setCurrentScreen(
    //     NAVIGATION_SCREEN_ANALYTICS_KEYS[nextRouteName]
    // );
    const { navStore, securityStore } = stores;
    securityStore.turnOnBiometricSecurity();

    if (navStore) {
        navStore.navigatedWithDeepLink(false);
        navStore.setNavigatedDeepLinkHeaderName('');
        if (nextRouteName !== NAVIGATION_SCREENS.FingerprintLoginPage) {
            navStore.setStoredParams(params);
        }
    }
    let index = 0;
    let actions = [];

    if (currentRoute && nextRouteName) {
        index = 1;
        actions = [
            NavigationActions.navigate({
                routeName: currentRoute,
                params: prevParams,
            }),
            NavigationActions.navigate({ routeName: nextRouteName, params }),
        ];
    } else if (!currentRoute && nextRouteName) {
        index = 0;
        actions = [
            NavigationActions.navigate({ routeName: nextRouteName, params }),
        ];
    }

    const resetAction = StackActions.reset({
        index,
        actions,
    });
    _navigator.dispatch(resetAction);
}

function navigateDeepLink(_deepLink = '', _length, _isDialer) {
    const { navStore, securityStore } = stores;
    let deepLink = _deepLink;
    let length = _length;
    let isDialer = _isDialer
    securityStore.turnOffBiometricSecurity();
    LOGGER.info("deepLink", deepLink)
    LOGGER.info("deepLink length", length)
    LOGGER.info("deepLink isDialer", isDialer)

    if (!deepLink) return;

    if (deepLink.indexOf('&') > -1) {
        deepLink = `${deepLink}&isInternal=true`;
    } else {
        deepLink = `${deepLink}?isInternal=true`;
    }
    const separatedDeeplinkLength = length;
    LOGGER.info('navigateDeepLink deepLinkLength', separatedDeeplinkLength);
    try {
        Linking.canOpenURL(deepLink)
            .then((canOpen) => {
                if (canOpen) {
                    LOGGER.info('navigateDeepLink canOpen', deepLink);
                    if (navStore) {
                        navStore.navigatedWithDeepLink(true);
                        LOGGER.info("navigatedWithDeepLink")
                    }

                    if (isDialer) {
                        LOGGER.info('navigateDeepLink isDialer', separatedDeeplinkLength);
                        Linking.openURL(deepLink.substr(0, separatedDeeplinkLength)).catch((err) => {
                            LOGGER.error('navigateDeepLink openURL', err);
                            navStore.navigatedWithDeepLink(false);
                        });
                    }
                    else {
                        Linking.openURL(deepLink).catch((err) => {
                            LOGGER.error('navigateDeepLink openURL', err);
                            navStore.navigatedWithDeepLink(false);
                        });
                    }

                }
            })
            .catch((err) => {
                LOGGER.error('navigateDeepLink err', err);
                navStore.navigatedWithDeepLink(false);
            });
    } catch (ex) {
        LOGGER.error('navigateDeepLink catch', ex);
        navStore.navigatedWithDeepLink(false);
    }
}

function reset(routeName, params) {
    const { securityStore } = stores;
    securityStore.turnOnBiometricSecurity();

    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName, params })],
    });
    _navigator.dispatch(resetAction);
}

function drawerOpenedState(isOpen) {
    _isDrawerOpen = isOpen;
}

function isDrawerOpened() {
    return _isDrawerOpen;
}

function keyboardOpenedState(isActive) {
    _isKeyboardActive = isActive;
}

function isKeyboardOpened() {
    return _isKeyboardActive;
}

function setScroll(scroller) {
    _scroller = scroller;
}

function getScroller() {
    return _scroller;
}

function isConnected() {
    if (stores.connectivityStore.connected()) {
        return true;
    }
    stores.connectivityStore.shake();
    return false;
}

function clearStoresAndlogout() {
    stores.securityStore.clear();
    stores.accountStore.clear();
    stores.favoriteStore.clear();
    stores.loyaltyGameStore.clear();
    stores.loyaltyProfileStore.clear();
}




function navigateExternalDeepLink(link, packageIdentifier) {
    if (!link || link === '') return;
    Linking.openURL(link).catch(() => {
        Linking.openURL(Platform.select(packageIdentifier || {})).catch(() => LOGGER.error('navigateExternalDeepLink link', link));
    });
}

function navigateWebLink(link, isContainerized, params) {
    LOGGER.info('navigateWebLink link', link);
    if (!link || link === '') return;
    if (isContainerized) {
        navigateWithState(NAVIGATION_SCREENS.ContainerizedWebView, {
            ...params,
            webUrl: link,
        });
    } else {
        Linking.openURL(link).catch(() => LOGGER.error('navigateWebLink link', link));
    }
}

function navigatingToExternalApp() {
    const { securityStore } = stores;
    // securityStore.turnOffBiometricSecurity();
}

function navigatedToExternalAppCompleted() {
    const { securityStore } = stores;
    //securityStore.turnOnBiometricSecurity();
}

function getCurrentRouteName() {
    return stores?.navStore?.getCurrentNav()?.routeName;
}

function checkDrawerPermissionForScreen(state) {
    if (state) {
        const { index } = state || {};
        const currentRoute = state.routes && state.routes.length > 0 ? state.routes[index] : null;

        const { routeName } = currentRoute || {};

        return getDrawerPermissionFroScreen(routeName);
    }

    return true;
}

// function toggleDrawer() {
//     //TODO: REMOVE AFTER DRAWER REMOVED
//     _navigator.dispatch(DrawerActions.toggleDrawer());
// }

export default {
    navigate,
    setTopLevelNavigator,
    getNavigator,
    isDrawerOpened,
    drawerOpenedState,
    keyboardOpenedState,
    isKeyboardOpened,
    setScroll,
    getScroller,
    showHeaderContent,
    isConnected,
    reset,
    getAppState,
    navigateDeepLink,
    navigateWithState,
    getStores,
    storeUpdating,
    storeUpdated,
    allStoresRehydrated,
    isAppInitiated,
    clearStoresAndlogout,
    navigateExternalDeepLink,
    navigateWebLink,
    navigatingToExternalApp,
    navigatedToExternalAppCompleted,
    getCurrentRouteName,
    checkDrawerPermissionForScreen
};
