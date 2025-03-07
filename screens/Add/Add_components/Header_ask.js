import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header_ask() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>WHAT DO YOU KNOW? POST.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    color: '#000',
  },
});
