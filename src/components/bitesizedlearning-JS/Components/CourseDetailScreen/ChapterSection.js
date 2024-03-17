import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";

export default function ChapterSection({ chapterList }) {
  const navigation = useNavigation();
  const OnChapterPress = (content) => {
    navigation.navigate("chapter-content", {
      content: content,
    });
  };

  return (
    chapterList && (
      <View
        style={{
          padding: 15,
          backgroundColor: Colors.WHITE,
          marginTop: 20,
          borderRadius: 15,
        }}
      >
        <Text style={{ fontFamily: "Inter-Medium", fontSize: 20 }}>
          Chapters
        </Text>
        {chapterList.map((item, index) => (
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 15,
              borderWidth: 1,
              borderRadius: 10,
              marginTop: 10,
              borderColor: Colors.BLACK,
            }}
            onPress={() => OnChapterPress(item.content)}
          >
            <View
              style={{
                display: "flex",
                flexDiretion: "row",
                direction: "ltr",
                //   alignItems: "center",
                //   justifyContent: "center",
                gap: 10,
              }}
            >
              {/* <Text style={{ fontFamily: "Inter-Medium", fontSize: 16 }}>
              {index + 1}
            </Text> */}
              <Text
                style={{
                  fontFamily: "Inter-Regular",
                  fontSize: 16,
                  color: Colors.BLACK,
                }}
              >
                {item.title}
              </Text>
            </View>
            <Ionicons name="play" size={24} color={Colors.DARK} />
          </TouchableOpacity>
        ))}
      </View>
    )
  );
}
