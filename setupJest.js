/*
 * Arista Application 23.10.2020
 * Copyright © 2020 Arista. All rights reserved.
*/

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'isomorphic-fetch';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;

const { document } = new JSDOM('').window;
global.document = document;
global.window = document.defaultView;

global.fetch = jest.fn(() => new Promise(resolve => resolve()));

jest.mock('react-native-firebase', () => ({
    messaging: jest.fn(() => ({
        hasPermission: jest.fn(() => Promise.resolve(true)),
        subscribeToTopic: jest.fn(),
        unsubscribeFromTopic: jest.fn(),
        requestPermission: jest.fn(() => Promise.resolve(true)),
        getToken: jest.fn(() => Promise.resolve('myMockToken'))
    })),
    notifications: jest.fn(() => ({
        onNotification: jest.fn(),
        onNotificationDisplayed: jest.fn()
    })),
    perf: jest.fn(() => ({
        setPerformanceCollectionEnabled: jest.fn()
    })),
    analytics: jest.fn(() => ({
        setAnalyticsCollectionEnabled: jest.fn(),
        setUserProperty: jest.fn(),
        logEvent: jest.fn(),
        setCurrentScreen: jest.fn()
    }))
}));

jest.mock('react-native-gesture-handler', () => {
    const RealComponent = require.requireActual('TouchableOpacity');
    const React = require('React');
    class TouchableOpacity extends React.Component {
        render() {
            return React.createElement('TouchableOpacity', this.props, this.props.children);
        }
    }
    TouchableOpacity.propTypes = RealComponent.propTypes;
    return TouchableOpacity;
});

jest.mock('react-navigation', () => ({
    withNavigation: component => component,
    NavigationEvents: () => {
        const RealComponent = require.requireActual('View');
        const React = require('React');
        class View extends React.Component {
            render() {
                return React.createElement('View', this.props, this.props.children);
            }
        }
        View.propTypes = RealComponent.propTypes;
        return View;
    }
}));

jest.mock('react-native-firebase', () => ({
    messaging: jest.fn(() => ({
        hasPermission: jest.fn(() => Promise.resolve(true)),
        subscribeToTopic: jest.fn(),
        unsubscribeFromTopic: jest.fn(),
        requestPermission: jest.fn(() => Promise.resolve(true)),
        getToken: jest.fn(() => Promise.resolve('myMockToken'))
    })),
    notifications: jest.fn(() => ({
        onNotification: jest.fn(),
        onNotificationDisplayed: jest.fn()
    })),
    analytics: jest.fn(() => { })
}));

Enzyme.configure({ adapter: new Adapter() });

// ------ Mock for FormData
global.FormData = () => ({
    append: () => { }
});

jest.mock('react-native-config', () => ({
    ENV: 'DEV',
    APP_VERSION: '1.0.0',
    APP_VERSION_CODE: '001',
}));

// jest.mock('TextInput', () => {
//     const RealComponent = require.requireActual('TextInput');
//     const React = require('React');
//     class TextInput extends React.Component {
//         render() {
//             delete this.props.autoFocus;
//             return React.createElement('TextInput', this.props, this.props.children);
//         }
//     }
//     TextInput.propTypes = RealComponent.propTypes;
//     return TextInput;
// });

// ------ Mock for navigator
global.navigator = {
    geolocation: {
        getCurrentPosition(geo_success, geo_error) { }
    }
};

jest.mock('react-native-device-info', () => ({
    isTablet: () => false
}));

jest.mock('react-native-cached-image', () => {
    // eslint-disable-next-line global-require
    const mockComponent = require('react-native/jest/mockComponent');
    return {
        CachedImage: mockComponent('Image')
    };
});


