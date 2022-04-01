import {View, Button, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationStackProp} from 'react-navigation-stack';
type Props = {
  navigation: NavigationStackProp;
};

const RouteButton = ({
  title,
  screenName,
  navigation,
}: {
  title: string;
  screenName: string;
  navigation: NavigationStackProp;
}) => (
  <View style={styles.button}>
    <Button title={title} onPress={() => navigation.push(screenName)} />
  </View>
);

export const Home = ({navigation}: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.buttonWrapper}>
        <RouteButton title="Modal" screenName="Modal" navigation={navigation} />
        <RouteButton title="Todo" screenName="Todo" navigation={navigation} />
        <RouteButton title="Posts" screenName="Posts" navigation={navigation} />
        <RouteButton
          title="Infinite Scroll"
          screenName="Scroll"
          navigation={navigation}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    width: '50%',
  },
  button: {
    marginBottom: 10,
  },
});
