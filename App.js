import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet} from 'react-native';
import { useFonts } from 'expo-font';
import BottomTab from './BottomTab';
import OnboardingNavigation from './src/components/Onboarding-JS/Navigation/OnboardingNavigation';
import NewsHomeNavigator from './src/components/NewsHome-JS/Navigations/NewsHomeNavigator';
import ChatbotNavigation from './src/components/ChatBot-JS/Navigations/ChatbotNavigation';
import BiteSizeNavigation from './src/components/bitesizedlearning-JS/Navigations/BiteSizeNavigation';
import Route from './src/components/Community-JS/Routes';
import QuizNavigator from './src/components/Quiz-JS/Navigations/QuizNavigator';
import TabNavigation from './src/components/Mentoring-JS/Navigations/TabNavigation';
import LearningNavigationHome from './src/components/Learning-JS/LearningNavigationHome';
import { Clerk, ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import SignInWithOAuth from './SignInWithOAuth';
import EditProfile from './src/components/Profile-JS/Profile-JS/EditProfile';


const Stack = createNativeStackNavigator();

// font type
export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Bold": require('./assets/fonts/Inter-Bold.ttf'),
    "Inter-Light": require('./assets/fonts/Inter-Light.ttf'),
    "Inter-Regular": require('./assets/fonts/Inter-Regular.ttf'),
    "Inter-Medium": require('./assets/fonts/Inter-Medium.ttf'),
    "Inter-SemiBold": require('./assets/fonts/Inter-SemiBold.ttf'),
    "outfit": require('./assets/fonts/Outfit-Regular.ttf'),
    "outfit-medium": require('./assets/fonts/Outfit-Medium.ttf'),
    "outfit-bold": require('./assets/fonts/Outfit-Bold.ttf'),
  });

  return (
    <ClerkProvider publishableKey='pk_test_aGVscGVkLWRvcnktMjYuY2xlcmsuYWNjb3VudHMuZGV2JA'>
      <SignedIn>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={BottomTab} options={{ headerShown: false }}/>
            {/* <Stack.Screen name="OnboardingNavigation" component={OnboardingNavigation} options={{ headerShown: false }}/>
            <Stack.Screen name="NewsHomeNavigator" component={NewsHomeNavigator} options={{ headerShown: false }}/>
            <Stack.Screen name="ChatbotNavigation" component={ChatbotNavigation} options={{ headerShown: false }}/>
            <Stack.Screen name="BiteSizeNavigation" component={BiteSizeNavigation} options={{ headerShown: false }}/>
            <Stack.Screen name="QuizNavigator" component={QuizNavigator} options={{ headerShown: false }}/>
            <Stack.Screen name="Route" component={Route} options={{ headerShown: false }}/>
            <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false }}/>
            <Stack.Screen name="LearningNavigationHome" component={LearningNavigationHome} options={{ headerShown: false }}/>
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }}/> */}
          </Stack.Navigator>
        </NavigationContainer>
      </SignedIn>

      <SignedOut>
        <SignInWithOAuth />
      </SignedOut>
      
    </ClerkProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Background color
  },
});