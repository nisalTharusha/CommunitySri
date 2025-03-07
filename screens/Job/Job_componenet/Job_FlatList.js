import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const jobData = [
  { id: '1', title: 'Software Engineer', company: 'Google', location: 'San Francisco, CA', salary: '$120K - $150K', language: 'Python', icon: 'computer' },
  { id: '2', title: 'Product Manager', company: 'Amazon', location: 'Seattle, WA', salary: '$110K - $140K', language: 'Agile', icon: 'business' },
  { id: '3', title: 'UI/UX Designer', company: 'Meta', location: 'Menlo Park, CA', salary: '$90K - $120K', language: 'Figma', icon: 'brush' },
  { id: '4', title: 'Data Scientist', company: 'Netflix', location: 'Los Gatos, CA', salary: '$130K - $160K', language: 'SQL', icon: 'bar-chart' },
  { id: '5', title: 'DevOps Engineer', company: 'Microsoft', location: 'Redmond, WA', salary: '$115K - $140K', language: 'AWS', icon: 'cloud' },
  { id: '6', title: 'Business Analyst', company: 'Tesla', location: 'Austin, TX', salary: '$80K - $110K', language: 'Excel', icon: 'analytics' },
  { id: '7', title: 'Cybersecurity Analyst', company: 'IBM', location: 'New York, NY', salary: '$100K - $130K', language: 'Security+', icon: 'security' },
  { id: '8', title: 'Frontend Developer', company: 'Airbnb', location: 'San Francisco, CA', salary: '$105K - $135K', language: 'React', icon: 'code' },
  { id: '9', title: 'Backend Developer', company: 'Uber', location: 'Los Angeles, CA', salary: '$110K - $145K', language: 'Node.js', icon: 'storage' },
  { id: '10', title: 'Marketing Manager', company: 'Spotify', location: 'Stockholm, Sweden', salary: '$95K - $125K', language: 'SEO', icon: 'campaign' },
];

export default function Job_FlatList() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {/* Job Icon */}
      <MaterialIcons name={item.icon} size={30} color="#0A66C2" style={styles.icon} />

      {/* Job Details */}
      <View style={styles.details}>
        <Text style={styles.jobTitle}>{item.title}</Text>
        <Text style={styles.company}>{item.company}</Text>
        <View style={styles.infoRow}>
          <MaterialIcons name="location-on" size={16} color="#666" />
          <Text style={styles.infoText}>{item.location}</Text>
          <MaterialIcons name="attach-money" size={16} color="#666" />
          <Text style={styles.infoText}>{item.salary}</Text>
          <MaterialIcons name="language" size={16} color="#666" />
          <Text style={styles.infoText}>{item.language}</Text>
        </View>
      </View>

      {/* Bookmark Button */}
      <TouchableOpacity>
        <MaterialIcons name="bookmark-border" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList 
        data={jobData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F2F0',
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  company: {
    fontSize: 14,
    color: '#666',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  infoText: {
    fontSize: 12,
    color: '#666',
    marginRight: 8,
  },
});

