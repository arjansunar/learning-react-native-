import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Item} from './LList';

type ItemProp = {
  item: Item;
  selectedId: string | undefined;
  onPress: () => void;
};
export const LlistItem = ({item, selectedId, onPress}: ItemProp) => {
  const backgroundColor = item.id === selectedId ? '#70cbdb' : '#287a80';
  return (
    <TouchableOpacity onPress={onPress} style={itemStyles.itemWrapper}>
      <Text style={[itemStyles.title, {backgroundColor}]}>{item.title}</Text>
    </TouchableOpacity>
  );
};
const itemStyles = StyleSheet.create({
  itemWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 10,
    // backgroundColor: '#287a80',
    padding: 10,
    width: '100%',
    textAlign: 'center',
  },
});
