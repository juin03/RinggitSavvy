import React from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function LearningNavigationHome({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#406882",
      }}
    >
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          marginBottom: 20,
          fontFamily: "Inter-Bold",
          color: "#fdfdfd",
        }}
      >
        Learning Navigation Home
      </Text>
      <TouchableOpacity
        style={{
          height: 150,
          width: "85%",
          backgroundColor: "#fdfdfd",
          borderRadius: 15,
          marginVertical: 8,
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: 15,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 1.5,
          shadowRadius: 3.84,
          elevation: 5,
        }}
        onPress={() => {
          navigation.navigate("BiteSizeNavigation");
        }}
      >
        {/* // <View style={{ flexDirection: "row", alignItems: "center" }}> */}
        <AntDesign name="book" size={40} color="#406882" />
        <Text
          style={{
            color: "#406882",
            fontSize: 20,
            fontFamily: "Inter-Bold",
            // position: "absolute",
            // left: 15,
            // top: 110,
            // marginLeft: 10,
          }}
        >
          Bite-sized Learning
        </Text>
        {/* // </View> */}
      </TouchableOpacity>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          style={{
            height: 150,
            width: "40%",
            backgroundColor: "#fdfdfd",
            borderRadius: 15,
            marginVertical: 22,
            marginHorizontal: 11,
            justifyContent: "space-between",
            alignItems: "flex-start",
            padding: 15,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 1.5,
            shadowRadius: 3.84,
            elevation: 5,
          }}
          onPress={() => {
            navigation.navigate("BiteSizeNavigation");
          }}
        >
          <View style={{ justifyContent: "space-between", flex: 1 }}>
            <FontAwesome name="podcast" size={40} color="#406882" />
            <Text
              style={{
                color: "#406882",
                fontSize: 20,
                fontFamily: "Inter-Bold",
                position: "absolute",
                // left: 15,
                top: 95,
              }}
            >
              Podcasts
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 150,
            width: "40%",
            backgroundColor: "#fdfdfd",
            borderRadius: 15,
            marginVertical: 22,
            marginHorizontal: 11,
            justifyContent: "space-between",
            alignItems: "flex-start",
            padding: 15,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 1.5,
            shadowRadius: 3.84,
            elevation: 5,
          }}
          onPress={() => {
            navigation.navigate("MentorshipNavigation");
          }}
        >
          <View style={{ justifyContent: "space-between", flex: 1 }}>
            <FontAwesome5 name="chalkboard-teacher" size={40} color="#406882" />
            <Text
              style={{
                color: "#406882",
                fontSize: 20,
                fontFamily: "Inter-Bold",
                position: "absolute",
                // left: 15,
                top: 95,
              }}
            >
              Mentorship
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}