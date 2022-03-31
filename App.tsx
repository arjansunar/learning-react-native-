import React from 'react';
import {LModal} from './components/screens/LModal';
import Todo from './components/screens/Todo';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './components/screens';
import {Posts} from './components/screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Todo" component={Todo} />
        <Stack.Screen name="Modal" component={LModal} />
        <Stack.Screen name="Posts" component={Posts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   wrapper: {},
// });

export default App;
