import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Info() {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        
        {/* Rate Box */}
        <View style={styles.box}>
          <Text style={styles.label}>Rate</Text>
          <Text style={styles.value}>359</Text>
        </View>

        {/* Weather Box */}
        <View style={styles.box}>
          <Ionicons name="partly-sunny-outline" size={32} color="#fbbc05" />
          <Text style={styles.label}>Weather</Text>
          <Text style={styles.value}>Sunny 25°C</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  box: {
    width: '48%', 
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, 
  },
  label: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
    marginBottom: 5,
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
});

