import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView,Image } from 'react-native';
import Header from '../../GlobalComponents/header';
import { useNavigation } from '@react-navigation/native';
import UserIDheader from './PostViewComponent/UserIDheader'
import Actionbtn from './PostViewComponent/Actionbtn';
import InputComment from './PostViewComponent/InputComment'
import Comments from './PostViewComponent/Commenst'

export default function FullPostView() {
  const navigation = useNavigation();

  const handleNavigations =(screen)=>{
    if(screen="FullPostView"){
      navigation.navigate('FullPostView');
    }
  }

const postData ={avatar:'https://randomuser.me/api/portraits/women/2.jpg' ,name :'tret', username:'gfu' ,date:'date'}

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <UserIDheader handleNavigations={handleNavigations} post={postData}/>
        <Image source={{ uri: 'https://randomuser.me/api/portraits/women/2.jpg' }} style={styles.image} />
        <Actionbtn/>
        <InputComment/>
        <Comments/>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingBottom: 20,  // Add some padding if needed to avoid content touching the bottom
    paddingHorizontal:10
  },

  image: {
    width: '100%',  // Example width
    height: 450, // Example height
    borderRadius:16
  },
});
