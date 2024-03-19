import React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';

const Button = ({ onPress, title, style }) => {
  return (
    <TouchableHighlight style={[styles.button, style]} onPress={onPress} underlayColor="">
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6998AB',
        padding: 15,
        borderRadius: 30,
        width: 350,
        alignItems: 'center',
        marginTop: 20, 
      },
    
      buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
      },
  });
  
  export default Button;