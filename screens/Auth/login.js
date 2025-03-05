import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button, Text, Provider as PaperProvider } from 'react-native-paper';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('MainApp');
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
        <Text variant="displaySmall" style={styles.title}>Welcome Back!</Text>
        <TextInput
          label="Email"
          mode="outlined"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          theme={{ colors: { primary: '#6200ea', underlineColor: 'transparent' } }}
        />
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          theme={{ colors: { primary: '#6200ea', underlineColor: 'transparent' } }}
        />
        <Button mode="contained" onPress={handleLogin} style={styles.button}>
          Login
        </Button>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // White background for a clean, fresh look
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: '600', // Slightly lighter than bold for a modern look
    fontSize: 30,
    marginBottom: 40,
    color: '#333', // Dark text for readability
  },
  input: {
    width: '100%',
    marginBottom: 15,
    backgroundColor: 'transparent', // Transparent background for a cleaner look
    borderRadius: 5, // Rounded corners for inputs
  },
  button: {
    width: '100%',
    marginTop: 20,
    backgroundColor: '#6200ea', // Vibrant purple for a modern feel
    borderRadius: 5, // Rounded corners for the button
  },
});
