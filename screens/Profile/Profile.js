import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import ProfileHeader from './Profile_component/profileTop';
import TabViewExample from './Profile_component/TabView';
import Header from '../../GlobalComponents/header';


export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <StatusBar style="auto" />
      <ProfileHeader />
      <TabViewExample />
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
