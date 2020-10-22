/*
 * Arista Application 21.10.2020
 * Copyright © 2020 Arista. All rights reserved.
 */

import { create } from 'mobx-persist';
import AsyncStorage from '@react-native-community/async-storage';

// Store Modules
;
import NavStore from './nav/index';
import SettingsStore from './settings/index';
import navigationService from '../../services/navigationService';


// initialize hydrate module with AsyncStorage
// as the storage option with JSON object format enabled
const hydrate = create({
    storage: AsyncStorage,
    jsonify: true
});

export default function () {
    navigationService.storeUpdating();

    // initialize stores
    const navStore = new NavStore();
    const settingsStore = new SettingsStore();
    // add stores that utilizes persist feature
    // hydrate('homeStore', homeStore);

    hydrate('settingsStore', settingsStore).then(async () => {
        navigationService.storeUpdated('settings');
    });


    return {
        navStore,
        settingsStore,
    };
}
