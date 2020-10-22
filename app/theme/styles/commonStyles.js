/*
 * Arista Application 17.10.2020
 * Copyright © 2020 Arista. All rights reserved.
 */

import { StyleSheet, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {
    responsiveHeight,
    responsiveFontSize
} from 'react-native-responsive-dimensions';
import { TextHeadingColor, ShadowColor } from '../colours/commonColors';
import COLORS from '../colours';

export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: Platform.os === 'android' ? '#000' : '#f9f9f9'
    },
    appBackground: {
        backgroundColor: '#ffffff'
    },
    commonFont: {
        fontFamily: 'Muli'
    },
    commonFontSemiBold: {
        fontFamily: 'Muli-SemiBold'
    },
    fontSizeMini: {
        fontSize: responsiveHeight(1.5)
    },
    fontSizeSmall: {
        fontSize: responsiveHeight(1.8)
    },
    fontSizeMedium: {
        fontSize: responsiveHeight(2)
    },
    fontSizeLarge: {
        fontSize: responsiveHeight(2.2)
    },
    CommonAccentColor: {
        backgroundColor: COLORS.WHITE
    },
    headerTitle: {
        fontSize: DeviceInfo.isTablet()
            ? responsiveFontSize(2)
            : responsiveFontSize(2.5),
        color: TextHeadingColor
    },
    shadowEffect: {
        elevation: 10,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 5, height: 5 },
                shadowColor: ShadowColor,
                shadowOpacity: 10
            }
        }),
        backgroundColor: COLORS.WHITE
    },
    pageMarginForTabBar: {
        paddingBottom: 100
    },
    pagePaddingForTabBar: {
        paddingBottom: 150
    },
    pageSeparator: {
        width: '100%',
        height: 1,
        backgroundColor: COLORS.CELLCARD_LIGHT_GRAY
    },
    pageContainer: {
        flex: 1,
        backgroundColor: COLORS.CELLCARD_ASH
    }
});
