# A boilerplate for TypeScript / React Native app

## Version

- React `v15.4.1`
- React Native `v0.39.2`
- Redux `v3.6.0`
- TypeScript `v2.1.4`

## Android

- Android SDK 25 is required
- `npm run dev-server` to start dev server and watch `src/ts/*.ts` files
- `npm run android:build` to create debug apk (`android/build/outputs/apk/android-debug.apk`)
    - [adb reverse](https://facebook.github.io/react-native/docs/running-on-device-android.html#using-adb-reverse) may be required
    - You can also import `android/` into Android Studio and run with it
- `npm run android:release` to build signed apk `android/build/outputs/apk/android-release.apk` with offline minimized js bundle.

## iOS (TODO)

