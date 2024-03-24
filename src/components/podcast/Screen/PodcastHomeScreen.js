import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, useNavigation} from 'react-native';
import TitleBar from '../components/Titlebar';
import Podcast from '../components/PodcastDisplay';
import PodcastPlaylist from '../components/PodcastPlaylist';
import PlaylistSection from '../components/PlaylistSection';
import { ScrollView } from 'react-native-gesture-handler';

const PodcastHomeScreen = () => {

  return (
    <ScrollView style={styles.container}>
      <TitleBar />
      <View style={styles.PodcastContainer}>
        <PlaylistSection SectionTitleText="Podcast" ButtonText="View All" />
        <ScrollView horizontal={true}>
          <View style={{ flexDirection: 'column' }}>
            <View style ={{flexDirection:'row'}}>
              <Podcast
                imageSource={require('../../../../assets/Podcast/podcast9.png')} 
                podcastName="#HashtagFinance" 
                isSmallText={true}/>
              <Podcast
                imageSource={require('../../../../assets/Podcast/podcast10.png')} 
                podcastName="WealthVest: The Weekly Bull&Bear"  
                isSmallText={true}/>
              <Podcast
                imageSource={require('../../../../assets/Podcast/podcast11.png')} 
                podcastName="The Investment Podcast"  
                isSmallText={true}/>
              <Podcast
                imageSource={require('../../../../assets/Podcast/podcast12.png')} 
                podcastName="Eurizon SLJ Capital"  />
            </View>
            <View style ={{flexDirection:'row'}}>
            <Podcast             
              imageSource={require('../../../../assets/Podcast/podcast13.png')} 
              podcastName="Markets ConversatION"  />
            <Podcast             
              imageSource={require('../../../../assets/Podcast/podcast14.png')} 
              podcastName="Bid Out with Peter Haynes"
              isSmallText={true}  />
            <Podcast             
              imageSource={require('../../../../assets/Podcast/podcast15.png')} 
              podcastName="Private Capital Call"  />
            <Podcast             
              imageSource={require('../../../../assets/Podcast/podcast16.png')} 
              podcastName="Capital Market FinTech Forum" />                            
            </View>

          </View>
        </ScrollView>
      </View>

      <PlaylistSection SectionTitleText="Podcast Playlist" ButtonText="View All" />
        <ScrollView style={{flexDirection:'row'}} horizontal={true}>
          <View>
          <PodcastPlaylist  
            imageSource={require('../../../../assets/Podcast/podcast1.png')} 
            podcastName="Inside Market"  
            podcastDescription="Jackson Square Capital" />
          <PodcastPlaylist 
            imageSource={require('../../../../assets/Podcast/podcast2.png')} 
            podcastName="Waters Wavelength" 
            podcastDescription="Wei-Shen Wong" />
          <PodcastPlaylist
            imageSource={require('../../../../assets/Podcast/podcast3.png')} 
            podcastName="Odeon Capital Conversation" 
            isSmallText={true}
            podcastDescription="Odeon Conversations" />
          <PodcastPlaylist
            imageSource={require('../../../../assets/Podcast/podcast4.png')} 
            podcastName="IFRS Talks" 
            podcastDescription="PwC's Global IFRS" />
          </View>
          <View>
          <PodcastPlaylist  
            imageSource={require('../../../../assets/Podcast/podcast5.png')} 
            podcastName="Alt Goes Mainstream"  
            isSmallText={true}
            podcastDescription="Michael" 
          />
          <PodcastPlaylist 
            imageSource={require('../../../../assets/Podcast/podcast6.png')} 
            podcastName="Talk Money to Me" 
            podcastDescription="Candice / Felicity" />
          <PodcastPlaylist
            imageSource={require('../../../../assets/Podcast/podcast7.png')} 
            podcastName="Inside Market" 
            podcastDescription="Jackson Square Capital" />
          <PodcastPlaylist
            imageSource={require('../../../../assets/Podcast/podcast8.png')} 
            podcastName="Potomac Perspective" 
            podcastDescription="Brian Gardner" />
          </View>
        </ScrollView>
      </ScrollView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A374D'
  },

  PodcastContainer: {
    // backgroundColor: '#888888',
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
  },

 
  PlaylistContainer : {
    // backgroundColor: '#F34112',
    flex: 0.7,
  },



});

export default PodcastHomeScreen;
