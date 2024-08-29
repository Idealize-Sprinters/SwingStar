import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const appointments = [
  { date: '28/07/2024', morning: 3, evening: 2 },
  { date: '30/07/2024', morning: 5, evening: 3 },
  { date: '01/08/2024', morning: 4, evening: 2 },
  { date: '02/08/2024', morning: 5, evening: 3 },
  { date: '05/08/2024', morning: 3, evening: 2 },
];

const SeeappointmentsTailor1 = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('SeeappointmentsTailor2', { date: item.date })}>
      <View style={styles.appointmentItem}>
        <Text style={styles.dateText}>{item.date}</Text>
        <View style={styles.timeSlot}>
          <Text style={styles.timeSlotText}>Morning</Text>
          <Text style={styles.appointmentCount}>{item.morning}</Text>
        </View>
        <View style={styles.timeSlot}>
          <Text style={styles.timeSlotText}>Evening</Text>
          <Text style={styles.appointmentCount}>{item.evening}</Text>
        </View>
        <View style={styles.totalSlot}>
          <Text style={styles.totalText}>{item.morning + item.evening} appointments</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#A52A2A" />
        </TouchableOpacity>

        <Text style={styles.heading}>Upcoming</Text>
        <FlatList
          data={appointments}
          renderItem={renderItem}
          keyExtractor={(item) => item.date}
        />

        {/* Navigation Bar */}
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
            <Ionicons name="home" size={24} color="#A52A2A" />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Chats')}>
            <Ionicons name="chatbubbles" size={24} color="#A52A2A" />
            <Text style={styles.navText}>Chats</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
            <Ionicons name="person" size={24} color="#A52A2A" />
            <Text style={styles.navText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Appointment')}>
            <Ionicons name="calendar" size={24} color="#A52A2A" />
            <Text style={styles.navText}>Appointment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  backButton: {
    marginBottom: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#A52A2A', // Brown color
  },
  appointmentItem: {
    backgroundColor: '#FFF',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#A52A2A', // Brown color
  },
  timeSlot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  timeSlotText: {
    fontSize: 16,
    color: '#A52A2A', // Brown color
    textAlign: 'left',
  },
  appointmentCount: {
    fontSize: 16,
    color: '#A52A2A', // Brown color
    fontWeight: 'bold',
    textAlign: 'right',
  },
  totalSlot: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  totalText: {
    fontSize: 14,
    color: '#A52A2A', // Brown color
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#FFF',
    height: 60, // Fixed height for the nav bar

  
  },
  navItem: {
    alignItems: 'center',
    color: '#3D3D3D',
  },
  navText: {
    fontSize: 12,
    color: '#3D3D3D', // Brown color
    marginTop: 4,
  },
});

export default SeeappointmentsTailor1;
