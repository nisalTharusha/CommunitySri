import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Changed to Ionicons
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import Add from '../screens/Add/Add';
import Categories from '../screens/Categories/Categories';
import Job from '../screens/Job/Job';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Categories') iconName = 'list-outline';
          else if (route.name === 'Add') iconName = 'add-circle-outline';
          else if (route.name === 'Profile') iconName = 'person-outline';
          else if (route.name === 'Job') iconName = 'briefcase-outline'; // Updated to 'briefcase-outline' for a modern touch
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: '#fff', // Clean white background for the tab bar
          borderTopWidth: 0, // Remove border
          elevation: 10, // Give it a modern shadow
        },
        headerShown: false, // 🔥 Hides header for all screens
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Job" component={Job} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
