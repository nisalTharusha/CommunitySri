import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const postTypes = [
  { id: '1', title: 'Job Post', icon: 'work-outline' },
  { id: '2', title: 'News', icon: 'article' },
  { id: '3', title: 'Regular Post', icon: 'edit' },
  { id: '4', title: 'Event', icon: 'event' },
  { id: '5', title: 'Question', icon: 'help-outline' },
];

export default function PostType() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isListVisible, setIsListVisible] = useState(true);

  const handleSelect = (id) => {
    if (selectedPost === id) {
      // Toggle visibility when clicking the same item
      setIsListVisible(!isListVisible);
    } else {
      // Select a new item and hide the list
      setSelectedPost(id);
      setIsListVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      {isListVisible ? (
        <FlatList 
          data={postTypes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => handleSelect(item.id)}>
              <MaterialIcons name={item.icon} size={28} color="black" style={styles.icon} />
              <Text style={styles.postText}>{item.title.toUpperCase()}</Text>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        selectedPost && (
          <TouchableOpacity 
            style={styles.selectedCard} 
            onPress={() => setIsListVisible(true)} // Show list again when clicking
          >
            <MaterialIcons 
              name={postTypes.find(item => item.id === selectedPost)?.icon} 
              size={28} 
              color="black" 
            />
            <Text style={styles.selectedText}>
              {postTypes.find(item => item.id === selectedPost)?.title.toUpperCase()}
            </Text>
          </TouchableOpacity>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  icon: {
    marginRight: 15,
  },
  postText: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1.2,
    color: '#000',
  },
  selectedCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  selectedText: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1.2,
    color: '#000',
    marginLeft: 10,
  },
});
