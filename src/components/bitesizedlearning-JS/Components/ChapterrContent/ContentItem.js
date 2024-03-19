import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import RenderHtml from "react-native-render-html";
import Colors from "../../Utils/Colors";


export default function ContentItem({ description }) {
  const { width } = useWindowDimensions();
  const descriptionSource = {
    html: description,
  };
  return (
    description && (
      <View>
        <RenderHtml
          contentWidth={width}
          source={descriptionSource}
          tagsStyles={tagsStyles}
          baseFontStyle={{ fontFamily: "Inter-Regular", fontSize: 14, overflow: 'hidden' }}
        />
      </View>
    )
  );
}

const tagsStyles = {
  body: {
    fontFamily: "Inter-Regular",
    fontSize: 14,
  },

};
