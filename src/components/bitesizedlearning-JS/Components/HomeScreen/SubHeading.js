import { View, Text } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";

export default function SubHeading({ text, color = Colors.PRIMARY }) {
  return (
    <View>
      <Text
        style={{
          fontFamily: "Inter-SemiBold",
          fontSize: 20,
          color: color,
          marginBottom: 5,
          marginTop: 40,
        }}
      >
        {text}
      </Text>
    </View>
  );
}
