import React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';

const OptionButton = ({ onPress, title, style, textStyle }) => {
  return (
    <TouchableHighlight style={[styles.button, style]} onPress={onPress} underlayColor="#406882">
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableHighlight>
  );
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 15,
        width: 350,
        alignItems: 'left',
        marginTop: 20, 
        borderColor: '#B1D0E0',
        borderWidth: 2,
      },
    
      buttonText: {
        textAlign: 'left',
        color: '#4D4D4D',
        fontSize: 18,
        fontFamily: 'Inter-Normal',
      },
  });
  
  export default OptionButton;