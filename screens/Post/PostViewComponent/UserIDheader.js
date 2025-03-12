import { Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function UserIDheader({ handleNavigations, post }) {
  return (
    <TouchableOpacity style={styles.profileSection} onPress={() => handleNavigations('UserProfile')}>
      <Image source={{ uri: post.avatar }} style={styles.avatar} />
      <Text style={styles.profileText}>
        <Text style={styles.name}>{post.name}</Text>
        <Text style={styles.username}> @{post.username} • {post.date}</Text>
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 12,
    color: '#666',
  },
});
