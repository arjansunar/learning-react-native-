import {FlatList, View} from 'react-native';
import React, {useState} from 'react';
import {LlistItem} from './LListItem';

type Props = {
  listData?: Item[];
};

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
export type Item = {id: string; title: string};
export const LList = ({listData = DATA}: Props) => {
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
