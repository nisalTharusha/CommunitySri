import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import RegionalSelector from '../../GlobalComponents/RegionalSelector';
import Info from '../Home/HomeComponent/Infor';
import Post from '../../screens/Home/HomeComponent/post';

export default function Home() {
  return (
    <View style={styles.container}>
      {/* ScrollView for content to be scrollable */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <RegionalSelector />
        <Info />
        <Post />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 16, // Adds space around content
    flexGrow: 1, // Ensures that ScrollView content takes up available space
  },
});
