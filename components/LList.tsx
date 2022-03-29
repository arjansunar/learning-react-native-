import {FlatList, View} from 'react-native';
import React, {useState} from 'react';
import {LlistItem} from './LListItem';

type Props = {
  listData: Item[];
};
export type Item = {id: string; title: string};
export const LList = ({listData}: Props) => {
  const [selectedId, setSelectedId] = useState<string>();
  // const [listData, setData] = useState([]);
  const onPress = (item: Item) => setSelectedId(item.id);

  const renderItem = (item: Item) => (
    <LlistItem
      item={item}
      onPress={() => onPress(item)}
      selectedId={selectedId}
    />
  );
  return (
    <View>
      <FlatList
        data={listData}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
