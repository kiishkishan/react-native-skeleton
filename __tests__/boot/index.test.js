/*
 * Arista Application 23.10.2020
 * Copyright © 2020 Arista. All rights reserved.
 */

import React from 'react';
import { shallow } from 'enzyme';
import App from '../../app/boot';
import { beforeAll } from 'jest';

jest.mock('react-native-firebase', () => ({
    analytics: jest.fn(() => ({
        logEvent: jest.fn(),
        setUserProperty: jest.fn(),
        setCurrentScreen: jest.fn(),
        key: jest.fn()
    }))
}));

jest.mock('../../app/services/navigationService.js', () => ({
    stores: jest.fn(() => ({
        securityStore: jest.fn()
    })),
    NavigationActions: jest.fn(() => ({
        navigate: jest.fn()
    })),
    navigateWithState: jest.fn(),
    storeUpdating: jest.fn(),
    isAppInitiated: jest.fn()
}));

jest.mock('../../app/mobx/utils/routes.js', () => ({
    createStackNavigator: jest.fn()
}));

describe('App Component', () => {
    const props = {
        navStore: {
            getCurrentNav() {
                return true;
            }
        },
    };
    it('Rendering App component successfully', () => {
        const wrapper = shallow(<App {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
    it('componentDidMount is being called', () => {
        const wrapper = shallow(<App {...props} />);
        const instance = wrapper.instance();
        jest.spyOn(instance, 'componentDidMount');
        instance.componentDidMount();
        expect(instance.componentDidMount).toHaveBeenCalled();
    });

    it('Rendering App component successfully', () => {
        const wrapper = shallow(<App {...props} />);
        expect(wrapper.instance().componentWillUnmount()).toBe(undefined);
    });

    it('_handleAppStateChange is being called', () => {
        const nextAppState = {
            match: jest.fn()
        }
        const wrapper = shallow(<App {...props} />);
        const instance = wrapper.instance();
        jest.spyOn(instance, '_handleAppStateChange');
        instance._handleAppStateChange(nextAppState);
        expect(instance._handleAppStateChange).toHaveBeenCalled();
    });

    it('_keyboardDidShow is being called', () => {
        const e = {
            endCoordinates: ''
        }
        const wrapper = shallow(<App {...props} />);
        const instance = wrapper.instance();
        jest.spyOn(instance, '_keyboardDidShow');
        instance._keyboardDidShow(e);
        expect(instance._keyboardDidShow).toHaveBeenCalled();
    });

    it('_keyboardDidHide is being called', () => {
        const wrapper = shallow(<App {...props} />);
        const instance = wrapper.instance();
        jest.spyOn(instance, '_keyboardDidHide');
        instance._keyboardDidHide();
        expect(instance._keyboardDidHide).toHaveBeenCalled();
    });

    it('render is being called', () => {
        const wrapper = shallow(<App {...props} />);
        const instance = wrapper.instance();
        jest.spyOn(instance, 'render');
        instance.render();
        expect(instance.render).toHaveBeenCalled();
    });
});
