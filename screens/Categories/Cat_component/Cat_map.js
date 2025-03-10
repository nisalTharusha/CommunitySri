import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const categories = [
  { id: '1', title: 'Jobs', icon: 'work-outline' },
  { id: '2', title: 'Earn', icon: 'attach-money' },
  { id: '3', title: 'Documents', icon: 'description' },
  { id: '4', title: 'Community', icon: 'groups' },
  { id: '5', title: 'News', icon: 'article' },
  { id: '6', title: 'Events', icon: 'event' },
  { id: '7', title: 'Help', icon: 'support-agent' },
  { id: '8', title: 'Housing', icon: 'home' },
  { id: '9', title: 'Transport', icon: 'directions-bus' },
  { id: '10', title: 'Shopping', icon: 'shopping-cart' },
];

export default function Cat_map() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Categories</Text>
      <View style={styles.grid}>
        {categories.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card}>
            <MaterialIcons name={item.icon} size={40} color="#444" />
            <Text style={styles.cardText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#222',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%', // 2 items per row
    backgroundColor: '#f5f5f5',
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Android shadow
  },
  cardText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});
