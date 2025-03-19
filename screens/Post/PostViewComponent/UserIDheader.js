import { Text, TouchableOpacity, Image, View, StyleSheet } from 'react-native';

export default function UserIDheader({ handleNavigations, post }) {
  return (
    <TouchableOpacity style={styles.profileSection} onPress={() => handleNavigations('UserProfile')}>
      <View style={styles.leftSection}>
        <Image source={{ uri: post.avatar }} style={styles.avatar} />
        <View style={styles.profileText}>
          <Text style={styles.name}>{post.name}</Text>
          <Text style={styles.username}>@{post.username}</Text>
        </View>
      </View>

      {/* Displaying the Date on the Right Side */}
      <Text style={styles.date}>{post.date}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensures spacing between profile & date
    paddingVertical: 8,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  profileText: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  username: {
    fontSize: 13,
    color: '#888',
  },
  date: {
    fontSize: 12,
    color: '#777',
  },
});
