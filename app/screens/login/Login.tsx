import { Button, Card, Input, Overlay } from 'react-native-elements'
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TextStyle, TouchableWithoutFeedback, View, ViewStyle } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';

import { testID } from '../utils'
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
  marginBottom: 10
}

const TITLE: TextStyle = {
  fontSize: 50,
  textAlign: 'center'
}

const INPUT_WRAPPER: ViewStyle = {
  marginBottom: 10
}

const BUTTON = {
  backgroundColor: 'orange'
}


const Login = () => {
  const navigation = useNavigation()
  const [userName, setUserName] = useState('');
  const [password, setPassoword] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const onLogin = useCallback(() => {
    if (userName.length === 0 || password.length === 0) {
      setIsError(true)
      return;
    }

    Keyboard.dismiss()
    setTimeout(() => {
      navigation.navigate('landing')
    }, 500)
  }, [userName, password])

  const keyboardBehavior = {
    ios: 'padding',
    android: null,
  };

  // useEffect(() => {
  //   async function loadData() {
  //     setIsLoading(true)
  //     const time = (Math.floor(Math.random() * 10) + 1) *1000
  //     const result = await new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         resolve(true)  
  //       }, time)
  //     })
  
  //     if(result) {
  //       setIsLoading(false)
  //     }
  //   }
  //   loadData()
  // }, [])

  return (
    <View style={{ flex: 1}} {...testID('app-root')} accessible={false}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}> 
        <KeyboardAvoidingView style={CONTAINR} behavior={keyboardBehavior[Platform.OS]} keyboardVerticalOffset={50}>
          <Card containerStyle={CONTENT}>
            <View style={TITLE_WRAPPER}>
              <Text style={TITLE} {...testID('login-title')}>Login</Text>
            </View>
            <View style={INPUT_WRAPPER}>
              <Input
                label='E-mail'
                placeholder='請輸入您的信箱'
                value={userName}
                onChangeText={(text) => {
                  console.log(text)
                  setUserName(text)
                }}
                {...testID('username')}
              />
              <Input
                label='Password'
                placeholder='請輸入您的密碼'
                value={password}
                onChangeText={setPassoword}
                {...testID('password')}
              />
            </View>
            <Button 
              title='登入' 
              buttonStyle={BUTTON} 
              onPress={onLogin}
              {...testID('login-button')}
            />
          </Card>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <Overlay isVisible={isError}>
        <View {...testID('login-error-popup')}>
          <Text {...testID('login-error-popup-title')}>登入資訊有誤，請在嘗試一次</Text>
          <Button 
            title='Ok' 
            onPress={() => setIsError(false)} 
            {...testID('login-error-popup-button')}
          />
        </View>
      </Overlay>
      <Overlay isVisible={isLoading}>
        <View>
          <Text>載入中</Text>
        </View>
      </Overlay>
    </View>
  );
};

export default Login;
