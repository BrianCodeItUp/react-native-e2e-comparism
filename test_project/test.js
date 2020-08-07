const wdio = require("webdriverio");
const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "10",
    deviceName: "Pixel_3_API_29",
    app: "/Users/brian.chen/Documents/e2e/e2eSetup/android/app/build/outputs/apk/debug/app-debug.apk",
    // appPackage: "io.appium.android.apis",
    // appActivity: ".view.TextFields",
    automationName: "UiAutomator2"
  },
  // specs: [
  //   './test/*.js'
  // ],
};

async function main () {
  const client = await wdio.remote(opts);

  const field = await client.$("~username");
  await field.setValue("Hello World!");
  // const value = await field.getText();
  // assert.equal(value,"Hello World!");


  await client.deleteSession();
}

main();
