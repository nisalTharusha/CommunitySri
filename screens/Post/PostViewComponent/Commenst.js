import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default function Comments() {
  // Dummy comments data with profile pictures and time info
  const comments = [
    { 
      id: '1', 
      name: 'John Doe', 
      comment: 'This is a great post!', 
      time: '6 hours ago', 
      likes: 12,
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg' 
    },
    { 
      id: '2', 
      name: 'Jane Smith', 
      comment: 'I totally agree with you!', 
      time: '5 hours ago', 
      likes: 8,
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg' 
    },
    { 
      id: '3', 
      name: 'Mark Johnson', 
      comment: 'Amazing insights, thanks for sharing!', 
      time: '1 hour ago', 
      likes: 20,
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg' 
    },
    { 
      id: '4', 
      name: 'Emma Brown', 
      comment: 'Very informative, looking forward to more posts!', 
      time: '3 hours ago', 
      likes: 15,
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg' 
    },
    { 
      id: '5', 
      name: 'James Davis', 
      comment: 'I love this! Keep it up!', 
      time: '1 day ago', 
      likes: 25,
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg' 
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Title for the comments section */}
      <Text style={styles.title}>Comments</Text>

      {/* Map over the comments array to render each comment */}
      {comments.map(item => (
        <View key={item.id} style={styles.commentItem}>
          <View style={styles.commentHeader}>
            {/* Profile Picture */}
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            
            <View style={styles.commentBody}>
              {/* Username */}
              <Text style={styles.commentName}>{item.name}</Text>
              
              {/* Comment Text */}
              <Text style={styles.commentText}>{item.comment}</Text>

              {/* Time, Like, and Reply */}
              <View style={styles.commentFooter}>
                <Text style={styles.commentTime}>{item.time}</Text>

                <TouchableOpacity style={styles.likeButton}>
                  <Text style={styles.likeText}>Like ({item.likes})</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.replyButton}>
                  <Text style={styles.replyText}>Reply</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ))}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  commentItem: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Ensuring avatar and comment body are aligned properly
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  commentBody: {
    flexDirection: 'column',
    flex: 1,
  },
  commentName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  commentText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  commentFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  commentTime: {
    fontSize: 12,
    color: '#666',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeText: {
    fontSize: 14,
    color: '#007bff',
  },
  replyButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  replyText: {
    fontSize: 14,
    color: '#007bff',
  },
});
