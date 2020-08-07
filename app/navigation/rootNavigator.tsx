import {NavigationContainer, NavigationContainerRef} from '@react-navigation/native';

import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import primaryNavigator from './primaryNavigator';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        stackPresentation: 'modal',
      }}>
      <Stack.Screen
        name="primaryStack"
        component={primaryNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <RootStack />
    </NavigationContainer>
  );
});

RootNavigator.displayName = 'RootNavigator';
