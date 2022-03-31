/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationStackProp} from 'react-navigation-stack';
import {postApi} from '../../api';
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
      setPosts(res.data.filter((_, i) => i < 20));
    });
    return () => {
      mounted = false;
    };
  }, []);
  const FooterButton = () => (
    <Button title="Home" onPress={() => navigation.push('Home')} />
  );
  const HeaderText = () => (
    <Text style={{fontSize: 35, textAlign: 'center', marginBottom: 10}}>
      Making api requests
    </Text>
  );
  return (
    <View style={{}}>
      {!loading ? (
        <FlatList
          ListHeaderComponent={HeaderText}
          style={styles.posts}
          data={posts}
          renderItem={({item}) => {
            return <Post title={item.title.trim()} body={item.body.trim()} />;
          }}
          keyExtractor={item => 'key' + item.id}
          ListFooterComponent={FooterButton}
          ListFooterComponentStyle={{marginBottom: 20}}
        />
      ) : (
        <Text>Loading..</Text>
      )}
    </View>
  );
};
const Post = ({title, body}: Partial<Post>) => {
  return (
    <View style={styles.post}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text> {body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  posts: {
    padding: 10,
  },
  post: {
    padding: 10,
    backgroundColor: '#ffffff',
    marginBottom: 10,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 8,
    textAlign: 'left',
  },
});
export default Posts;
