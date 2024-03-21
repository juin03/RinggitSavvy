import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import TitleBar from '../components/Titlebar';
import Podcast from '../components/podcastDisplay';
import PodcastPlaylist from '../components/PodcastPlaylist';

const PodcastHomeScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <TitleBar />
      <View style={styles.PodcastContainer}>
      <Podcast title='Popular on this week' navigation={navigation} />
      </View>

      <View style = {styles.PlaylistContainer}>
        <View style = {styles.PlaylistTopContainer}>
          <Text style = {styles.PlaylistTitle}>PICKS FOR YOU</Text>
          <TouchableOpacity style={styles.Playbutton}>
            <Text style ={{color: '#FFFFFF'}}>Play all</Text>
          </TouchableOpacity>
        </View>

        <View>
        <PodcastPlaylist 
          imageSource={require('../../assets/podcast1.png')} 
          podcastName="Inside Market"  
          podcastDescription="Jackson Square Capital" />
        <PodcastPlaylist 
          imageSource={require('../../assets/podcast2.png')} 
          podcastName="Inside Market" 
          podcastDescription="Jackson Square Capital" />
        <PodcastPlaylist
          imageSource={require('../../assets/podcast3.png')} 
          podcastName="Inside Market" 
          podcastDescription="Jackson Square Capital" />
        <PodcastPlaylist
          imageSource={require('../../assets/podcast1.png')} 
          podcastName="Inside Market" 
          podcastDescription="Jackson Square Capital" />
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#1A374D'
  },

  PodcastContainer: {
    alignItems: 'center',
    // backgroundColor: '#888888',
    flex: 0.3,
  },

  PlaylistTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 30,
  },

  PlaylistTopContainer: {
    // backgroundColor:'#665421',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },

  Playbutton: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    padding: 5,
    borderRadius: 30,
    width: 100,
    alignItems: 'center',
  },

  PlaylistContainer : {
    // backgroundColor: '#F34212',
    flex: 0.7,
  },



});

export default PodcastHomeScreen;
