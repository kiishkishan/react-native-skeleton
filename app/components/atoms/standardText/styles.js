/*
 * Arista Application 23.10.2020
 * Copyright © 2020 Arista. All rights reserved.
 */

import { StyleSheet } from 'react-native';
import colours from '../../../theme/colours';

export default StyleSheet.create({
    container: {
        alignItems: 'flex-start'
    },
    textStyle: {
        fontSize: 16,
        textAlign: 'center',
        alignContent: 'center',
        color: colours.NOTIFICATION_BADGE_BLACK
    },
    fontStyle: isBold => ({
        fontFamily: !isBold ? 'Muli' : 'Muli-SemiBold'
    })
});
