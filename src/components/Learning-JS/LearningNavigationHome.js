import React from "react";
import { View, TouchableOpacity, Text, ImageBackground, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SectionButton = ({ title, iconName, onPress, backgroundImageUri }) => (
  <TouchableOpacity style={styles.sectionButton} onPress={onPress} activeOpacity={0.7}>
    <ImageBackground
      source={{ uri: backgroundImageUri }}
      resizeMode="cover"
      style={styles.imageBackground}
      imageStyle={styles.imageBackgroundStyle}
    >
      <View style={styles.textBackground}>
        <Text style={styles.sectionText}>
          <FontAwesome name={iconName} size={24} color="#fff" /> {title}
        </Text>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

export default function LearningNavigationHome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Learning Navigation Home</Text>
      <SectionButton
        title="Bite-sized Learning Lessons"
        iconName="book"
        backgroundImageUri="https://miro.medium.com/v2/resize:fit:560/1*l63h6GuqpS-VfilKssFHZw.png"
        onPress={() => navigation.navigate("BiteSizeNavigation")}
      />
      <SectionButton
        title="Podcasts"
        iconName="podcast"
        backgroundImageUri="https://media.istockphoto.com/id/1283532997/vector/podcast-concept-thin-line-icon-abstract-icon-abstract-gradient-background-modern-sound-wave.jpg?s=612x612&w=0&k=20&c=YLg7rHeSuYqeIuGRAcvf2a7J8X8Sx-IkmqYHXIJGPYQ="
        onPress={() => navigation.navigate("BiteSizeNavigation")}
      />
      <SectionButton
        title="Mentorship"
        iconName="users"
        backgroundImageUri="https://media.istockphoto.com/id/1334472503/photo/indian-ceo-mentor-leader-talking-to-female-trainee-using-laptop-at-meeting.jpg?s=612x612&w=0&k=20&c=RypRc4QwkdD-ke1kY5dpBfiGpD2mQNFrXwNJj1W-wEo="
        onPress={() => navigation.navigate("MentorshipNavigation")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdfdfd",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  sectionButton: {
    height: 120,
    width: "90%",
    borderRadius: 20,
    marginVertical: 12,
    overflow: "hidden",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackgroundStyle: {
    borderRadius: 20,
  },
  textBackground: {
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 10,
    borderRadius: 20,
  },
  sectionText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
