import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PodcastHome from '../Screen/PodcastHomeScreen';
import PodcastPlay from '../Screen/PodcastPlaying';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

function PodcastNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PodcastHome" component={PodcastHome} options={{ headerShown: false }}/>
      <Stack.Screen name="PodcastPlay" component={PodcastPlay} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default PodcastNavigation
