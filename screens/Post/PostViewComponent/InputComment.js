import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';  // Importing Feather icons for the send icon

export default function InputComment() {
  const [comment, setComment] = useState('');  // State to hold the comment input text

  const handleSend = () => {
    if (comment.trim()) {
      // Logic for sending comment
      console.log('Sending comment:', comment);
      setComment('');  // Reset the comment input after sending
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Comment Input Container */}
      <View style={styles.commentContainer}>
        
        {/* Text Input Field */}
        <TextInput
          style={styles.input}
          value={comment}
          onChangeText={setComment}  // Update state as the user types
          placeholder="Write a comment..."
          placeholderTextColor="#888"
        />
        
        {/* Send Icon Button */}
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Icon name="send" size={24} color="#007bff" />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  
  // Container for the comment input and send button
  commentContainer: {
    flexDirection: 'row',  // Arrange the input field and send button in a row
    alignItems: 'center',  // Vertically center the elements
    backgroundColor: '#fff',  // White background for the input area
    padding: 10,  // Padding inside the container
    borderRadius: 20,  // Rounded corners for the container
    elevation: 3,  // Slight elevation for shadow effect
  },

  // Style for the text input field
  input: {
    flex: 1,  // Allow input field to take all available space
    height: 40,  // Set the height of the input field
    borderRadius: 20,  // Rounded corners for the input field
    paddingHorizontal: 10,  // Horizontal padding inside the input field
    fontSize: 16,  // Font size of the input text
    color: '#333',  // Text color
  },

  // Style for the send button
  sendButton: {
    marginLeft: 10,  // Space between the input field and send button
    padding: 5,  // Padding around the icon
  },
});
