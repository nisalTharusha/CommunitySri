import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function PostButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.postButton}>
        <Text style={styles.buttonText}>Create a Post</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end', // Push button to bottom
    alignItems: 'flex-end', // Align button to the right
    paddingBottom: 20, // Space at the bottom
    paddingRight: 20, // Space from the right edge
  },
  postButton: {
    backgroundColor: 'black', // Zara-inspired sleek design
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Adds shadow on Android
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
