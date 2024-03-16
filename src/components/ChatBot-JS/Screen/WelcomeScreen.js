import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

function WelcomeScreen({navigation}) {
  return (
    <TouchableOpacity style={{display:'flex', flex:1, justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.navigate('HomeScreen')}>
      <View>
        <Text>Welcome to the Chatbot</Text>
        <Text>Welcome to the Chatbot</Text>
      </View>
    </TouchableOpacity>
  )
}

export default WelcomeScreen
