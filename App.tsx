import React from 'react';
// import {StyleSheet, View} from 'react-native';
// import {LImage} from './components';
// import {LList} from './components/LList';
import {LModal} from './components/screens/LModal';
import Todo from './components/screens/Todo';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/screens/Home';
import Posts from './components/screens/Posts';

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
