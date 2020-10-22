/*
 * Arista Application 13/10/2020
 * Copyright © 2020 Arista. All rights reserved.
 */

import { observable, action } from 'mobx';
import { NAVIGATION_SCREENS, BottomMenuItems } from '../../../utilities/constants/constants';

class NavStore {
    @observable currentNav = null;

    @observable isDrawerOpened = false;

    @observable isKeyboardOpened = false;

    @observable locale = null;

    @observable isNavigatedWithDeepLink = false;

    @observable navigatedDeepLinkHeaderName = '';

    @observable storedParams = null;

    @action setCurrentNav(nav) {
        const { routeName } = nav;
        const primaryMenuScreens = BottomMenuItems.map(item => item.screens[0]);
        if (primaryMenuScreens.indexOf(routeName) > -1) {
            this.activeFooterRoute = routeName;
        }
        this.currentNav = nav;
    }

    getCurrentNav() {
        return this.currentNav;
    }

    @action toggleDrawer(navigationProps) {
        navigationProps.toggleDrawer();
    }

    @action setUserPlan(planName) {
        this.userPlanName = planName;
    }

    getCurrentUserPlan() {
        return this.userPlanName;
    }

    @action keyboardOpenedState(isActive) {
        this.isKeyboardOpened = isActive;
    }

    @action updatedLocale(locale) {
        this.locale = locale;
    }

    getUpdatedLocale() {
        return this.locale;
    }

    isKeyboardOpen() {
        return this.isKeyboardOpened;
    }

    isDeepLinkNavigated() {
        return this.isNavigatedWithDeepLink;
    }

    @action navigatedWithDeepLink(navigated) {
        this.isNavigatedWithDeepLink = navigated;
    }

    @action setNavigatedDeepLinkHeaderName(headerName) {
        this.navigatedDeepLinkHeaderName = headerName;
    }

    getNavigatedDeepLinkHeaderName() {
        return this.navigatedDeepLinkHeaderName;
    }

    @action setStoredParams(params) {
        this.storedParams = params;
    }

    getStoredParams() {
        return this.storedParams;
    }

    @action setShareablePromoContent(shareablePromoContent) {
        this.shareablePromoContent = shareablePromoContent;
    }

    @action getShareablePromoContent() {
        return this.shareablePromoContent;
    }

    @action setActiveFooterRoute(screen) {
        this.activeFooterRoute = screen;
    }

    getActiveFooterRoute() {
        return this.activeFooterRoute;
    }
}

export default NavStore;
