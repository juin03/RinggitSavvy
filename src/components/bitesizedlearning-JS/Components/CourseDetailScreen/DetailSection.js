import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import OptionItem from "./OptionItem";

export default function DetailSection({ course }) {
  return (
    <View
      style={{ padding: 10, borderRadius: 15, backgroundColor: Colors.WHITE }}
    >
      <Image
        source={{ uri: course?.banner?.url }}
        style={{
          width: Dimensions.get("screen").width * 0.84,
          height: 190,
          borderRadius: 15,
        }}
      />
      <View style={{ padding: 10 }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Inter-Bold",
            marginTop: 0,
          }}
        >
          {course.name}
        </Text>

        <View>
          <View style={styles.rowStyle}>
            <OptionItem
              icon={"book-outline"}
              value={course.chapters?.length + " Chapter(s)"}
            />
            <OptionItem
              icon={"time-outline"}
              value={course.time + " hour(s)"}
            />
          </View>
          <View style={styles.rowStyle}>
            <OptionItem icon={"person-circle-outline"} value={course?.author} />
            <OptionItem icon={"bulb-outline"} value={course.level} />
          </View>
          <View>
            <Text
              style={{
                fontFamily: "Inter-Medium",
                fontSize: 16,
                marginTop: 15,
                marginBottom: 1,
              }}
            >
              Description
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "Inter-Light",
              color: Colors.BLACK,
              lineHeight: 17,
              fontSize: 14,
              textAlign: "justify",
            }}
          >
            {course.description?.markdown}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: Colors.PRIMARY,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                fontFamily: "Inter-Medium",
                color: Colors.WHITE,
                textAlign: "center",
              }}
            >
              Enroll for Free
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    margin: 0,
    marginTop: -1,
    fontFamily: "Inter-Medium",
    fontSize: 16,
  },
});
