import { Button, Card, Input } from 'react-native-elements'
import { Keyboard, KeyboardAvoidingView, Text, TextStyle, TouchableWithoutFeedback, View, ViewStyle } from 'react-native';
import React, { useCallback } from 'react';

import { useNavigation } from "@react-navigation/native"

const CONTAINR: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
}

const CONTENT: ViewStyle = {
  width: 300,
  height: 350,
  borderWidth: 1,
}

const TITLE_WRAPPER: ViewStyle = {
  marginBottom: 30
}

const TITLE: TextStyle = {
  fontSize: 50,
  textAlign: 'center'
}

const INPUT_WRAPPER: ViewStyle = {
  marginBottom: 10
}

const BUTTON: ViewStyle = {
  backgroundColor: 'orange'
}


const Login: React.FC = () => {
  const navigation = useNavigation()
  const onLogin = useCallback(() => {
    Keyboard.dismiss()
    setTimeout(() => {
      navigation.navigate('landing')
    }, 500)
  }, [])

  console.log(navigation)
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} testID="app-root" accessibilityLabel="app-root"> 
      <KeyboardAvoidingView style={CONTAINR} behavior='padding'  keyboardVerticalOffset={50}>
        <Card containerStyle={CONTENT}>
          <View style={TITLE_WRAPPER}>
            <Text style={TITLE}>Login</Text>
          </View>
          <View style={INPUT_WRAPPER}>
            <Input
              label='E-mail'
              placeholder='請輸入您的信箱'
              accessibilityLabel='username'
            />
            <Input
              label='Password'
              placeholder='請輸入您的密碼'
              accessibilityLabel='password'
            />
          </View>
          <Button title='登入' buttonStyle={BUTTON} onPress={onLogin} accessibilityLabel='login' />
        </Card>

      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    
  );
};

export default Login;
