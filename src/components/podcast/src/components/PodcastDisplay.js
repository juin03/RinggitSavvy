import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const PodcastDisplay = ({title}) => {
  const navigation = useNavigation();

  return (
    <View >
        <View style={styles.podcastContainer}>
            <Text style={styles.podcastTitle}>{title}</Text>
        </View>


      <ScrollView horizontal>
        <View style={styles.albumContainer}>
                <TouchableOpacity style={styles.touchableStyle}>
                    <Image source={require('../../assets/podcast1.png')} style={styles.podcastAlbum} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableStyle}>
                    <Image source={require('../../assets/podcast2.png')} style={styles.podcastAlbum} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableStyle} onPress={() => navigation.navigate("PodcastPlay")}>
                    <Image source={require('../../assets/podcast3.png')} style={styles.podcastAlbum} />
                </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    podcastContainer: {

        // backgroundColor: '#777777',
        marginTop: 30,
        marginBottom: 20,
      },
    
      albumContainer: {
        // backgroundColor: '#555555',
        flexDirection: 'row',
        height: 111,
        marginLeft: 30,
      },
    
    
      podcastAlbum: {
        width: 136,
        height: 111,
        borderRadius: 15,
      },
      
      podcastTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginLeft: 30,
      },

      touchableStyle: {
        marginRight: 10,
      },
});

export default PodcastDisplay; 