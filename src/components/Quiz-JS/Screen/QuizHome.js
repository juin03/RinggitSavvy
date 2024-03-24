import React from 'react';
import { StyleSheet, TouchableHighlight,  Text, View, Image } from 'react-native';
import Button from '../Components/Button';

const QuizHome = ({navigation}) => {

  const onPressButton = () => {
    console.log('Start button is pressed!');
    navigation.navigate('Quiz');
  }

  return (
    <View style={styles.container}>
      <Text style = {styles.title}> Risk Tolerance Assessment</Text>
      <Text style = {styles.subtitle}>RinggitSavvy</Text>
      <Image style = {styles.image}
            source={require('../../../../assets/Quiz/riskTolerance.png')} />
      <Text style = {styles.text} >This assessment is provided solely for reference and illustrative purposes and should not be considered as investment advice</Text>
      
      <Button onPress={onPressButton} title="Start" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1, 
    alignItems: 'center',
  },

  title: {
    fontSize: 26,
    fontFamily: 'Inter-Bold',
    // fontFamily: "outfit",
    color: '#406882',
    marginTop: 160,
  },

  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#1A374D',
    marginTop: 10,
  },

  image: {
    width: 236,
    height: 236,
    marginTop: 70,
  },

  text: {
    fontSize: 13,
    color: '#000000',
    marginTop: 70,
    textAlign: 'center',
    opacity: 0.3,
    fontStyle: 'italic',
    width: 300,
  },


  });



export default QuizHome; 