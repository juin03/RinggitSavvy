import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getCourseList } from "../../Services";
import Colors from "../../Utils/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function CourseItem({ item }) {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: Colors.WHITE,
        marginRight: 15,
        borderRadius: 15,
      }}
    >
      {/* <Text style={{fontFamily:'Inter-Bold', fontSize:12}}>{item.name}</Text> */}
      <Image
        source={{ uri: item?.banner?.url }}
        style={{ height: 80, width: 210, borderRadius: 15 }}
      />
      <View style={{}}>
        <Text
          style={{
            fontFamily: "Inter-Bold",
            fontSize: 15,
            marginTop: 5,
          }}
        >
          {item.name}
        </Text>

        <Text
          style={{
            marginTop: 5,
            color: Colors.PRIMARY,
            fontFamily: "Inter-Medium",
          }}
        >
          {item.price == "0" ? "Free" : item.price}
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              marginTop: 5,
            }}
          >
            <Ionicons name="book-outline" size={16} color="black" />
            <Text style={{ fontFamily: "Inter-Regular" }}>
              {item?.chapters?.length} Chapters
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              marginTop: 5,
            }}
          >
            <Ionicons name="time-outline" size={16} color="black" />
            <Text style={{ fontFamily: "Inter-Regular" }}>
              {item?.time} hour(s)
            </Text>
          </View>

          <View></View>
        </View>
      </View>
    </View>
  );
}
