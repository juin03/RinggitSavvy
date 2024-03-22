import { View, Text, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { getCourseListByCategory } from "../Services";
import { FlatList } from "react-native-gesture-handler";
import CategorisedListItem from "./CategorisedListItem";
import { useState } from "react";
import { StyleSheet } from "react-native";

export default function CategorisedList({ category }) {
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    getCategorisedList();
  }, [category]);

  const getCategorisedList = () => {
    getCourseListByCategory(category).then((resp) => {
      console.log("RESP--", resp);
      setCourseList(resp?.courses);
    });
  };
  return (
    <View style={{ padding: 20, paddingTop: 60 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontFamily: "Inter-Bold" }}>Stocks</Text>
      </View>
      <View style={styles.container}>
        <Image
          source={{ uri: "https://i.ibb.co/0FfYS2B/capital-market-1.png" }}
          style={styles.image}
        />
        <View style={styles.subContainer}>
          <Text style={{ fontFamily: "Inter-Bold", fontSize: 19 }}>
            Stocks/Shares
          </Text>
          <Text style={{ fontFamily: "Inter-SemiBold", fontSize: 16 }}>
            Free
          </Text>
          <View style={{ flexDirection: "row", gap: 15 }}>
            <Text style={{ fontFamily: "Inter-Regular", fontSize: 13 }}>
              📖 2 Chapter(s)
            </Text>
            <Text style={{ fontFamily: "Inter-Regular", fontSize: 13 }}>
              ⏰ 1 hour(s)
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  subContainer: {
    display: "flex",
    gap: 8,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 15,
  },
});
