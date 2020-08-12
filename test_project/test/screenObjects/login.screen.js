import AppScreen from './app.screen';

const SELECTORS = {
    LOGIN_SCREEN: 'Login-screen',
    USER_NAME: 'userName',
    PASSWORD: 'password',
};

class LoginScreen extends AppScreen {
    constructor () {
        super(SELECTORS.LOGIN_SCREEN);
    }

    get userName () {
        return $(SELECTORS.INPUT);
    }

    get password () {
        return $(SELECTORS.PASSWORD);
    }
}

export default new LoginScreen();