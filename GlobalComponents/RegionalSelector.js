import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet
} from 'react-native';

export default function RegionalSelector() {
  const [selectedRegion, setSelectedRegion] = useState('Select Region');
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownHeight = useRef(new Animated.Value(0)).current;

  const toggleDropdown = () => {
    Animated.timing(dropdownHeight, {
      toValue: isDropdownVisible ? 0 : 120, // Adjust height for animation
      duration: 300,
      useNativeDriver: false
    }).start();
    setDropdownVisible(!isDropdownVisible);
  };

  const selectRegion = (region) => {
    setSelectedRegion(region);
    toggleDropdown();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.button}>
        <Text style={styles.buttonText}>{selectedRegion}</Text>
      </TouchableOpacity>

      <Animated.View style={[styles.dropdown, { height: dropdownHeight }]}>
        {['Naples', 'Roma', 'Verona'].map((region, index) => (
          <TouchableOpacity
            key={index}
            style={styles.dropdownItem}
            onPress={() => selectRegion(region)}
          >
            <Text style={styles.itemText}>{region}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    padding: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  dropdown: {
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderRadius: 5,
    marginTop: 5,
    width: 150,
    elevation: 5, // For shadow effect on Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
  },
});

