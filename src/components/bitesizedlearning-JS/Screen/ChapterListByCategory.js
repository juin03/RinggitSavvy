import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import index from "../Services/index";
import CourseDetailScreen from "./CourseDetailScreen";
import Colors from "../Utils/Colors";
// import PageHeading from "../../Components/PageHeading";
export default function CourseListByCategoryScreen() {
  const param = useRoute().params;
  const navigation = useNavigation();

  const [courseList, setChapterList] = useState([]);
  useEffect(() => {
    param && getCourseByCategory();
  }, [param]);

  /**
   * Business List By Category
   */
  const getCourseByCategory = () => {
    index.getCourseListByCategory(param.category).then((resp) => {
      setChapterList(resp.chapterLists);
    });
  };
  return (
    <View style={{ padding: 20, paddingTop: 30 }}>
      {/*  <PageHeading title={param.category} /> */}
      {courseList?.length > 0 ? (
        <FlatList
          data={courseList}
          style={{ marginTop: 15 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <CourseDetailScreen chapter={item} />
          )}
        />
      ) : (
        <Text
          style={{
            fontFamily: "Inter-Medium",
            color: Colors.GRAY,
            fontSize: 20,
            textAlign: "center",
            marginTop: "20%",
          }}
        >
          No Courses Found
        </Text>
      )}
    </View>
  );
}
