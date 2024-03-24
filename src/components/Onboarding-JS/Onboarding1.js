import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Onboarding1Image from '../../../assets/Onboarding/Onboarding1-Image.png';
import Onboarding1Loading from '../../../assets/Onboarding/Onboarding1-Loading.png';


const Onboarding1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Crop Management Learning Platform</Text>
      <Text style={styles.text2}>FarmEase</Text>
      <Image source={Onboarding1Image} style={styles.image1} />
      <Image source={Onboarding1Loading} style={styles.image2} />
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("Onboarding2")}
      >
        <Text style={styles.buttonText}>Next  &gt;</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text1: {
    fontSize: 18,
    fontWeight: 'regular',
    color: '#18181B',
    paddingBottom: 10,
  },
  text2: {
    fontSize: 30,
    fontFamily: 'Inter-Bold',
    color: '#739072',
    paddingBottom: 46,
  },
  image2: {
    marginTop: 80,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#739072',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    width: 335,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Inter-Bold',
    
  },
});

export default Onboarding1;