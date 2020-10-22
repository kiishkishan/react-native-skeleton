#/bin/sh
STR=$'\n'

echo "=============> Install Dependencies <============="

set +e
hasNodeJs=$(node -v)
set -e

if [ ! "$hasNodeJs" ]; then

    if [[ "$OSTYPE" == "cygwin" ]]; then
        brew install node
        brew install watchman
    else
        exit;
    fi

    npm list -g | grep react-native-cli || npm install -g react-native-cli
      
fi

yarn install

echo "=================================================="

echo "$STR"
sleep 5
echo "$STR"

set +e
echo "=============> Linking environments <============="
ln -s ./app/utilities/environments/.env.dev .env.dev
ln -s ./app/utilities/environments/.env.prod .env.prod
echo "=================================================="
set -e

echo "$STR"
sleep 5
echo "$STR"

# echo "================> IOS Pod Setup <================="
# cd ios
# pod install
# cd ..
# cp app/utilities/environments/GoogleService-Info-QA.plist ios/GoogleService-Info.plist
# # cp app/utilities/environments/RCTFBSDKLoginManager.m node_modules/react-native-fbsdk/ios/RCTFBSDK/login/RCTFBSDKLoginManager.m
# cp app/utilities/environments/react-native-image-picker.js node_modules/react-native-image-picker/index.js
# cp app/utilities/environments/RCTYouTubeManager.m node_modules/react-native-youtube/RCTYouTubeManager.m
# cp app/utilities/environments/YouTube.ios.js node_modules/react-native-youtube/YouTube.ios.js
# echo "=================================================="

echo "$STR"
sleep 5
echo "$STR"


echo "============> Android Gradle Setup <=============="
#cp app/utilities/environments/google-services-qa.json android/app/google-services.json
cd android
./gradlew clean && ./gradlew :app:dependencies
cd ..
#yarn migrate:androidx
echo "=================================================="

echo "$STR"
sleep 5
echo "$STR"



