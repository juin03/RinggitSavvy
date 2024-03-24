import React from 'react';
import {View, StyleSheet, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import ProgressBar from 'react-native-progress/Bar';
import { useNavigation } from '@react-navigation/native';

const PodcastPlaying = () => {

  return (
    <View style= {styles.container} >
      <View style={styles.menubar}>
        {/* <Ionicons name="arrow-back" size={26} color="white" /> */}
        <Feather name="bookmark" size={26} color="white" />
      </View>
      <View style ={styles.seriesContainer}>
        <Text style ={styles.seriesText}>
           The Big Five Podcast
        </Text>
      </View>
      <View style= {styles.albumContainer}>
        <Image source={require('../../../../assets/Podcast/podcast3.png')} style={styles.podcastAlbum} ></Image>
      </View>

      <View style = {styles.TitleContainer}> 
        <Text style ={styles.Title}>Odeon Capital Conversation</Text>
        <Text style = {styles.Author}>Odeon Conversations</Text>
      </View>
      <View style ={styles.progressBarContainer}>
        <ProgressBar progress={0.3} width={300} color={'#6B8A9E'} height={1} />
      </View>
      <View style ={styles.playContainer}>
        <FontAwesome name="step-backward" size={24} color="white" />
        <FontAwesome name="pause" size={24} color="white" />
        <FontAwesome name="step-forward" size={24} color="white" />
      </View>
    </View>
  );
}

export default PodcastPlaying;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1A374D'
  },

  menubar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // justifyContent: 'space-between',
    marginTop: 50,
    width: 350,
    // backgroundColor: '#888896'
  },

  seriesContainer : {
    backgroundColor: '#7995A7',
    marginTop: 30,
    width: 250,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },

  seriesText :{
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '300'
  },

  albumContainer: {
    // backgroundColor: '#FFFFFF',
    flex: 0.8,
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },

  podcastAlbum: {
    width: 320,
    height: 320,
  },

  TitleContainer: {
    // backgroundColor: '#000000',
    alignItems: 'center',
    width: 320,
    borderBottomWidth: 1,
    borderBottomColor: '#6B8A9E',
  },

  Title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    margin: 10,
  },

  Author : {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 20,
  },

  progressBarContainer :{
    backgroundColor: '#FFFFFF',
    marginTop: 30,
  },

  playContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    width: 150,
  },


});
