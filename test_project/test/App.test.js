describe('Simple App testing', () => {
  it('未輸入值，登入檢核失敗', () => {
    $('~login-button').click();
    $('~login-error-popup').waitForDisplayed(10, false);
    expect($('~login-error-popup-title').getText()).toEqual('登入資訊有誤，請在嘗試一次');
    $('~login-error-popup-button').click();
  });

  it('登入成功', () => {
    $('~username').setValue('Brian Chen')
    $('~password').setValue('123456')
    $('~login-button').click();
  });

  it('主頁導頁至新增代辦事項頁面', () => {
    $('~landing-screen').waitForDisplayed(10, false)
    $('~go-to-add-todo-button').click()
  })

  it('新增代辦事項成功', () => {
    $('~todo-screen').waitForDisplayed(10, false);
    $('~todo-input').setValue('測試辦事項')
    $('~add-todo-button').click()
    $('~succed-popup').waitForDisplayed(10, false);
    expect($('~popup-title').getText()).toEqual('新增成功');
    $('~succeed-popup-button').click();
  })
}); 