/// <reference types="@capacitor-community/safe-area" />
/// <reference types="@capacitor/status-bar" />

import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.efood.driver.app',
  appName: 'Driver',
  webDir: 'dist/efood-driver/browser',
  server: {
    // url: "http://192.168.64.1:4200",
    cleartext: true,
    androidScheme: 'http',
  },
  plugins: {
    StatusBar: {
      overlaysWebView: true
    },
    SafeArea: {
      enabled: true,
      customColorsForSystemBars: true,
      statusBarColor: '#000000',
      statusBarContent: 'light',
      navigationBarColor: '#000000',
      navigationBarContent: 'light'
    }
  }
};

export default config;
