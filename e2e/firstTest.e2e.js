describe('打卡成功', () => {
  it('未輸入值，登入檢核失敗', async () => {
    await $('login-button').tap();
    await waitFor($('login-error-popup')).toBeVisible();
    await expect($('login-error-popup-title')).toHaveText('登入資訊有誤，請在嘗試一次')
    await $('login-error-popup-button').tap();
  });
  
  it('登入成功', async () => {
    await $('username').typeText('Brian Chen');
    await $('password').typeText('123456');
    await $('login-button').tap();
  });

  it('主頁導頁至新增代辦事項頁面', async () => {
   const btn = $('go-to-add-todo-button')
   await waitFor(btn).toBeVisible().withTimeout(5000)
   await btn.tap()
  });

  it('新增代辦事項成功', async () => {
    const todoIput = $('todo-input');
    await waitFor(todoIput).toBeVisible().withTimeout(5000);
    await todoIput.replaceText('測試辦事項')
    await $('add-todo-button').tap();
    await expect($('popup-title')).toHaveText('新增成功')
    await $('succeed-popup-button').tap();
  });
});

/** element selector */
function $ (id) {
  return element(by.id(id))
}
