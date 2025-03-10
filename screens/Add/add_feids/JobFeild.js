import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function JobPostForm() {
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    jobType: 'Full-Time', // Default job type
    description: '',
  });

  const jobTypes = ['Full-Time', 'Part-Time', 'Contract'];

  const handleChange = (key, value) => {
    setJobData({ ...jobData, [key]: value });
  };

  const handleSubmit = () => {
    if (!jobData.title || !jobData.company || !jobData.location || !jobData.description) {
      Alert.alert('Error', 'Please fill all required fields');
      return;
    }
    console.log('Submitted Job Data:', jobData);
    Alert.alert('Success', 'Job Posted Successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Job Post</Text>

      <TextInput
        placeholder="Job Title"
        value={jobData.title}
        onChangeText={(text) => handleChange('title', text)}
        style={styles.input}
      />

      <TextInput
        placeholder="Company Name"
        value={jobData.company}
        onChangeText={(text) => handleChange('company', text)}
        style={styles.input}
      />

      <TextInput
        placeholder="Location"
        value={jobData.location}
        onChangeText={(text) => handleChange('location', text)}
        style={styles.input}
      />

      <TextInput
        placeholder="Salary (Optional)"
        value={jobData.salary}
        onChangeText={(text) => handleChange('salary', text)}
        style={styles.input}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Job Type</Text>
      <View style={styles.jobTypeContainer}>
        {jobTypes.map((type) => (
          <TouchableOpacity
            key={type}
            style={[styles.jobTypeButton, jobData.jobType === type && styles.selectedJobType]}
            onPress={() => handleChange('jobType', type)}
          >
            <Text style={[styles.jobTypeText, jobData.jobType === type && styles.selectedText]}>
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        placeholder="Job Description"
        value={jobData.description}
        onChangeText={(text) => handleChange('description', text)}
        style={[styles.input, styles.textArea]}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Post Job</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    marginTop: 10,
  },
  jobTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  jobTypeButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
  },
  selectedJobType: {
    backgroundColor: '#007BFF',
  },
  jobTypeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  selectedText: {
    color: '#fff',
  },
  submitButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  submitText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
