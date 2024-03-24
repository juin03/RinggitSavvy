import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Onboarding2Image from '../../../assets/Onboarding/Onboarding2-Image.png';
import Onboarding2Loading from '../../../assets/Onboarding/Onboarding2-Loading.png';

const Onboarding2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={Onboarding2Image} style={styles.image1} />
      <Image source={Onboarding2Loading} style={styles.image2} />
      <View style={styles.overlay}>
        <Text style={styles.text1}>Conduct resource forecast and get real-time assistance</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate("Onboarding3")}
        >
          <Text style={styles.buttonText}>Next  &gt;</Text>
        </TouchableOpacity>
      </View>
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
  image1: {
    width: 370,
    height: 370,
    position: 'absolute', 
    top: 170, 
  },
  image2: {
    marginTop: 80,
    marginBottom: 40,
    position: 'absolute', 
    top: 500, 
  },
  overlay: {
    position: 'absolute', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontSize: 22,
    fontWeight: 'regular',
    color: '#18181B',
    textAlign: 'center',
    width: 300,
    top: -200,
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
    marginTop: 20,
    top: 225, 
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Inter-Bold',
  },
});

export default Onboarding2;
