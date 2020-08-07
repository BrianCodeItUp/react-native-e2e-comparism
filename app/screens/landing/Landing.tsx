import { Button, ListItem } from 'react-native-elements'
import { Dimensions, SafeAreaView, Text, TextStyle, View, ViewStyle } from 'react-native'
import React, { useCallback } from 'react'

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
  const addToDo = useCallback(() => {
    navigation.navigate('todo')
  }, [])

  return (
    <View style={CONTAINER}>
      <SafeAreaView/>
      <View style={CONTENT}>
        <View style={TITLE_WRAPPER}><Text style={TITLE}>功能</Text></View>
        <Button title="新增待辦事項" onPress={addToDo} />
      </View>
    </View>
  )
}

export default Landing;