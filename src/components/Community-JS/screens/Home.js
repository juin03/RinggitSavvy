import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from expo vector icons
import Posts from './../data/Posts';
import ShowPosts from '../components/ShowPosts';

export default function Home() {
  const navigation = useNavigation(); // Use useNavigation hook to get navigation object
  
  const handleButtonPress = () => {
    navigation.navigate(Screens.POST); // Navigate to the target screen
  };

  return (
    <View style={styles.container}>
      <FlatList data={Posts} showsVerticalScrollIndicator={false} renderItem={({ item }) => <ShowPosts item={item} />} />
      <TouchableOpacity style={styles.floatingButton} onPress={handleButtonPress}>
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 15,
    backgroundColor: '#B1D0E0',
    borderRadius: 30,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
