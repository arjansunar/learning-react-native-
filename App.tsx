/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
// import {LImage} from './components';
// import {LList} from './components/LList';
import {LModal} from './components/LModal';
import Todo from './components/Todo';

const App = () => {
  return (
    <View style={styles.wrapper}>
      {/* <LImage path="'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='" /> */}
      <View>
        {/* <LList /> */}
        {/* <LModal /> */}
        <Todo />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
});

export default App;
