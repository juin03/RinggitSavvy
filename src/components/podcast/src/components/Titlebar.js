import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const TitleBar = () => {
  return (
    <View style={styles.Title_container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image style={styles.image} source={require('../../assets/ringgitSavvyIcon.png')} />
        <Text style={styles.Title_text}>RinggitSavvy • Podcast</Text>
      </View>
      <FontAwesome name="search" size={24} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({

    
      Title_container : {
        width: '90%',
        marginLeft: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
      },
      
      Title_text : {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
      },
      
      image: {
        width: 24,
        height: 24,
        marginRight: 3,
      },
    
});

export default TitleBar;