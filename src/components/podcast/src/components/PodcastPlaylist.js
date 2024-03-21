import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PodcastPlaylist = ({ imageSource, podcastName, podcastDescription }) => {
    return (
      <View style={styles.Playlist}>
        <Image style={styles.PlaylistImage} source={imageSource} />
        <View style={styles.textContainer}>
          <Text style={styles.PlaylistPodcastName}>{podcastName}</Text>
          <Text style={styles.PlaylistPodcastDescription}>{podcastDescription}</Text>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    Playlist: {
        // backgroundColor: '#000000',
        flexDirection: 'row',
        marginLeft: 30,
      },
    
      PlaylistImage: {
        width: 100,
        height: 100,
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
      },
});

export default PodcastPlaylist;