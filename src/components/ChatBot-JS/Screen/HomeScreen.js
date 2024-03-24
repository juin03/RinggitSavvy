import React, { useState, useRef, useEffect, } from 'react';
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
import { Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScrollView } from 'react-native-gesture-handler';
import { WelcomingMessage } from '../Constant/WelcomingMessage';
import { apiCall } from '../api/openAI';
import { LinearGradient } from 'expo-linear-gradient';


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
      style={{ flex: 1, backgroundColor: 'white'}}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ alignItems: 'center' }}
      scrollEnabled={true}
      keyboardShouldPersistTaps='handled'
    >
      {/* <View style={{ marginTop: 40, backgroundColor: "#406882" }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>Welcome to Chatbot</Text>
      </View> */}
      
      <LinearGradient
        // Linear Gradient props
        colors={['#406882', '#6998AB']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/010/054/157/original/chat-bot-robot-avatar-in-circle-round-shape-isolated-on-white-background-stock-illustration-ai-technology-futuristic-helper-communication-conversation-concept-in-flat-style-vector.jpg',
          }}
          style={{ width: 45, height: 45, borderRadius: 50, marginLeft: 20 }}
        />
        <Text style={styles.headerText}>Ringgit Bot</Text>
      </LinearGradient>



      <ScrollView
        ref={scrollViewRef}
        style={{ height: 590, width: '98%', backgroundColor: 'white', marginTop: 5, borderRadius: 15 }}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((message, index) => {
          const isAssistant = message.role === 'assistant';
          if (!isAssistant) {
            scrollToBottom();
          }
          return (
            <View key={index} ref={message.ref} style={{
              flexDirection: 'row', // Use row direction to place elements side by side
              alignSelf: isAssistant ? 'flex-start' : 'flex-end',
              maxWidth: '90%', // Control the maximum width
              margin: 7,
            }}>
              {isAssistant && (
                <Image
                  source={{
                    uri: 'https://static.vecteezy.com/system/resources/previews/010/054/157/original/chat-bot-robot-avatar-in-circle-round-shape-isolated-on-white-background-stock-illustration-ai-technology-futuristic-helper-communication-conversation-concept-in-flat-style-vector.jpg',
                  }}
                  style={{ width: 30, height: 30, borderRadius: 15, alignSelf: 'flex-start', marginRight: 5 }}
                />
              )}
              <View style={{
                backgroundColor: isAssistant ? "#F5F5F5" : '#B1D0E0',
                borderRadius: 12,
                padding: 10,
                maxWidth: '90%', // Ensure the text container utilizes maximum width
                borderTopLeftRadius: isAssistant ? 0 : 12,
                borderTopRightRadius: isAssistant ? 12 : 0,
              }}>
                <Text>{isAssistant ? parseAndStyleText(message.content) : message.content}</Text>
              </View>
            </View>
          );
        })}


      </ScrollView>

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
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 5,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
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
    // backgroundColor: '#B1D0E0',
    backgroundColor: '#6998AB',
    borderRadius: 5,
  },
  sendButtonText: {
    color: '#ffffff',
  },
});

export default HomeScreen;
