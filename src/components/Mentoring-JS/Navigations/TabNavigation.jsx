import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/MentorshipHomeScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import Colors from '../Utils/Colors';
import HomeNavigation from './HomeNavigation';
import BookingNavigation from './BookingNavigation';
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator();

export default function TabNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="MentorHome" component={HomeNavigation} options={{ headerShown: false }}/>
        <Stack.Screen name="MentorBooking" component={BookingNavigation} options={{ headerShown: false }}/>
    </Stack.Navigator>
    
    // <Tab.Navigator screenOptions={{
    //     headerShown:false,
    //     tabBarActiveTintColor:Colors.PRIMARY
    // }}>
    //    <Tab.Screen name='home' component={HomeNavigation}
    //    options={{
    //     tabBarLabel:({color})=>(
    //         <Text style={{color:color,fontSize:12,marginTop:-7}}>
    //             Home</Text>
    //     ),
    //     tabBarIcon:({color,size})=>(
    //         <FontAwesome name="home" size={size} color={color} />
    //     )
    //    }}
    //    /> 
    //    <Tab.Screen name='booking' component={BookingNavigation} 
    //    options={{
    //     tabBarLabel:({color})=>(
    //         <Text style={{color:color,fontSize:12,marginTop:-7}}>
    //             Booking</Text>
    //     ),
    //     tabBarIcon:({color,size})=>(
    //         <FontAwesome name="bookmark" size={size} color={color} />
    //     )
    //    }}/> 
    //    <Tab.Screen name='profile' component={ProfileScreen} 
    //    options={{
    //     tabBarLabel:({color})=>(
    //         <Text style={{color:color,fontSize:12,marginTop:-7}}>
    //             Profile</Text>
    //     ),
    //     tabBarIcon:({color,size})=>(
    //         <FontAwesome name="user-circle" size={size} color={color} />
    //     )
    //    }}/> 
    // </Tab.Navigator>
  )
}