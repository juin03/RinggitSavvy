import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

function WelcomeScreen({navigation}) {
  return (
    <TouchableOpacity style={{paddingTop:100}} onPress={() => navigation.navigate('HomeScreen')}>
      <View>
        <Text>Welcome to the Chatbot</Text>
      </View>
    </TouchableOpacity>
  )
}

export default WelcomeScreen
