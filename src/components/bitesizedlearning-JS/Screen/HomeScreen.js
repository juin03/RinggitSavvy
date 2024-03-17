import { View, Text } from "react-native";
import React from "react";
import Header from "../Components/HomeScreen/Header";
import Colors from "../Utils/Colors";
import CourseList from "../Components/HomeScreen/CourseList";
import SubHeading from "../Components/HomeScreen/SubHeading";

export default function HomeScreen() {
  return (
    <View>
      <View>
        <Header />
      </View>
      <View style={{ padding: 20 }}>
        <View style={{ marginTop: -230 }}>
          <CourseList level={"Basic"} />
        </View>
        <CourseList level={"Moderate"} />
        <CourseList level={"Advanced"} />
      </View>
    </View>
  );
}
