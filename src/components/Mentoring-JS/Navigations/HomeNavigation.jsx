import { View, Text } from 'react-native'
import HomeScreen from '../Screens/HomeScreen/MentorshipHomeScreen';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BusinessListByCategoryScreen from '../Screens/BusinesListByCategoryScreen/BusinessListByCategoryScreen';
import BusinessDetailsScreen from '../Screens/BusinessDetailsScreen/BusinessDetailsScreen';
import MentorProfile from '../Screens/Profile-Mentor';

const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
   <Stack.Navigator screenOptions={{
    headerShown:false
   }}>
        <Stack.Screen name='MentorshipHomeScreen' component={HomeScreen} />
        <Stack.Screen name='business-list' 
        component={BusinessListByCategoryScreen}/>
        <Stack.Screen name='business-detail' component={BusinessDetailsScreen} />
        <Stack.Screen name='MentorProfile' component={MentorProfile} />
   </Stack.Navigator>
  )
}