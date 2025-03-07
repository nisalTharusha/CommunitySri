import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categories = [
  { id: '1', title: 'All', icon: 'home', buttonColor: '#007BFF', textColor: '#fff' },
  { id: '2', title: 'Translator', icon: 'language', buttonColor: '#28a745', textColor: '#fff' },
  { id: '4', title: 'News', icon: 'newspaper', buttonColor: '#a8dadc', textColor: '#fff' },
  { id: '3', title: 'Documents', icon: 'document', buttonColor: '#ffc107', textColor: '#fff' },
  { id: '5', title: 'Help', icon: 'help-circle', buttonColor: '#dc3545', textColor: '#fff' },
  { id: '6', title: 'Information', icon: 'information-circle', buttonColor: '#17a2b8', textColor: '#fff' },
];

export default function QuickFeed() {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: item.buttonColor }]} // Dynamic background color
      onPress={() => console.log(`${item.title} button pressed`)}
    >
      <Ionicons name={item.icon} size={24} color="#fff" />
      <Text style={[styles.buttonText, { color: item.textColor }]}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    flexDirection: 'column', // Stack icon and text vertically
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginRight: 15,
    borderRadius: 15,
    elevation: 4, // Adding shadow effect for button
  },
  buttonText: {
    marginTop: 5, // Space between icon and text
    fontSize: 14,
  },
});
