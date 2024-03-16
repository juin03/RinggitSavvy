import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet} from 'react-native';
import HomeScreen from './HomeScreen';
import OnboardingNavigation from './src/components/Onboarding-JS/Navigation/OnboardingNavigation';
import NewsHomeNavigator from './src/components/NewsHome-JS/Navigations/NewsHomeNavigator';
import ChatbotNavigation from './src/components/ChatBot-JS/Navigations/ChatbotNavigation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="OnboardingNavigation" component={OnboardingNavigation} options={{ headerShown: false }}/>
        <Stack.Screen name="NewsHomeNavigator" component={NewsHomeNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="ChatbotNavigation" component={ChatbotNavigation} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Background color
  },
});

