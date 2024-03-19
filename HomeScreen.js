import React from 'react';
import { View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Onboarding"
        onPress={() => navigation.navigate('OnboardingNavigation')}
      />
      <Button
        title="News"
        onPress={() => navigation.navigate('NewsHomeNavigator')}
      />
      <Button
        title="Chatbot"
        onPress={() => navigation.navigate('ChatbotNavigation')}
      />
      <Button
        title="BiteSizeLearning"
        onPress={() => navigation.navigate('BiteSizeNavigation')}
      />
      <Button
        title="Community"
        onPress={() => navigation.navigate('Route')}
      />

    </View>
  );
}
