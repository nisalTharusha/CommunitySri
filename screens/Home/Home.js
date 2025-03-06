import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // SafeAreaView for safe area handling
import RegionalSelector from '../../GlobalComponents/RegionalSelector';
import Info from '../Home/HomeComponent/Infor';
import Post from '../../screens/Home/HomeComponent/post';
import Header from '../../GlobalComponents/header';
import QuickFeed from './HomeComponent/QuickFeed'

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <QuickFeed/>
        <Post />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1, // Ensures that ScrollView content takes up available space
  },
});
