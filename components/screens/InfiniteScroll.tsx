import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationStackProp} from 'react-navigation-stack';
import {Result} from '../../api/types';
import {randomPersonApi} from '../../api';

type Props = {
  navigation?: NavigationStackProp;
};

const InfiniteScroll = ({}: Props) => {
  const [userData, setData] = useState<Result[]>([]);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    randomPersonApi
      .get(`/?page=${page}&results=15&seed=abc`)
      .then(res => {
        if (mounted) {
          setLoading(false);
        }
        setData(state => [...state, ...res.data?.results]);
      })
      .catch(e => console.log(e));

    return () => {
      mounted = false;
    };
  }, [page]);

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={userData}
        renderItem={({item}) => (
          <UserCard
            name={`${item.name.title} ${item.name.first} ${item.name.last}`}
            picture={item.picture.thumbnail}
            gender={item.gender}
          />
        )}
        ListFooterComponent={() => {
          return loading ? (
            <ActivityIndicator animating size={'large'} />
          ) : null;
        }}
        ListFooterComponentStyle={styles.footer}
        keyExtractor={(_, i) => 'key' + i}
        onEndReached={({distanceFromEnd}) => {
          console.log('end', distanceFromEnd);
          setPage(val => val + 1);
        }}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};
type UserCard = {
  name: string;
  picture: string;
  gender: 'male' | 'female';
};
const UserCard = ({name, picture, gender}: UserCard) => {
  return (
    <View style={userCardStyles.wrapper}>
      <View style={userCardStyles.textImageWrapper}>
        <Image
          source={{
            uri: picture,
          }}
          style={userCardStyles.cardImage}
        />
        <Text style={userCardStyles.name}>{name}</Text>
      </View>
      <Text>{gender[0].toUpperCase()}</Text>
    </View>
  );
};

const userCardStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
    // shadowColor: '#504f4f',
    // shadowRadius: 20,
  },
  name: {
    fontSize: 16,
  },
  textImageWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    height: 40,
    width: 40,
    resizeMode: 'cover',
    marginRight: 10,
    borderRadius: 40 / 2,
  },
});
const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  footer: {
    marginTop: 10,
  },
});
export default InfiniteScroll;
