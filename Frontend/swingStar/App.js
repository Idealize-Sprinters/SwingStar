import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './TailorScreens/LoginScreen';
import LandingScreen from './UserScreens/LandingScreen';
import UserProfile from './UserScreens/UserProfile';
import EditProfile from './UserScreens/EditProfile';
import CurrentOrderScreen1 from './UserScreens/CurrentOrderScreen1';
import BookAppointment from './UserScreens/BookAppointment';
import PaymentSuccess from './UserScreens/PaymentSuccess';
import Order1 from './UserScreens/Order1';
import ProductDetailScreen1 from './UserScreens/ProductDetailScreen1';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Order1' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Profile1" component={UserProfile} />
        <Stack.Screen name="Profile2" component={EditProfile} />
        <Stack.Screen name="CurrentO1" component={CurrentOrderScreen1} />
        <Stack.Screen name="BookAppointment" component={BookAppointment} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
        <Stack.Screen name="Order1" component={Order1} />
        <Stack.Screen name="PDetails1" component={ProductDetailScreen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


