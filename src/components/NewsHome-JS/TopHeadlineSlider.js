import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Color from './Color';

function TopHeadlineSlider({ newsList }) {
  
  const navigation = useNavigation();
  
  // Filter the newsList to include only items with a non-null urlToImage
  const validNewsList = newsList.filter(item => item.urlToImage);

  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={validNewsList} // Use the filtered list here
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => navigation.navigate('ReadNews', { news: item })}
            style={{ width: Dimensions.get('screen').width * 0.78, marginRight: 15 }}>
              <Image source={{ uri: item.urlToImage }} 
                style={{ height: Dimensions.get('screen').width * 0.75, borderRadius: 10 }}/>
              <Text numberOfLines={2} style={{ marginTop: 10, fontSize: 20, fontWeight: '900' }}>{item.title}</Text>
              <Text style={{ marginTop: 5, color: Color.primary, textAlign: 'right', paddingRight: 15 }}>~{item?.source?.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default TopHeadlineSlider;
