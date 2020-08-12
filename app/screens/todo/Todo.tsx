import { Button, Input, ListItem, Overlay } from 'react-native-elements'
import { Dimensions, FlatList, Keyboard, KeyboardAvoidingView, Text, TextStyle, TouchableWithoutFeedback, View, ViewStyle } from 'react-native';
import React, { useState } from 'react';

import { testID } from '../utils'

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window')

const POPUP_CONTENT_WRAPPER: ViewStyle = {
  width: 200,
  height: 200,
  justifyContent: 'center',
  alignItems: 'center'
}

const POPUP_TITLE: TextStyle = {
  fontWeight: '500',
  fontSize: 30,
}

const POPUP_BUTTON_WRAPPER: ViewStyle = {
  width: 150,
  height: 50,
  marginTop: 20,
  backgroundColor: '#595959'
}

const POPUP_BUTTON: ViewStyle = {
  backgroundColor: 'orange'
}

const Popup = ({ isVisible, setIsVisible }) => {
  return (
    <Overlay isVisible={isVisible} >
      <View style={POPUP_CONTENT_WRAPPER} {...testID('succed-popup')}>
        <Text style={POPUP_TITLE} {...testID('popup-title')}>新增成功</Text>
        <Button 
          buttonStyle={POPUP_BUTTON} 
          containerStyle={POPUP_BUTTON_WRAPPER} 
          title='確認' 
          onPress={() => setIsVisible(false)}
          {...testID('succeed-popup-button')}
        />
      </View>
    </Overlay>
  )
}

const CONTAINR: ViewStyle = {
  flex: 1,
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
  width: DEVICE_WIDTH - 80,
  marginTop: 30,
  marginBottom: 10,
}

const LIST_WRAPPER: ViewStyle = {
  width: DEVICE_WIDTH -80,
  marginTop: 20
}

const LIST_ITEM: ViewStyle = {
  width: DEVICE_WIDTH  * .8,
  height: 50,
  marginBottom: 16,
  borderRadius: 6,
}

interface Todo {
  id: number;
  label: string;
  isChecked: boolean
}
const Todos: React.FC = () => {
  const [content, setContent]= useState('');
  const [todos, setTodos] = useState<Todo[]>([])
  const [isAddSuccess, setIsAddSuccess] = useState(false)
  const addTodo = () => {
    const id = todos.length + 1; 
    const todo: Todo = { 
      id: id,
      label: content,
      isChecked: false
    }
    setTodos(currentTodos => [todo, ...currentTodos]);
    setContent('')
    Keyboard.dismiss()
    setIsAddSuccess(true)
  }

  const toggleTodo = (seletedId: number) => {
    setTodos(currentTodos => {
      const newTodos = currentTodos.map(todo => {
        if (todo.id === seletedId) {
          return {
            ...todo,
            isChecked: !todo.isChecked
          }
        }
        return todo
      })
      return newTodos;
    })
  }
  return (
    <View style={{ flex: 1}} {...testID('todo-screen')}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} > 
        <KeyboardAvoidingView style={CONTAINR} behavior='padding'  keyboardVerticalOffset={100}>
          <View style={LIST_WRAPPER}>
            <FlatList 
              data={todos} 
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <ListItem 
                    title={item.label} 
                    containerStyle={LIST_ITEM}
                    onPress={() => toggleTodo(item.id)} 
                    rightElement={item.isChecked && <Text> ✔</Text>}
                  />
                )
              }} 
              keyExtractor={item=> item.id.toString()}
            />
          </View>
          <View style={INPUT_WRAPPER} >
            <Input 
              placeholder='輸入您的代辦事項' 
              onChangeText={setContent} 
              value={content}
              {...testID('todo-input')}
            />
            <Button 
              title='新增' 
              onPress={addTodo}
              {...testID('add-todo-button')}
            />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <Popup 
        isVisible={isAddSuccess} 
        setIsVisible={setIsAddSuccess}
      />
    </View>
  );
};

export default Todos;
