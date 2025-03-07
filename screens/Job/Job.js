import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Job_srchBar from './Job_componenet/Job_srchBar';

export default function Job() {
  return (
    <SafeAreaView style={styles.container}>
      <Job_srchBar />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
