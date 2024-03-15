import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OnboardingLoading from '../OnboardingLoading';
import Onboarding1 from '../Onboarding1';
import Onboarding2 from '../Onboarding2';
import Onboarding3 from '../Onboarding3';


const Stack = createStackNavigator();


function OnboardingNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OnboardingLoading" component={OnboardingLoading} options={{ headerShown: false }}/>
      <Stack.Screen name="Onboarding1" component={Onboarding1} options={{ headerShown: false }}/>
      <Stack.Screen name="Onboarding2" component={Onboarding2} options={{ headerShown: false }}/>
      <Stack.Screen name="Onboarding3" component={Onboarding3} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default OnboardingNavigation
