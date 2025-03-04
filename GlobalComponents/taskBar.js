import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
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
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Categories') iconName = 'category';
          else if (route.name === 'Add') iconName = 'add-circle-outline';
          else if (route.name === 'Profile') iconName = 'person';
          else if (route.name === 'Job') iconName = 'work';
          return <MaterialIcons name={iconName} size={size} color={color} />;
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
