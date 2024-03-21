import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Color from '../Color';
import { Ionicons } from '@expo/vector-icons';
import CategoryTextSlider from '../CategoryTextSlider';
import TopHeadlineSlider from '../TopHeadlineSlider';
import HeadlineList from '../HeadlineList';
import GlobalAPI from '../Services/GlobalAPI';


function NewsHome() {
  const [newsList, setNewsList] = useState([]);
  
  useEffect(() => {
    getTopHeadlines();
    // getNewsByCategory('latest');

  }, [])

  const getNewsByCategory = async (category) => {
    const result = (await GlobalAPI.getByCategory(category)).data;
    setNewsList(result.articles);
  }

  const getTopHeadlines= async () => {
    const result =(await GlobalAPI.getTopHeadlines).data;
    setNewsList(result.articles);
  }
  return (
    <ScrollView>
      <View style={styles.container}>

      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <Text style={styles.appName}>Today's news</Text>
        <View style={{display:'flex', flexDirection:'row', marginTop: 14}}>
          <Ionicons name="notifications-outline" size={28} color="#DDE7FF" style={{ marginRight: 20 }} />
          <Ionicons name="search-outline" size={28} color="#DDE7FF" />
        </View>
      </View>

      <Text style={{ color: 'gray', letterSpacing: 1 }}>Catch up before the day ends</Text>

      <CategoryTextSlider selectCategory={(category)=>getNewsByCategory(category)}/>

      <TopHeadlineSlider newsList={newsList}/>

      <HeadlineList newsList={newsList}/>
    </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 50,
  },
  appName: {
    fontSize: 30,
    fontWeight: '900',
    color: "black",
  }
});

export default NewsHome; // Ensure correct export statement
