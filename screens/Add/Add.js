import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../GlobalComponents/header'
import Header_ask from './Add_components/Header_ask'
import PostType from './Add_components/Selector_post';
import PostButton from './Add_components/Post_btn'



export default function Add() {
  return (
    <View style={styles.container}>
      <Header/>
      <Header_ask/>
      <PostType/>

      <PostButton/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',

  },
});
