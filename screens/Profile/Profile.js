import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProfileHeader from './Profile_component/profileTop'
import TabViewExample from './Profile_component/TabView'
import Header from '../../GlobalComponents/header'


export default function Profile() {
  return (
    <View style={styles.container}>
      <Header/>
      <ProfileHeader/>
      <TabViewExample/>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
