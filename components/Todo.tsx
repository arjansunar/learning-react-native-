import {
  View,
  Text,
  StyleSheet,
  Platform,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';

type Props = {};

const isAndriod = Platform.OS == 'android';
type Todo = {
  id: number;
  text: string;
  done: boolean;
};
const Todo = (props: Props) => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [task, setTask] = useState<string>('');
  useEffect(() => {
    console.log({todo});
  }, [todo]);
  const addTodo = (text: string) => {
    setTodo(prev => [
      ...prev,
      {
        id: prev.length,
        text,
        done: false,
      },
    ]);
  };
  return (
    <View style={styles.wrapper}>
      <Text>Todo</Text>
      <TextInput onChangeText={text => setTask(text)} placeholder="Add todos" />
      <FlatList
        data={todo}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              const prev = [...todo];
              prev[item.id].done = true;
              setTodo(prev);
            }}>
            <Text
              style={item.done ? styles.taskDoneStyles : styles.baseTextStyles}>
              {item.text}
            </Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Add todo" onPress={() => addTodo(task)} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: isAndriod ? 10 : 0,
    backgroundColor: '#aca7a7',
    height: '100%',
  },
  taskDoneStyles: {
    textDecorationLine: 'line-through',
  },
  baseTextStyles: {
    color: '#141212',
  },
});

export default Todo;
