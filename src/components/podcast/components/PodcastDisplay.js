import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const PodcastDisplay = ({ onPress,  imageSource, podcastName , isSmallText}) => {

  return (
    
    <View style={styles.albumContainer}>
      <View style={styles.albumWrapper}>
        <TouchableOpacity onPress={onPress}>
          <Image source={imageSource} style={styles.podcastAlbum} />
          <AntDesign name="playcircleo" size={30} color="white" style={styles.playIcon} />
        </TouchableOpacity>
        <Text style={{ ...styles.albumName, fontSize: isSmallText ? 12 : styles.albumName.fontSize }}> {podcastName} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    
      albumContainer: {
        // backgroundColor: '#555555',
        flexDirection: 'row',
      },
    
    
      podcastAlbum: {
        width: 100,
        height: 100,
        borderRadius: 10,
        opacity: 0.75,
      },
      
      albumName: {
        color: '#FFFFFF',
        fontSize: 14,
        marginTop: 10,
        fontWeight: 'bold',
      },

      playIcon: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -15 }, { translateY: -15 }], 
      },

      albumWrapper: {
        width: 100, 
        height: 150,
        marginRight: 15,
      },
});

export default PodcastDisplay;