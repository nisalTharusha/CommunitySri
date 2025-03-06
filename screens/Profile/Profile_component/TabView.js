import React, { useState } from 'react';
import { View, useWindowDimensions, StyleSheet, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { MaterialIcons } from '@expo/vector-icons';

const PostsRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#f9f9f9' }]}>
    <Text>Posts Content</Text>
  </View>
);

const JobsRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#f9f9f9' }]}>
    <Text>Jobs Content</Text>
  </View>
);

const renderScene = SceneMap({
  posts: PostsRoute,
  jobs: JobsRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'posts', title: 'Posts', icon: 'article' },
    { key: 'jobs', title: 'Jobs', icon: 'work' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => (
        <TabBar
          {...props}
          renderIcon={({ route, focused }) => (
            <MaterialIcons 
              name={route.icon} 
              size={24} 
              color={focused ? 'black' : 'gray'} 
            />
          )}
          indicatorStyle={{ backgroundColor: 'black' }}
          style={{ backgroundColor: 'gray' }}
          labelStyle={{ color: 'black', fontWeight: 'bold' }}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
