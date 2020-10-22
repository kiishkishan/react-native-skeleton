/*
* Arista Application 10.7.2020
* Copyright © 2020 Arista. All rights reserved.
*/

import { AppRegistry } from 'react-native';
import App from './app/boot/index';
import { name as appName } from './app/boot/app.json';
import bgMessaging from './app/utilities/bgMessaging';

//console.disableYellowBox = true;
//LogBox.ignoreAllLogs = true

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerHeadlessTask(
    'RNFirebaseBackgroundMessage',
    () => bgMessaging
);

// console.disableYellowBox = true;
// export default from './storybook';
