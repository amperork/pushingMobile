import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.buss.app',
  appName: 'BusApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
