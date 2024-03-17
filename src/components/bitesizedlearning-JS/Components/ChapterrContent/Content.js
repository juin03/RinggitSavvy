import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ProgressBar from "./ProgressBar";
import { FlatList } from "react-native";
import { Dimensions } from "react-native";
import ContentItem from "./ContentItem";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Content({ content }) {
  let contentRef;
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);

  const onNextBtnPress = (index) => {
    if (content?.length <= index + 1) {
      navigation.goBack();
      return;
    }
    setActiveIndex(index + 1);
    contentRef.scrollToIndex({ animated: true, index: index + 1 });
  };
  return (
    <View style={{ padding: 0, height: "100%" }}>
      <ProgressBar contentLength={content?.length} contentIndex={activeIndex} />

      <FlatList
        data={content}
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        ref={(ref) => {
          contentRef = ref;
        }}
        renderItem={({ item, index }) => (
          <View style={{ width: Dimensions.get("screen").width, padding: 20 }}>
            <Text
              style={{
                fontFamily: "Inter-Medium",
                fontSize: 20,
                marginTop: 0,
              }}
            >
              {item.heading}
              <ContentItem description={item?.description?.html} />
              <TouchableOpacity
                style={{ marginTop: 10 }}
                onPress={() => onNextBtnPress(index)}
              >
                <Text
                  style={{
                    padding: 15,
                    backgroundColor: Colors.PRIMARY,
                    color: Colors.WHITE,
                    borderRadius: 10,
                    textAlign: "center",
                    fontFamily: "Inter-Medium",
                    // position: "absolute",
                    // bottom: 0,
                    fontSize: 17,
                  }}
                >
                  {content?.length > index + 1 ? "Next" : "Finish"}
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        )}
      />
    </View>
  );
}
