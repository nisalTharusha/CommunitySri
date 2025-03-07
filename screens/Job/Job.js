import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Job_srchBar from './Job_componenet/Job_srchBar';
import Job_selector from './Job_componenet/Job_selector';
import Job_FlatList from './Job_componenet/Job_FlatList'

export default function Job() {
  return (
    <SafeAreaView style={styles.container}>
      <Job_srchBar />
      <Job_selector/>
      <Job_FlatList/>
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
