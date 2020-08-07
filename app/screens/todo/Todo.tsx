import { Button, Input, ListItem, Overlay } from 'react-native-elements'
import { Dimensions, FlatList, Keyboard, KeyboardAvoidingView, Text, TextStyle, TouchableWithoutFeedback, View, ViewStyle } from 'react-native';
import React, { useState } from 'react';

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window')

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
    setIsAddSuccess(true)
    const id = todos.length + 1; 
    const todo: Todo = { 
      id: id,
      label: content,
      isChecked: false
    }
    setTodos(currentTodos => [todo, ...currentTodos]);
    setContent('')
    Keyboard.dismiss()
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

  console.log(todos)
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
      <KeyboardAvoidingView style={CONTAINR} behavior='padding'  keyboardVerticalOffset={300}>
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
          <Input placeholder='輸入您的代辦事項' onChangeText={setContent} value={content} />
          <Button title='新增' onPress={addTodo} />
        </View>
        <Overlay isVisible={isAddSuccess}>
        <Text>新增成功</Text>
      </Overlay>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    
  );
};

export default Todos;
