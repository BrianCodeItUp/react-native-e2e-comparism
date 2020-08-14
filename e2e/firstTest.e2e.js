describe('App test', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('未輸入值，登入檢核失敗', async () => {
    await element(by.id('login-button')).tap();
    await expect(element(by.id('login-error-popup'))).toBeNotVisible();
    await expect(element(by.id('login-error-popup-title'))).toHaveValue('登入資訊有誤，請在嘗試一次')
    await expect(element(by.id('login-error-popup-button'))).toBeNotVisible();
    await element(by.id('login-error-popup-button')).tap();
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
