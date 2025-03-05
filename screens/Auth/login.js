import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, StatusBar, TouchableOpacity, ImageBackground, TextInput, Text } from 'react-native';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
      navigation.navigate('MainApp');
    
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://i.ibb.co/ZfRc9Fg/jack-hunter-h-Jgp3g4-He-U8-unsplash.jpg' }} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

        {/* Brand Name */}
        <Text style={styles.brandName}>COMMUNITY</Text>

        {/* Form Elements (Email, Password, Forgot Password, etc.) */}
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholderTextColor="#bbb"
          />

          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholderTextColor="#bbb"
          />

          {/* Forgot Password */}
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.linkText}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity style={styles.button} onPress={handleLogin}  >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>

          {/* Continue as Guest and Sign Up Links in a row */}
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.guestButton}>
              <Text style={styles.linkText}>Continue as Guest</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpButton}>
              <Text style={styles.linkText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

// Styles
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end', // Align content to the bottom
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Dark overlay
  },
  brandName: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#6c757d',
    marginTop: 40, // Space from the top
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Align form to the bottom
    width: '100%',
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 15,
    backgroundColor: '#e9ecef', // Transparent white input
    borderRadius: 15,
    color: '#fff',
    paddingHorizontal: 15,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    paddingVertical: 20,
    borderRadius: 15,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row', // Align items in a row
    justifyContent: 'space-between', // Space out items
    width: '100%',
    marginTop: 20,
    marginBottom:10
  },
  guestButton: {
    marginTop: 20,
  },
  signUpButton: {
    marginTop: 20,
  },
  footerText: {
    marginTop: 15,
    fontSize: 14,
    color: '#fff',
  },
  linkText: {
    color: '#bbb',
    fontWeight: 'bold',
  },
});
