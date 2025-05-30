import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';  // Importing Feather icons from react-native-vector-icons

export default function Actionbtn() {
  return (
    // SafeAreaView to ensure content is visible within the screen bounds
    <SafeAreaView style={styles.container}>
      
      {/* Main container for the action buttons (like, share, and comment) */}
      <View style={styles.actionContainer}>
        
        {/* Like Button */}
        <TouchableOpacity style={styles.iconContainer}>
          {/* Thumbs-up icon for the like button */}
          <Icon name="thumbs-up" size={18} color="#333" />
          {/* Text below the icon */}
          <Text style={styles.iconText}>Like</Text>
        </TouchableOpacity>

        {/* Share Button */}
        <TouchableOpacity style={styles.iconContainer}>
          {/* Share icon for the share button */}
          <Icon name="share" size={18} color="#333" />
          {/* Text below the icon */}
          <Text style={styles.iconText}>Share</Text>
        </TouchableOpacity>

        {/* Comment Button */}
        <TouchableOpacity style={styles.iconContainer}>
          {/* Comment icon for the comment button */}
          <Icon name="message-circle" size={18} color="#333" />
          {/* Text below the icon */}
          <Text style={styles.iconText}>Comment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  // Container for the whole screen
  container: {
    flex: 1,
    justifyContent: 'center',  // Vertically center the content15
    marginTop:15,
    marginBottom:15
  },
  
  // Container for the action buttons (like, share, and comment)
  actionContainer: {
    flexDirection: 'row',  // Arrange buttons horizontally
    justifyContent: 'space-around',  // Evenly space buttons across the screen
    alignItems: 'center',  // Align items in the center
   
  },

  // Style for each icon-container (like, share, comment button)
  iconContainer: {
    alignItems: 'center',  // Center the icon and text vertically
  },

  // Style for the text below each icon
  iconText: {
    fontSize: 10,  // Font size for the text
    color: '#333',  // Dark gray color for the text
    marginTop: 4,  // Space between the icon and text
  },
});
