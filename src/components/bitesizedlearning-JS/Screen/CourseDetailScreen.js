import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import DetailSection from "../Components/CourseDetailScreen/DetailSection";
import ChapterSection from "../Components/CourseDetailScreen/ChapterSection";
import { SafeAreaView } from "react-native";

export default function CourseDetailScreen() {
  const navigate = useNavigation();
  const params = useRoute().params;
  // const {user}=useUser;
  useEffect(() => {
    console.log(params.course);
  }, [params.course]);

  // const UserEnrollCourse=()=>{
  //   enrollCourse(params.course.id, )
  // }

  return (
    params.course && (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ padding: 20, marginTop: -10 }}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity onPress={() => navigate.goBack()}>
            {/* <Ionicons name="arrow-back" size={28} color="black" /> */}
          </TouchableOpacity>
          <DetailSection course={params.course} />
          <ChapterSection chapterList={params.course.chapters} />
        </ScrollView>
      </SafeAreaView>
    )
  );
}
