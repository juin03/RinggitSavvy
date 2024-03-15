import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import NewsHome from '../Screen/NewsHome';
import ReadNews from '../Screen/ReadNews';

const Stack = createStackNavigator();

function NewsHomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NewsHome" component={NewsHome} options={{ headerShown: false }}/>
      <Stack.Screen name="ReadNews" component={ReadNews} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default NewsHomeNavigator
