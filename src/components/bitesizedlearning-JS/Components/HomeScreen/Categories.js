import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getCategories } from "../../Services/index";
import Heading from "../../Components/Heading";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";
import ChapterListByCategoryScreen from "../../Screen/ChapterListByCategory";
export default function Categories() {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();
  //   useEffect(() => {
  //     getCategories();
  //   }, []);
  //   /**
  //    * Get Categories List
  //    */
  //   const getCategories = () => {
  useEffect(() => {
    getCategories().then((resp) => {
      setCategories(resp?.categories);
    });
  }, []);
  return (
    <View style={{ marginTop: 60 }}>
      <Heading text={"Categories"} isViewAll={true} />
      <FlatList
        data={categories}
        numColumns={4}
        renderItem={({ item, index }) =>
          index <= 3 && (
            <TouchableOpacity
              style={styles.container}
              onPress={() =>
                navigation.push("category-list", {
                  category: item.name,
                })
              }
            >
              <View
                style={{
                  ...styles.iconContainer,
                  backgroundColor: "#fdfdfd",
                  borderRadius: 50,
                }}
              >
                <Image
                  source={{ uri: item?.icon?.url }}
                  style={{ width: 30, height: 30 }}
                />
              </View>
              <Text
                style={{
                  fontFamily: "Inter-Medium",
                  marginTop: 10,
                  color: "#fdfdfd",
                }}
              >
                {item?.name}
              </Text>
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: Colors.LIGHT_GRAY,
    padding: 17,
    borderRadius: 99,
  },
});
