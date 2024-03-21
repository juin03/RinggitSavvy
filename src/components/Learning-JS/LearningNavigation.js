// In LearningStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LearningNavigationHome from './LearningNavigationHome';
// Import other screens you want to navigate to within the Learning tab
import BiteSizeNavigation from '../bitesizedlearning-JS/Navigations/BiteSizeNavigation';
import MentorshipNavigation from '../Mentoring-JS/Navigations/TabNavigation';

const Stack = createStackNavigator();

function LearningStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LearningHome" component={LearningNavigationHome} />
      <Stack.Screen name="BiteSizeNavigation" component={BiteSizeNavigation} />
      {/* <Stack.Screen name="PodcastNavigation" component={PodcastNavigation} /> */}
      <Stack.Screen name="MentorshipNavigation" component={MentorshipNavigation} />
    </Stack.Navigator>
  );
}

export default LearningStack;
