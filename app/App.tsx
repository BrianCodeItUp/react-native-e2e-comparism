import React, {useRef} from 'react';

import {RootNavigator} from './navigation';
import {enableScreens} from 'react-native-screens';

enableScreens();

const App = () => {
  const navigationRef = useRef();
  return <RootNavigator ref={navigationRef} />;
};

export default App;
