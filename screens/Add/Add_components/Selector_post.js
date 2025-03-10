import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

const postTypes = [
  { id: '1', title: 'Job Post', icon: 'work-outline' },
  { id: '2', title: 'News', icon: 'article' },
  { id: '3', title: 'Regular Post', icon: 'edit' },
  { id: '4', title: 'Event', icon: 'event' },
  { id: '5', title: 'Question', icon: 'help-outline' },
];

export default function PostType({ selectedPost, setSelectedPost }) {
  const [isListVisible, setIsListVisible] = useState(true);
  const slideAnim = useRef(new Animated.Value(100)).current; // Start off-screen

  // Function to start the slide-in animation
  const runAnimation = () => {
    slideAnim.setValue(100); // Reset position
    Animated.timing(slideAnim, {
      toValue: 0, // Move into view
      duration: 300, // Smooth transition
      useNativeDriver: true, // Optimized for performance
    }).start();
  };

  // Run animation when the list becomes visible
  useEffect(() => {
    if (isListVisible) {
      runAnimation();
    }
  }, [isListVisible]);

  // Reset visibility and re-run animation when the screen is focused
  useFocusEffect(
    useCallback(() => {
      setIsListVisible(true);
      runAnimation();
    }, [])
  );

  const handleSelect = (id) => {
    if (selectedPost === id) {
      setIsListVisible(!isListVisible); // Toggle visibility
    } else {
      setSelectedPost(id);
      setIsListVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ translateY: slideAnim }] }}>
        {isListVisible ? (
          postTypes.map((item) => (
            <TouchableOpacity key={item.id} style={styles.card} onPress={() => handleSelect(item.id)}>
              <MaterialIcons name={item.icon} size={28} color="black" style={styles.icon} />
              <Text style={styles.postText}>{item.title.toUpperCase()}</Text>
            </TouchableOpacity>
          ))
        ) : (
          selectedPost && (
            <TouchableOpacity
              style={styles.selectedCard}
              onPress={() => {
                setIsListVisible(true);
                runAnimation(); // Ensure animation runs again
              }}
            >
              <MaterialIcons
                name={postTypes.find((item) => item.id === selectedPost)?.icon}
                size={28}
                color="black"
              />
              <Text style={styles.selectedText}>
                {postTypes.find((item) => item.id === selectedPost)?.title.toUpperCase()}
              </Text>
            </TouchableOpacity>
          )
        )}
      </Animated.View>
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
