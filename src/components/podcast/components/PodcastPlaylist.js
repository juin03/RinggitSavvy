import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const PodcastPlaylist = ({ imageSource, podcastName, podcastDescription, isSmallText }) => {
    return (
      <View horizontal={true}>
        <TouchableOpacity style={styles.Playlist}>
          <Image style={styles.PlaylistImage} source={imageSource} />
          <View style={styles.textContainer}>
          <Text style={{...styles.PlaylistPodcastName, fontSize: isSmallText ? 16 : styles.PlaylistPodcastName.fontSize}}>{podcastName}</Text>
            <Text style={styles.PlaylistPodcastDescription}>{podcastDescription}</Text>
          </View>
          </TouchableOpacity>
      </View>
    );
  }

const styles = StyleSheet.create({
    Playlist: {
        flexDirection: 'row',
        marginLeft: 30,
        width: 270,
        // backgroundColor: '#555555',
      },
    
      PlaylistImage: {
        width: 70,
        height: 70,
        borderRadius: 15,
        marginBottom: 20,
      },
    
      PlaylistPodcastName: {
        fontSize: 20,
        color: '#FFFFFF',
        marginTop: 10,
      },
    
      PlaylistPodcastDescription: {
        color: '#FFFFFF',
        opacity: 0.5,
      },
    
      textContainer: {
        flexDirection: 'column',
        marginLeft: 20,
        // backgroundColor:'#753663'
      },
      
});

export default PodcastPlaylist;