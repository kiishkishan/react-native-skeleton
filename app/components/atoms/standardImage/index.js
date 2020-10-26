/*
 * Arista Application 22.10.2020
 * Copyright © 2020 Arista. All rights reserved.
 */

import React from 'react';
import { CachedImage } from 'react-native-cached-image';
import { Image } from 'react-native';

const StandardImage = (props) => {
    const { source } = props;
    return Object.values(source).length > 0 ? <CachedImage {...props} /> : <Image {...props} />;
};

export default StandardImage;
