/*
 * Arista Application 13.10.2020
 * Copyright © 2020 Arista. All rights reserved.
 */

import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';
import LOGGER from '../../../utilities/logger';

class SettingsStore {
    @persist @observable pushNotificationEnabled = false;

    @persist @observable pushNotifications = null;

    @persist @observable pushNoteMeta = null;

    @persist @observable isLocationEnabled = null;

    @persist('object') @observable splashData = {};

    @observable isKeyboardOpend = false;

    @observable keyboardHeight = 0;

    @persist @observable isAlreadyShowHomeTutorial = false;

    @persist @observable isAlreadyShowDiscoverTutorial = false;

    @action setPushNoteStatus(status) {
        this.pushNotificationEnabled = status;
    }

    getSplashData() {
        return this.splashData || {};
    }

    @action setSplashData(splashData) {
        this.splashData = splashData || {};
    }

    @action getPushNoteStatus() {
        return this.pushNotificationEnabled;
    }

    @action setPushNotifications(notes) {
        this.pushNotifications = notes;
    }

    @action getPushNotifications() {
        return this.pushNotifications;
    }

    @action setPushNoteMeta(meta) {
        this.pushNoteMeta = meta;
    }

    @action getPushNoteMeta() {
        return this.pushNoteMeta;
    }

    @action setShareLocation(value) {
        this.isLocationEnable = value;
    }

    @action getShareLocationStatus() {
        return this.isLocationEnabled;
    }

    @action setLocationStatus(status) {
        this.isLocationEnabled = status;
    }

    @action setKeyboardOpenStatus(status, keyboardHeight) {
        this.isKeyboardOpend = status;
        this.keyboardHeight = keyboardHeight;
    }

    getKeyboardOpenStatus() {
        return this.isKeyboardOpend;
    }

    getKeyboardOpenHeight() {
        return this.keyboardHeight;
    }

    getIsAlreadyShowHomeTutorial() {
        return this.isAlreadyShowHomeTutorial;
    }

    @action setIsAlreadyShowHomeTutorial(status) {
        this.isAlreadyShowHomeTutorial = status;
    }

    getIsAlreadyShowDiscoverTutorial() {
        return this.isAlreadyShowDiscoverTutorial;
    }

    @action setIsAlreadyShowDiscoverTutorial(status) {
        this.isAlreadyShowDiscoverTutorial = status;
    }
}

export default SettingsStore;
