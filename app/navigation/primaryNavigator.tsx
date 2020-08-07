import {Landing, Login, Todo} from '../screens';

import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

const Stack = createNativeStackNavigator();

const PrimaryNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen 
        name="landing" 
        component={Landing}
      />
      <Stack.Screen 
        name="todo" 
        component={Todo} 
        options={{
          headerShown: true,
          title: '新增代辦事項',
          headerBackTitle: '返回'
        }}
      />
    </Stack.Navigator>
  );
};

export default PrimaryNavigator;
