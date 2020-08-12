export default class AppScreen {
  constructor (selector) {
      this.selector = selector;
  }

  /**
   * Wait for the login screen to be visible
   *
   * @param {boolean} isShown
   * @return {boolean}
   */
  waitForIsShown (isShown = true) {
      return $(this.selector).waitForDisplayed({
          timeout: 11000,
          reverse: !isShown,
      });
  }
}