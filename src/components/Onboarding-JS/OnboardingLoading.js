import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import FarmEaseIcon from '../../../assets/FarmEase-Icon.png';

const Loading = () => {
  const navigation = useNavigation(); // Get navigation object using useNavigation hook

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Onboarding1")} style={styles.container}>
      <Image source={FarmEaseIcon} style={styles.image} />
      <Text style={styles.text}>FarmEase</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F6F52',
  },
  text: {
    fontSize: 30,
    fontFamily: 'Inter-Bold',
    color: 'white',
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});

export default Loading;
