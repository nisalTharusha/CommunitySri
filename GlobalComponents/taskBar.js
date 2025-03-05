import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import Add from '../screens/Add/Add';
import Categories from '../screens/Categories/Categories';
import Job from '../screens/Job/Job';
import { View, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          let iconSize = size;
          let iconStyle = {};

          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Categories') iconName = focused ? 'list' : 'list-outline';
          else if (route.name === 'Add') {
            iconName = 'add';
            iconSize = 60; // Large Add button
            iconStyle = {
              backgroundColor: '#007AFF', // Blue floating button
              borderRadius: 30,
              padding: 10,
              marginBottom: 30, // Increased elevation effect
              elevation: 10, // Increased elevation for more shadow
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
            };
          } else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';
          else if (route.name === 'Job') iconName = focused ? 'briefcase' : 'briefcase-outline';

          return (
            <View style={iconStyle}>
              <Ionicons name={iconName} size={iconSize} color={route.name === 'Add' ? '#fff' : color} />
            </View>
          );
        },
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 10,
          height: 60,
        },
        tabBarShowLabel: false, // Hide labels for a clean UI
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={{
                top: -20, // Raised higher
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#007AFF',
                width: 75, // Slightly bigger
                height: 75,
                borderRadius: 37.5,
                elevation: 12, // Stronger elevation
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.4,
                shadowRadius: 5,
              }}
            >
              <Ionicons name="add" size={42} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen name="Job" component={Job} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}