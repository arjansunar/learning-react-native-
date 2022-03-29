import {View, Image, StyleSheet} from 'react-native';
import React from 'react';

type Props = {
  path: string;
};

export const LImage = ({path}: Props) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: path,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {width: 400, height: 400},
});
