import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from '../Screen/WelcomeScreen';
import HomeScreen from '../Screen/HomeScreen';

const Stack = createStackNavigator();

function ChatbotNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default ChatbotNavigation
