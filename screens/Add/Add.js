import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Header from '../../GlobalComponents/header';
import Header_ask from './Add_components/Header_ask';
import PostType from './Add_components/Selector_post';
import PostButton from './Add_components/Post_btn';
import JobPostForm from './add_feids/JobFeild';

export default function Add() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flexContainer}
      >
        <Header />
        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          <Header_ask />
          <PostType selectedPost={selectedPost} setSelectedPost={setSelectedPost} />
          <JobPostForm />
        </ScrollView>

        <PostButton />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flexContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 20, // Adds spacing at the bottom for better UX
  },
});

