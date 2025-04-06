import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Auth/login';
import FullPostView from './screens/Post/FullPostView';
import NotificationScreen from './screens/Other/Notification'
import Navigation from './GlobalComponents/taskBar'; // Bottom Tab Navigation

const Stack = createStackNavigator();

export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="FullPostView" component={FullPostView} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="MainApp" component={Navigation} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
