/*
* Cellcard Selfcare Application 30.6.2019
* Copyright © 2019 Cellcard. All rights reserved.
 */
import { NativeModules, processColor } from 'react-native';
import { androidApiErrorMap, androidModuleErrorMap } from './data/errors';
import { getError, TouchIDError, TouchIDUnifiedError } from './errors';

const NativeTouchID = NativeModules.FingerprintAuth;

export default {
  isSupported(config) {
    return new Promise((resolve, reject) => {
      NativeTouchID.isSupported(
        (error, code) => reject(createError(config, error, code)),
        success => resolve(true)
      );
    });
  },

  authenticate(reason, config) {
    const DEFAULT_CONFIG = {
      title: 'Authentication Required',
      imageColor: '#1306ff',
      imageErrorColor: '#ff0000',
      sensorDescription: 'Touch sensor',
      sensorErrorDescription: 'Failed',
      cancelText: 'Cancel',
      unifiedErrors: false
    };
    const authReason = reason || ' ';
    const authConfig = Object.assign({}, DEFAULT_CONFIG, config);
    const imageColor = processColor(authConfig.imageColor);
    const imageErrorColor = processColor(authConfig.imageErrorColor);

    authConfig.imageColor = imageColor;
    authConfig.imageErrorColor = imageErrorColor;

    return new Promise((resolve, reject) => {
      NativeTouchID.authenticate(
        authReason,
        authConfig,
        (error, code) => reject(createError(authConfig, error, code)),
        (success, passCodeAuthenticated) => {
          if (passCodeAuthenticated) {
            return resolve('PASSCODE_FALLBACK_INVOKED');
          }
          return resolve(true);
        }
      );
    });
  }
};

function createError(config, error, code) {
  const { unifiedErrors } = config || {};
  const errorCode = androidApiErrorMap[code] || androidModuleErrorMap[code];

  if (unifiedErrors) {
    return new TouchIDUnifiedError(getError(errorCode));
  }

  return new TouchIDError('Touch ID Error', error, errorCode);
}
