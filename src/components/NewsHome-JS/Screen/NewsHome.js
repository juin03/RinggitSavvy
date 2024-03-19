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
        <Text style={styles.appName}>Ting Juin news</Text>
        <Ionicons name="notifications-outline" size={25} color="black" />
      </View>

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
  },
  appName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Color.primary,
  }
});

export default NewsHome; // Ensure correct export statement
