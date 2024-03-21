import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Color from './Color';

function CategoryTextSlider({selectCategory}) {
  const [active, setActive] = useState(1);
  const categoryList = [
    {
      id: 1,
      name: 'Latest ⚡'
    },
    {
      id: 2,
      name: 'World 🌎'
    },
    {
      id: 3,
      name: 'Business 💵'
    },
    {
      id: 4,
      name: 'Sports 🏃🏻'
    },
    {
      id: 5,
      name: 'Life 🌴'
    },
    {
      id: 6,
      name: 'Movie 🎥'
    },
  ]; 

  const onCategoryClick = (id) => {
    setActive(id);
  }

  return (
    <View style={{ marginTop: 20, marginBottom: 8 }}>
      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {onCategoryClick(item.id); selectCategory(item.name)}}>
            <Text style={item.id === active ? styles.selectText : styles.unselectText} >{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  unselectText: {
    marginRight: 14,
    fontSize: 18,
    fontWeight: '300',
    color: "#8194FC",
    backgroundColor: "#DDE7FF",
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 0,
  },
  selectText: {
    marginRight: 14,
    fontSize: 18,
    fontWeight: '300',
    color: "white",
    backgroundColor: "#3353DC",
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 0,
  }
});

export default CategoryTextSlider;
