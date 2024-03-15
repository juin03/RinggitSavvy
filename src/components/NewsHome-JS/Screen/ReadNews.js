import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';
import Color from '../Color';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Share } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

function ReadNews() {
  const news = useRoute().params.news;
  const navigation = useNavigation();
  const shareNews =() => {

    Share.share({
      message: `*${news.title}*\n\nRead More: ${news.url}`,
    });

  }

  useEffect(() => {
    console.log(news);
  }, []); 

    // Function to format the date and time
    const formatDate = (dateTimeString) => {
      const date = new Date(dateTimeString);
      const options = { day: '2-digit', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
      return date.toLocaleString('en-US', options);
    };

    // Function to remove the date from news.content
  const formatNewsContent = (content) => {
    const startIndex = content.indexOf('\r\n') + 2; // +2 to skip over the '\r\n' itself
    return content.substring(startIndex);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>
      <View> 
        <View style={{marginTop:10, marginBottom:10, display:'flex', flexDirection:'row', justifyContent:'space-between'}}>

          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Ionicons name="chevron-back-sharp" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>shareNews()}>
            <Entypo name="share" size={24} color="black" />
          </TouchableOpacity>

        </View>
        <Image source={{ uri: news.urlToImage }} style={{width:'100%', height:300, borderRadius:15}}/>

        <Text style={{marginTop:10,fontSize:22, fontWeight:'bold'}}>{news.title}</Text>

        <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
          {/* <Text style={{marginTop:10,color:Color.primary}}>{news.source.name}</Text> */}
          <Text style={{ marginTop: 10, color: Color.primary }}>{formatDate(news.publishedAt)}</Text>
        </View>

        <Text style={{marginTop:10,fontSize:16, color:Color.gray, lineHeight:30}}>{news.description}</Text>
        <Text style={{marginTop:10,fontSize:16, color:Color.gray, lineHeight:30, marginBottom:20}}>{formatNewsContent(news.content)}</Text>
        <Button style={{marginBottom: 50, color: Color.primary, fontSize:16, fontWeight:'bold' }} 
                        title="Read More"  onPress={() => WebBrowser.openBrowserAsync(news.url)}></Button>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  }
});

export default ReadNews;
