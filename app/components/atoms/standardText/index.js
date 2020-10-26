/*
 * Arista Application 23.10.2020
 * Copyright © 2020 Arista. All rights reserved.
 */

import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import styles from './style';
import { LANGUAGE_KEYS } from '../../../utilities/contants/constants';
import commonStyles from '../../../theme/styles/commonStyles';

const StandardText = (props) => {
    const {
        children, style, containerStyle, onPress, numberOfLines, bold, translationsStore,
        overrideTextStyle,
        withoutView
    } = props;

    let _bold = bold;

    if (!bold && style) {
        if (style.fontFamily === commonStyles.commonFontBold.fontFamily) {
            _bold = true;
        }
        if (style.fontWeight && style.fontWeight !== 'normal') {
            _bold = true;
        }
    }

    const renderText = (
        <Text
            numberOfLines={numberOfLines}
            onPress={onPress}
            style={
                [
                    styles.textStyle,
                    style,
                    styles.fontStyle(_bold),
                    overrideTextStyle
                ]
            }
        >
            {children}
        </Text>
    );

    if (withoutView) return renderText;


    return (
        <View {...props} style={[styles.container, containerStyle]}>
            {renderText}
        </View>
    );
};
StandardText.propTypes = {
    children: PropTypes.shape({}),
    accessibilityLabel: PropTypes.string,
    style: PropTypes.shape({}),
    containerStyle: PropTypes.shape({}),
    onPress: PropTypes.func,
    numberOfLines: PropTypes.number,
    withoutView: PropTypes.bool
};

StandardText.defaultProps = {
    children: '',
    accessibilityLabel: 'Text View',
    style: styles.textStyle,
    containerStyle: styles.container,
    onPress: null,
    numberOfLines: null,
    withoutView: false
};

export default StandardText;
