import React from 'react';
import { View, Button, Tab } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OnboardingNavigation from './src/components/Onboarding-JS/Navigation/OnboardingNavigation';
import NewsHomeNavigator from './src/components/NewsHome-JS/Navigations/NewsHomeNavigator';
import ChatbotNavigation from './src/components/ChatBot-JS/Navigations/ChatbotNavigation';
import BiteSizeNavigation from './src/components/bitesizedlearning-JS/Navigations/BiteSizeNavigation';
import Community from './src/components/Community-JS/Routes';
import QuizNavigator from './src/components/Quiz-JS/Navigations/QuizNavigator';
import Mentoring from './src/components/Mentoring-JS/Navigations/TabNavigation';
import LearningNavigationHome from './src/components/Learning-JS/LearningNavigationHome';
import EditProfile from './src/components/Profile-JS/Profile-JS/EditProfile';



export default function HomeScreen({ navigation }) {

  const Tab = createBottomTabNavigator();

  return (
      <Tab.Navigator >
        {/* <Tab.Screen name="OnboardingNavigation" component={OnboardingNavigation} options={{ headerShown: false }}/> */}
        <Tab.Screen name="Home" component={Community} options={{ headerShown: false }}/>
        <Tab.Screen name="News" component={NewsHomeNavigator} options={{ headerShown: false }}/>
        <Tab.Screen name="ChatBot" component={ChatbotNavigation} options={{ headerShown: false }}/>
        <Tab.Screen name="Learning" component={LearningNavigationHome} options={{ headerShown: false }}/>
        {/* <Tab.Screen name="QuizNavigator" component={QuizNavigator} options={{ headerShown: false }}/> */}
      
        <Tab.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }}/>
      </Tab.Navigator>
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Button
    //     title="Onboarding"
    //     onPress={() => navigation.navigate('OnboardingNavigation')}
    //   />
    //   <Button
    //     title="News"
    //     onPress={() => navigation.navigate('NewsHomeNavigator')}
    //   />
    //   <Button
    //     title="Chatbot"
    //     onPress={() => navigation.navigate('ChatbotNavigation')}
    //   />
    //   <Button
    //     title="BiteSizeLearning"
    //     onPress={() => navigation.navigate('BiteSizeNavigation')}
    //   />
    //   <Button
    //     title="Community"
    //     onPress={() => navigation.navigate('Route')}
    //   />
    //   <Button
    //     title="Risk Tolerance Assessment"
    //     onPress={() => navigation.navigate('QuizNavigator')}
    //   />
    //   <Button
    //     title="Community"
    //     onPress={() => navigation.navigate('TabNavigation')}
    //   />
    // </View>
  );
}
