import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationStackProp} from 'react-navigation-stack';
import {postApi} from '../../api';
import {FlatList} from 'react-native-gesture-handler';
type Props = {navigation: NavigationStackProp};
type Post = {
  id: number;
  userId: number;
  body: string;
  title: string;
};

const Posts = ({navigation}: Props) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    let mounted = true;
    postApi.get('posts').then(res => {
      if (mounted) {
        setLoading(false);
      }
      setPosts(res.data);
    });
    return () => {
      mounted = false;
    };
  }, []);
  //   console.log(posts);

  return (
    <View>
      <Text>Posts</Text>
      {!loading ? (
        <FlatList
          data={posts}
          renderItem={({item}) => {
            return <Text>{item.title}</Text>;
          }}
          keyExtractor={item => item.id + ''}
        />
      ) : (
        <Text>Loading..</Text>
      )}

      <Button title="Home" onPress={() => navigation.push('Home')} />
    </View>
  );
};

export default Posts;
