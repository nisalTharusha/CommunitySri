import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For the back button and logo icon
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back" // Back arrow icon
        size={30}
        color="#212121" // Dark gray for the back button
        onPress={() => navigation.goBack()} // Go back when pressed
        style={styles.backButton}
      />
      <Ionicons
        name="logo-android" // Replace with your desired logo icon
        size={40}
        color="#6200ea" // Primary color for the logo icon
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Horizontally align back button and logo
    alignItems: 'center', // Vertically center the items
    justifyContent: 'space-between', // Space between back button and logo
    paddingTop: 20, // Space from top (StatusBar)
    paddingHorizontal: 15, // Horizontal padding for spacing
    backgroundColor: '#fff', // White background for the header
    height: 60, // Height for the header
  },
  backButton: {
    marginLeft: 5,
  },
  logo: {
    marginRight: 5,
  },
});
