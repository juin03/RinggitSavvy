import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screen/HomeScreen";
import CourseDetailScreen from "../Screen/CourseDetailScreen";
import { createNavigationContainerRef } from "@react-navigation/native";
import ChapterContentScreen from "../Screen/ChapterContentScreen";

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();
export default function HomeScreenNavigation() {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="course-detail" component={CourseDetailScreen} />
      <Stack.Screen name="chapter-content" component={ChapterContentScreen} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
