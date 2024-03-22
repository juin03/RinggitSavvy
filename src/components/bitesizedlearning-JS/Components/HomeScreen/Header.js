import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
// import { useUser } from '@clerk/clerk-expo'

export default function Header() {
  return (
    <View>
      <View>
        <View
          style={{
            // marginBottom: 800,
            // marginRight: 100,
            marginTop: 0,
            backgroundColor: Colors.PRIMARY,
            height: 280,
            padding: 20,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: Colors.WHITE,
              fontSize: 28,
              fontFamily: "Inter-Bold",
              marginTop: 50,
            }}
          >
            Bite-Sized Learning
          </Text>
        </View>
      </View>
    </View>
  );
}
