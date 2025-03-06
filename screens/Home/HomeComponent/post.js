import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Dummy Data (Simulating Posts with Text and Images)
const posts = [
  {
    id: 1,
    name: 'John Doe',
    username: '@johndoe',
    date: '2h ago',
    text: 'Just finished working on my new project! 🚀 #ReactNative',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    image: 'https://placekitten.com/800/600', // Optional image
  },
  {
    id: 2,
    name: 'Jane Smith',
    username: '@janesmith',
    date: '4h ago',
    text: 'Had an amazing time at the park today! 🌳',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    image: 'https://placekitten.com/800/601', // Optional image
  },
  {
    id: 4,
    name: 'John Doe',
    username: '@johndoe',
    date: '2h ago',
    text: 'Just finished working on my new project! 🚀 #ReactNative',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 5,
    name: 'Jane Smith',
    username: '@janesmith',
    date: '4h ago',
    text: 'Had an amazing time at the park today! 🌳',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },

  {
    id: 6,
    name: 'Jane Smith',
    username: '@janesmith',
    date: '4h ago',
    text: 'Had an amazing time at the park today! 🌳',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
];

export default function Post() {
  return (
    <View style={styles.container}>
      {posts.map((post) => (
        <View key={post.id} style={styles.postContainer}>
          
          {/* Profile Section */}
          <View style={styles.profileSection}>
            <Image source={{ uri: post.avatar }} style={styles.avatar} />
            <View>
              <Text style={styles.name}>{post.name}</Text>
              <Text style={styles.username}>{post.username} • {post.date}</Text>
            </View>
          </View>

          {/* Post Text */}
          <Text style={styles.postText}>{post.text}</Text>

          {/* Conditionally Render Image if Available */}
          {post.image && (
            <Image source={{ uri: post.image }} style={styles.postImage} />
          )}

          {/* Action Icons (Like, Comment, Share) */}
          <View style={styles.actions}>
            <Ionicons name="heart-outline" size={20} color="#666" />
            <Ionicons name="chatbubble-outline" size={20} color="#666" />
            <Ionicons name="arrow-redo-outline" size={20} color="#666" />
          </View>

        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  postContainer: {
    padding: 10,
    marginBottom: 15,
    marginHorizontal:2,
    borderRadius: 10,
    backgroundColor:'#f8f9fa'
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 12,
    color: '#666',
  },
  postText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
  },
});
