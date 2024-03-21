import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screen/HomeScreen";
import MyCourse from "../Screen/MyCourse";
import Profile from "../Screen/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import HomeScreenNavigation from "./BiteSizeNavigation";

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreenNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen name="MyCourse" component={MyCourse} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
