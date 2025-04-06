import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For icons
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();

  // Navigation handlers
  const goToSearch = () => {
    navigation.navigate('Search'); // Assuming you have a Search screen
  };

  const goToNotifications = () => {
    console.log('jw')
    navigation.navigate('NotificationScreen'); // Assuming you have a Notifications screen
  };

  return (
    <View style={styles.headerContainer}>
      {/* Left corner - App Name */}
      <View style={styles.leftContainer}>
        <Text style={styles.appName}>CommunitySri</Text>
      </View>

      {/* Right corner - Search and Bell Icons */}
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={goToSearch} style={styles.iconButton}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={goToNotifications} style={styles.iconButton}>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',

  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 16, // Space between icons
  },
});
