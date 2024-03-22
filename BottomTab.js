import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import NewsHomeNavigator from './src/components/NewsHome-JS/Navigations/NewsHomeNavigator';
import ChatbotNavigation from './src/components/ChatBot-JS/Navigations/ChatbotNavigation';
import Community from './src/components/Community-JS/Routes';
import LearningNavigationHome from './src/components/Learning-JS/LearningNavigation';
import ProfileScreen from './src/components/Profile-JS/Profile-JS/MyProfile';



export default function HomeScreen({ navigation }) {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'News') {
          iconName = focused ? 'newspaper' : 'newspaper-outline';
        } else if (route.name === 'ChatBot') {
          iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
        } else if (route.name === 'Learning') {
          iconName = focused ? 'book' : 'book-outline';
        } else if (route.name === 'ProfileScreen') {
          iconName = focused ? 'person' : 'person-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#406882',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Home" component={Community} options={{ headerShown: false }}/>
    <Tab.Screen name="News" component={NewsHomeNavigator} options={{ headerShown: false }}/>
    <Tab.Screen name="ChatBot" component={ChatbotNavigation} options={{ headerShown: false }}/>
    <Tab.Screen name="Learning" component={LearningNavigationHome} options={{ headerShown: false }}/>      
    <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }}/>
  </Tab.Navigator>
);
}