import React from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For button icons

export default function FeedType() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowContainer}>
        {/* Left Side: Post Button */}
        <TouchableOpacity style={[styles.button, styles.leftButton]}>
          <Ionicons name="create" size={30} color="#fff" />
        </TouchableOpacity>

        {/* Right Side: News Button */}
        <TouchableOpacity style={[styles.button, styles.rightButton]}>
          <Ionicons name="newspaper" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row', // Display left and right buttons side by side
    height: '100%', // Full height of the container
  },
  button: {
    flex: 1, // Ensures both buttons take up equal space
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333', // Dark button color for a minimalist design
    borderRadius: 5,
    elevation: 4, // Shadow effect
  },
  leftButton: {
    marginRight: 4, // Space between the left and right buttons
  },
  rightButton: {
    marginLeft: 4, // Space between the left and right buttons
  },
});
