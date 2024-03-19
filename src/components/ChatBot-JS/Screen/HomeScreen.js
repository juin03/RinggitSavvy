import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  findNodeHandle,
  ActivityIndicator,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView } from 'react-native-gesture-handler';
import { WelcomingMessage } from '../Constant/WelcomingMessage';
import { apiCall } from '../api/openAI';

function parseAndStyleText(text) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <Text key={index} style={{ fontWeight: 'bold' }}>{part.slice(2, -2)}</Text>;
    } else {
      return part;
    }
  });
}

function HomeScreen() {
  const [messages, setMessages] = useState(WelcomingMessage.map((msg, index) => ({ ...msg, ref: React.createRef() })));
  const [text, setText] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);
  const inputRef = useRef(null);
  const scrollViewRef = useRef(null);

  const sendMessage = async () => {
    if (text.trim()) {
      setText('');
      inputRef.current.blur();
      Keyboard.dismiss();

      const newMessage = { role: 'user', content: text, ref: React.createRef() };
      setMessages([...messages, newMessage]);
      setSendingMessage(true);

      try {
        const response = await apiCall(text);
        const newAssistantMessage = { role: 'assistant', content: response, ref: React.createRef() };
        setMessages(prevMessages => [...prevMessages, newAssistantMessage]);
      } catch (error) {
        console.error(error);
      } finally {
        setSendingMessage(false);
      }
    }
  };

  function scrollToBottom() {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }

  useEffect(() => {
    if (!sendingMessage) {
      const lastUserMessageIndex = messages.slice().reverse().findIndex((message) => message.role === 'user');
      if (lastUserMessageIndex !== -1) {
        const actualIndex = messages.length - 1 - lastUserMessageIndex;
        const lastUserMessageRef = messages[actualIndex].ref;
        if (lastUserMessageRef && lastUserMessageRef.current) {
          lastUserMessageRef.current.measureLayout(
            findNodeHandle(scrollViewRef.current),
            (x, y, width, height) => {
              scrollViewRef.current.scrollTo({ x: 0, y: y, animated: true });
            },
            (error) => {
              console.error(error);
            }
          );
        }
      }
    }
  }, [messages, sendingMessage]);

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ alignItems: 'center' }}
      scrollEnabled={true}
      keyboardShouldPersistTaps='handled'
    >
      <View style={{ marginTop: 40, alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Welcome to Chatbot</Text>
      </View>

      <ScrollView
        ref={scrollViewRef}
        style={{ height: 580, width: '90%', backgroundColor: '#D3D3D3', marginTop: 20, borderRadius: 15 }}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((message, index) => {
  const isAssistant = message.role === 'assistant';
  if (!isAssistant) {
    scrollToBottom();
  }
  return (
    <View key={index} ref={message.ref} style={{
      width: 280,
      backgroundColor: isAssistant ? "#F5F5F5" : '#F0F8FF',
      borderRadius: 12,
      padding: 10,
      margin: 7,
      alignSelf: isAssistant ? 'flex-start' : 'flex-end',
      borderTopLeftRadius: isAssistant ? 0 : 12,
      borderTopRightRadius: isAssistant ? 12 : 0,
    }}>
      <Text>{isAssistant ? parseAndStyleText(message.content) : message.content}</Text>
    </View>
  );
})}

      </ScrollView >

      <View style={styles.inputContainer}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="Type your message here..."
          multiline
          editable={!sendingMessage} // Optionally make input non-editable during sending
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton} disabled={sendingMessage}>
          {sendingMessage ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <Text style={styles.sendButtonText}>Send</Text>
          )}
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  input: {
    height: 40,
    flex: 1,
    maxWidth: 268,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  sendButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  sendButtonText: {
    color: '#ffffff',
  },
});

export default HomeScreen;
