import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

function UserProfile() {
    const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
        <Text style={styles.nameText1}>Gayan Nisansala</Text>
      <Image 
        style={styles.profileImage} 
        source={{ uri: 'https://via.placeholder.com/150' }} 
      />
      <View style={styles.infoBox}>
      <Text style={styles.nameText2}>Gayan Nisansala</Text>
      <Text style={styles.locationText}>Awissawella, Sri Lanka</Text>
      <Text style={styles.phoneText}>+9477 5645323</Text>
      </View>
      <TouchableOpacity 
  style={styles.editButton}
  onPress={() => navigation.navigate('Profile2')}  
>
  <Text style={styles.editButtonText}>Edit Profile</Text>
</TouchableOpacity>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    padding: 90, 
    backgroundColor: '#fff' 
  },
  profileImage: { 
    width: 150, 
    height: 150, 
    borderRadius: 75, 
    marginBottom: 50, 
    margin:40,
  },
  nameText2: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginBottom: 5, 
    color:'#ffc107',
    
  },
  nameText1: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 5, 
    color:'#7D4B3E',
    
  },
  locationText: { 
    fontSize: 16, 
    color: '#7D4B3E', 
    marginBottom: 5 
  },
  phoneText: { 
    fontSize: 16, 
    color: '#7D4B3E', 
    marginBottom: 20 
  },
  editButton: { 
    backgroundColor: '#7D4B3E', 
    padding: 15, 
    borderRadius: 10, 
    paddingHorizontal:30,
  },
  
  editButtonText: { 
    color: '#fff', 
    fontSize: 16 
  },
  infoBox: {
    width: '150%', 
    padding: 50, 
    backgroundColor: '#fffde7', 
    borderRadius: 10, 
    alignItems: 'center', 
    marginBottom: 20,
    shadowColor: '#fffde7',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  
});

export default UserProfile;
