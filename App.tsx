import React from 'react';
// import {StyleSheet, View} from 'react-native';
// import {LImage} from './components';
// import {LList} from './components/LList';
import {LModal} from './components/LModal';
import Todo from './components/Todo';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/screens/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Todo" component={Todo} />
        <Stack.Screen name="Modal" component={LModal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   wrapper: {},
// });

export default App;
