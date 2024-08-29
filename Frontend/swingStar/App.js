import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './TailorScreens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './UserScreens/LandingScreen';
import HelpDesk1 from './UserScreens/HelpDesk1';
import Video1 from './UserScreens/Video1';
import Phone1 from './UserScreens/Phone1';
import Ideas1 from './UserScreens/Ideas1'
import Phone2 from './UserScreens/Phone2';
import Video2 from './UserScreens/Video2';
 




const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HelpDesk1" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HelpDesk1" component={HelpDesk1} />
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Video1" component={Video1}/>
        <Stack.Screen name="Phone1" component={Phone1}/>
         <Stack.Screen name="Ideas1" component={Ideas1}/>  
         <Stack.Screen name="Phone2" component={Phone2}/>
         <Stack.Screen name="Video2" component={Video2} />       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
