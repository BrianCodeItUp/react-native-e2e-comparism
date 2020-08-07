const { config } = require('./wdio.shared.conf');

config.capabilities = [{
  path: '/wd/hub',
  automationName: "UiAutomator2",
  deviceName: "Pixel_3_API_29", // This is name of your Simulator
  platformName: "Android",
  platformVersion: "10", // Android version of Simulator
  orientation: "PORTRAIT",
  maxInstances: 1,
  // absolute path of apk
  app: '/Users/brian.chen/Documents/e2e/e2eSetup/android/app/build/outputs/apk/debug/app-debug.apk',
  noReset: true,
  newCommandTimeout: 240,
}]

exports.config = config;