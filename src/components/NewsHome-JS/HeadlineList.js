import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Color from './Color';

function HeadlineList({ newsList }) {
  const navigation = useNavigation();

  // Filter the newsList to include only items with a non-null urlToImage
  // and skip the first 3 items
  const validNewsList = newsList
    .filter(item => item.urlToImage)
    .slice(3); // Skip the first 3 items

  return (
    <View>
      <FlatList
        data={validNewsList} // Use the modified list here
        scrollEnabled = {false} 
        renderItem={({ item }) => (
          <View>
            <View style={{ borderBottomColor: Color.gray, borderBottomWidth: 1, marginTop: 10, marginLeft: -20 }}></View>
            <TouchableOpacity onPress={() => navigation.navigate('ReadNews', { news: item })} style={{ marginTop: 15, display: 'flex', flexDirection: 'row' }}>
              
              {item.urlToImage ? (
                <Image source={{ uri: item.urlToImage }} 
                style={{ width: 130, height: 130, borderRadius: 10 }}/>
              ) : (
                // Optional: Render a placeholder image or View here if there's no image URL
                <View style={{ width: 130, height: 130, borderRadius: 10, backgroundColor: Color.lightGray }} />
              )}

              <View style={{ width: 215, marginLeft: 10 }}>
                <Text numberOfLines={4} style={{ fontSize: 18, fontWeight: '800' }}>{item.title}</Text>
                <Text style={{ color: Color.primary, textAlign: 'right', marginTop: 18, marginRight: 10 }}>~{item?.source?.name}</Text>
              </View>

            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default HeadlineList;
