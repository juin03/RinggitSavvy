import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet} from 'react-native';
import { useFonts } from 'expo-font';
import HomeScreen from './HomeScreen';
import OnboardingNavigation from './src/components/Onboarding-JS/Navigation/OnboardingNavigation';
import NewsHomeNavigator from './src/components/NewsHome-JS/Navigations/NewsHomeNavigator';
import ChatbotNavigation from './src/components/ChatBot-JS/Navigations/ChatbotNavigation';
import BiteSizeNavigation from './src/components/bitesizedlearning-JS/Navigations/BiteSizeNavigation';
import QuizNavigator from './src/components/Quiz-JS/Navigations/QuizNavigator';


const Stack = createNativeStackNavigator();

// font type
export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Bold": require('./assets/fonts/Inter-Bold.ttf'),
    "Inter-Light": require('./assets/fonts/Inter-Light.ttf'),
    "Inter-Regular": require('./assets/fonts/Inter-Regular.ttf'),
    "Inter-Medium": require('./assets/fonts/Inter-Medium.ttf'),
    "Inter-SemiBold": require('./assets/fonts/Inter-SemiBold.ttf'),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="OnboardingNavigation" component={OnboardingNavigation} options={{ headerShown: false }}/>
        <Stack.Screen name="NewsHomeNavigator" component={NewsHomeNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="ChatbotNavigation" component={ChatbotNavigation} options={{ headerShown: false }}/>
        <Stack.Screen name="BiteSizeNavigation" component={BiteSizeNavigation} options={{ headerShown: false }}/>
        <Stack.Screen name="QuizNavigator" component={QuizNavigator} options={{ headerShown: false }}/>
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