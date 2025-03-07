import React, { useState } from 'react';
import { View, useWindowDimensions, StyleSheet, ScrollView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { MaterialIcons } from '@expo/vector-icons';
import Post from '../../Home/HomeComponent/post'

const PostsRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#f9f9f9' }]}>
    {/* Wrap Post with ScrollView to enable scrolling */}
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Post />
    </ScrollView>
  </View>
);

const JobsRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#f9f9f9' }]}>
    {/* Content for Jobs tab */}
  </View>
);

const SaveRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#f9f9f9' }]}>
    {/* Content for Save tab */}
  </View>
);

const renderScene = SceneMap({
  posts: PostsRoute,
  jobs: JobsRoute,
  save: SaveRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'posts', title: 'Posts', icon: 'article' },
    { key: 'jobs', title: 'Jobs', icon: 'work' },
    { key: 'save', title: 'Save', icon: 'save' },
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
          indicatorStyle={{ backgroundColor: '#2d6a4f' }}
          style={{ backgroundColor: '#212529' }} // Changed to white for better visibility
          labelStyle={{ color: 'black' }} // Show labels with black color
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
  scrollView: {
    flexGrow: 1, // Ensures that the ScrollView content can expand to fill available space
  },
});
