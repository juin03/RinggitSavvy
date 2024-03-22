import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screen/HomeScreen";
import CourseDetailScreen from "../Screen/CourseDetailScreen";
import { createNavigationContainerRef } from "@react-navigation/native";
import ChapterContentScreen from "../Screen/ChapterContentScreen";
import CategorisedList from "../Screen/CategorisedList";

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();
export default function HomeScreenNavigation() {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      initialRouteName="BiteSizeHome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BiteSizeHome" component={HomeScreen} />
      <Stack.Screen name="course-detail" component={CourseDetailScreen} />
      <Stack.Screen name="chapter-content" component={ChapterContentScreen} />
      <Stack.Screen name="category-list" component={CategorisedList} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
