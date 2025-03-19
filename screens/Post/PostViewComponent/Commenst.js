import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default function Comments() {
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
      <Text style={styles.title}>Comments</Text>

      {comments.map(item => (
        <View key={item.id} style={styles.commentItem}>
          <View style={styles.commentHeader}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            
            <View style={styles.commentBody}>
              <Text style={styles.commentName}>{item.name}</Text>
              <Text style={styles.commentText}>{item.comment}</Text>

              <View style={styles.commentFooter}>
                <Text style={styles.commentTime}>{item.time}</Text>

                <View style={styles.actionButtons}>
                  <TouchableOpacity style={styles.likeButton}>
                    <Text style={styles.likeText}>❤️ {item.likes}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.replyButton}>
                    <Text style={styles.replyText}>Reply</Text>
                  </TouchableOpacity>
                </View>
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 14,
    color: '#222',
  },
  commentItem: {
    backgroundColor: '#f8f9fa',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
   
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 12,
  },
  commentBody: {
    flex: 1,
  },
  commentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  commentText: {
    fontSize: 14,
    color: '#444',
    marginBottom: 8,
  },
  commentFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commentTime: {
    fontSize: 12,
    color: '#888',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  likeButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  likeText: {
    fontSize: 14,
    color: '#E63946',
    fontWeight: '500',
  },
  replyButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  replyText: {
    fontSize: 14,
    color: '#007bff',
    fontWeight: '500',
  },
});
