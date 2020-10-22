package com.rnfingerprint;

import com.facebook.react.bridge.Callback;

public class DialogResultHandler implements FingerprintDialog.DialogResultListener {
    private Callback errorCallback;
    private Callback successCallback;
    private Callback invokedCallback;

    public DialogResultHandler(Callback reactErrorCallback, Callback reactSuccessCallback) {
      errorCallback = reactErrorCallback;
      successCallback = reactSuccessCallback;
    }

    @Override
    public void onAuthenticated() {
      FingerprintAuthModule.inProgress = false;
      successCallback.invoke("DialogResultHandler::Successfully authenticated.", false);
    }
    
    @Override
    public void onAuthenticated(boolean passCodeAuthenticated) {
      FingerprintAuthModule.inProgress = false;
      successCallback.invoke("DialogResultHandler::Successfully authenticated.", passCodeAuthenticated);
    }
    
    @Override
    public void onPasscodeInvoked(String passcodeInvokeStatus) {
      successCallback.invoke(passcodeInvokeStatus);
    }

    @Override
    public void onError(String errorString, int errorCode) {
      FingerprintAuthModule.inProgress = false;
      errorCallback.invoke(errorString, errorCode);
    }
    @Override
    public void onCancelled() {
      FingerprintAuthModule.inProgress = false;
      errorCallback.invoke("cancelled", FingerprintAuthConstants.AUTHENTICATION_CANCELED);
    }
}
