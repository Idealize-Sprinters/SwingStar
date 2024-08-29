import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function Video1({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Custom Header with Message Icon */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Measurement Guide</Text>
        
      </View>
      
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput 
          style={styles.searchBar} 
          placeholder="Search for videos..." 
          placeholderTextColor="#888"
        />
      </View>
      
      {/* Video Thumbnails */}
      <View style={styles.videoList}>
        <TouchableOpacity 
          style={styles.videoBox}
          onPress={() => navigation.navigate('Video2')} 
        >
          <View style={styles.videoThumbnailContainer}>
            <Image 
              source={{ uri: 'https://www.youtube.com/watch?v=jLlpJYqsoO4' }} 
              style={styles.videoThumbnail}
            />
            <View style={styles.playButton}>
              <MaterialIcons name="play-arrow" size={30} color="#FFF" />
            </View>
          </View>
          <View style={styles.videoDescription}>
            <Text style={styles.videoTitle}>Bust</Text>
            <Text style={styles.videoSubtitle}>Learn the correct way to measure your room for accurate results.</Text>
          </View>
        </TouchableOpacity>

        {/* Other video thumbnails... */}

      </View>

      {/* Navigation Bar */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => navigation.navigate('Home')}
        >
          <MaterialIcons name="home" size={30} color="#888888" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => navigation.navigate('Photos')}
        >
          <MaterialIcons name="message" size={30} color="#888888" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => navigation.navigate('Profile')}
        >
          <MaterialIcons name="person" size={30} color="#888888" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => navigation.navigate('Cart')}
        >
          <MaterialIcons name="shopping-cart" size={30} color="#888888" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
    paddingBottom: 0, // Adjust padding to accommodate navbar
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#704F38',
  },
  searchBarContainer: {
    marginBottom: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#F7F2ED',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#F7F2ED',
  },
  videoList: {
    flex: 1,
  },
  videoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F2ED',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  videoThumbnailContainer: {
    width: 120,
    height: 80,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 10,
    marginRight: 10,
  },
  videoThumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -15 }, { translateY: -15 }],
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 30,
    padding: 10,
  },
  videoDescription: {
    flex: 1,
    padding: 10,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  videoSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  bottomNavBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default Video1;
