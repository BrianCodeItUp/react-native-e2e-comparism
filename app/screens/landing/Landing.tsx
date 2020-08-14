import { Dimensions, SafeAreaView, Text, TextStyle, View, ViewStyle, } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'

import { Button } from 'react-native-elements'
import { Overlay } from 'react-native-elements'
import { testID } from '../utils'
import { useNavigation } from '@react-navigation/native'

const { width: DEVICE_WIDTH } = Dimensions.get('window')
const CONTAINER: ViewStyle = {
  flex: 1,
  alignItems: 'center'
}

const CONTENT: ViewStyle = {
  marginTop: 100,
  width: DEVICE_WIDTH - 80,
}

const TITLE_WRAPPER: ViewStyle = {
  marginBottom: 20
}
const TITLE: TextStyle = {
  fontSize: 30,
  textAlign: 'center'
}

const Landing = () => {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false)
  const addToDo = useCallback(() => {
    navigation.navigate('todo')
  }, [])

  useEffect(() => {
    async function loadData() {
      setIsLoading(true)
      const time = (Math.floor(Math.random() * 10) + 1) *1000
      const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true)  
        }, time)
      })
  
      if(result) {
        setIsLoading(false)
      }
    }
    loadData()
  }, [])

  
  return (
    <View style={CONTAINER} {...testID('landing-screen')}>
      <SafeAreaView/>
      <View style={CONTENT}>
        <View style={TITLE_WRAPPER}><Text style={TITLE}>功能</Text></View>
        <Button title="新增待辦事項" onPress={addToDo} {...testID('go-to-add-todo-button')} />
      </View>
      <Overlay isVisible={isLoading}>
        <View>
          <Text>載入中</Text>
        </View>
      </Overlay>
    </View>
  )
}

export default Landing;