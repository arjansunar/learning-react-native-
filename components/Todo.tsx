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
import React, {useState} from 'react';
import {NavigationStackProp} from 'react-navigation-stack';
const isAndriod = Platform.OS == 'android';
type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type Prop = {
  navigation: NavigationStackProp;
};
const Todo = ({navigation}: Prop) => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [task, setTask] = useState<string>('');

  const addTodo = (text: string) => {
    setTodo(prev => [
      ...prev,
      {
        id: prev.length,
        text,
        done: false,
      },
    ]);
    setTask('');
  };

  return (
    <View style={styles.wrapper}>
      <Text>Todo</Text>
      <View style={styles.addTodo}>
        <View style={styles.flexRow}>
          <TextInput
            onSubmitEditing={() => {
              addTodo(task);
            }}
            onChangeText={text => setTask(text)}
            placeholder="Add todos"
            value={task}
            style={styles.textInputPadding}
          />
          <Button
            title="Add todo"
            onPress={() => {
              addTodo(task);
            }}
          />
        </View>
      </View>

      <FlatList
        data={todo}
        renderItem={({item}) => (
          <SingleTask
            onPress={() => {
              const prev = [...todo];
              prev[item.id].done = true;
              setTodo(prev);
            }}
            item={item}
            onPressDelete={() => {
              const prev = [...todo].filter(el => el.id !== item.id);
              setTodo(prev);
            }}
          />
        )}
      />
      <Button title="Go to home" onPress={() => navigation.push('Home')} />
    </View>
  );
};

const SingleTask = ({
  onPress,
  item,
  onPressDelete,
}: {
  onPress: () => void;
  item: Todo;
  onPressDelete: () => void;
}) => {
  return (
    <View style={styles.todoStyles}>
      {/* touchable opacity creates a 'touchable' component and provides onClick */}
      {/* like handler called onPress */}
      <TouchableOpacity onPress={onPress}>
        <Text style={item.done ? styles.taskDoneStyles : styles.baseTextStyles}>
          {item.text}
        </Text>
      </TouchableOpacity>
      <Button title="delete" onPress={onPressDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: isAndriod ? 10 : 0,
    backgroundColor: '#cfcccc',
    height: '100%',
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInputPadding: {
    paddingLeft: 10,
  },
  addTodo: {
    height: 40,
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#ebe4e4fc',
  },
  taskDoneStyles: {
    textDecorationLine: 'line-through',
  },
  baseTextStyles: {
    color: '#141212',
  },
  todoStyles: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f8eaea',
    padding: 10,
    marginBottom: 10,
  },
});

export default Todo;
