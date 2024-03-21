import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsHomeNavigator from './src/components/NewsHome-JS/Navigations/NewsHomeNavigator';
import ChatbotNavigation from './src/components/ChatBot-JS/Navigations/ChatbotNavigation';
import Community from './src/components/Community-JS/Routes';
import LearningNavigationHome from './src/components/Learning-JS/LearningNavigation';
import EditProfile from './src/components/Profile-JS/Profile-JS/EditProfile';



export default function HomeScreen({ navigation }) {

  const Tab = createBottomTabNavigator();

  return (
      <Tab.Navigator >
        <Tab.Screen name="Home" component={Community} options={{ headerShown: false }}/>
        <Tab.Screen name="News" component={NewsHomeNavigator} options={{ headerShown: false }}/>
        <Tab.Screen name="ChatBot" component={ChatbotNavigation} options={{ headerShown: false }}/>
        <Tab.Screen name="Learning" component={LearningNavigationHome} options={{ headerShown: false }}/>      
        <Tab.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }}/>
      </Tab.Navigator>

  );
}
