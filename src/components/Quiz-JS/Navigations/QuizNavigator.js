import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import QuizHome from '../Screen/QuizHome'
import Quiz from '../Screen/Quiz'
import QuizResult from '../Screen/QuizResult'

const Stack = createStackNavigator();

function QuizNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="QuizHome" component={QuizHome} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }}  />
      <Stack.Screen name="QuizResult" component={QuizResult} options={{ headerShown: false }}  />
    </Stack.Navigator>
  )
}

export default QuizNavigator;
