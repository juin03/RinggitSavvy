import { View, Text, ImageBackground } from "react-native";
import React from "react";
import app from "./../../assets/images/Login.png";
import Colors from "../Utils/Colors";

export default function LoginScreen() {
  return (
    <ImageBackground source={app} style={{ width: "100%", height: "100%" }}>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            marginTop: -350,
            color: Colors.WHITE,
            fontSize: 14,
            fontFamily: "Inter-Light",
          }}
        >
          Your Financial Literacy Buddy!
        </Text>
      </View>
    </ImageBackground>
  );
}
