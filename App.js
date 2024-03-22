import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet} from 'react-native';
import { useFonts } from 'expo-font';
import BottomTab from './BottomTab';
import { Clerk, ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import SignInWithOAuth from './SignInWithOAuth';
import { LogBox } from 'react-native';
import { Text } from 'react-native-render-html';
import { useUser} from '@clerk/clerk-expo'
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

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

  console.disableYellowBox = true;


  return (
    <ClerkProvider publishableKey='pk_test_aGVscGVkLWRvcnktMjYuY2xlcmsuYWNjb3VudHMuZGV2JA'>
      <SignedIn>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={BottomTab} options={{ headerShown: false }}/>
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