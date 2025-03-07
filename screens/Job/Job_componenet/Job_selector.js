import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Job_selector() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="person" size={30} color="black" />
          <Text style={styles.buttonText}>My</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="check-circle" size={30} color="black" />
          <Text style={styles.buttonText}>Applied</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="save" size={30} color="black" />
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%', // Ensures the container takes the full width
  },
  button: {
    flex: 1, // Makes the button take equal width
    flexDirection: 'row', // Aligns icon and text horizontally
    alignItems: 'center', // Centers both icon and text vertically
    justifyContent: 'center', 
    padding: 8, // Adds padding around the icon and text for better spacing
    borderWidth: 1, // Adds border around the button
  },
  buttonText: {
    marginLeft: 8, // Adds space between the icon and the text
    fontSize: 14,
    color: 'black',
  },
});
