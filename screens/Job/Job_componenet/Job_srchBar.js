import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // For the search icon

export default function Job_srchBar() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* Profile Image on the left */}
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }} // Replace with your image URL
          style={styles.profileImage}
        />

        {/* Search bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
          />
          <MaterialIcons name="search" size={24} color="gray" style={styles.searchIcon} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6c757d',
    padding: 8,
  },
  header: {
    flexDirection: 'row',  // Align items in a row
    alignItems: 'center',  // Center items vertically
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  profileImage: {
    width: 50, // Set width of profile image
    height: 50, // Set height of profile image
    borderRadius: 25, // Make it round
    marginRight: 16, // Space between image and search bar
    borderWidth: 1, // Add a border around the image
  },
  searchContainer: {
    flexDirection: 'row',  // Align search bar and icon in a row
    alignItems: 'center',
    flex: 1, // Take up remaining space after the profile image
    backgroundColor: '#fff',
    borderRadius: 25, // Rounded corners
    paddingHorizontal: 16,
    height: 40, // Height of the search bar
    shadowColor: '#000', // Optional shadow for modern look
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Android shadow effect
  },
  searchInput: {
    flex: 1, // Make the input take up the remaining space
    height: 40,
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 8, // Space between the input and the icon
  },
});
