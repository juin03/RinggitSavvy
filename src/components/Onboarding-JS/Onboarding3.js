import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Onboarding3Image from '../../../assets/Onboarding/Onboarding3-Image.png';
import Onboarding3Loading from '../../../assets/Onboarding/Onboarding3-Loading.png';


const Onboarding3 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Analyse income projections and receive farming report</Text>
      <Image source={Onboarding3Image} style={styles.image1} />
      <Image source={Onboarding3Loading} style={styles.image2} />
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("NewsHomeNavigator")}
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
  image1: {
    width: 289,
    height: 275,
    position: 'absolute', 
    top: 220, 
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

export default Onboarding3;