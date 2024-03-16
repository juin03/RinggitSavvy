// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Keyboard,
//   ActivityIndicator,
// } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import * as GoogleGenerativeAI from '@google/generative-ai';

// function parseAndStyleText(text) {
//   const parts = text.split(/(\*\*.*?\*\*)/g);
//   return parts.map((part, index) => {
//     if (part.startsWith('**') && part.endsWith('**')) {
//       return <Text key={index} style={{ fontWeight: 'bold' }}>{part.slice(2, -2)}</Text>;
//     } else {
//       return part;
//     }
//   });
// }

// const GeminiChat = () => {
//   const [messages, setMessages] = useState([]);
//   const [userInput, setUserInput] = useState('');
//   const [loading, setLoading] = useState(false);
//   const scrollViewRef = useRef(null);


//   const API_KEY =  "AIzaSyChuI3jDE5bFxeofD_S9IdH4r2lYi1qXfI";

//   const sendMessage = async () => {
//     if (userInput.trim()) {
//       const userMessage = { role: 'user', content: userInput };
//       setUserInput('');
//       Keyboard.dismiss();
      


//       setMessages([...messages, userMessage]);
//       setLoading(true);

//       // Assuming your API call is similar to the previous sendMessage logic
//       const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
//       const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//       const prompt = userInput;
//       const result = await model.generateContent(prompt);
//       const response = result.response;
//       const text = await response.text();
      
//       const newAssistantMessage = { role: 'assistant', content: text };
//       setMessages((prevMessages) => [...prevMessages, newAssistantMessage]);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     scrollViewRef.current?.scrollToEnd({ animated: true });
//   }, [messages]);

//   return (
//     <KeyboardAwareScrollView
//       style={{ flex: 1 }}
//       resetScrollToCoords={{ x: 0, y: 0 }}
//       contentContainerStyle={{ flexGrow: 1 }}
//       scrollEnabled={true}
//       keyboardShouldPersistTaps='handled'
//     >
//       <View style={{ flexGrow: 1, marginTop: 20, alignItems: 'center' }}>
//         {/* Your message container */}
//         <View style={{ flexGrow: 1, width: '100%' }}>
//           {messages.map((message, index) => (
//             <View key={index} style={{
//               backgroundColor: message.role === 'assistant' ? '#F5F5F5' : '#F0F8FF',
//               borderRadius: 12,
//               padding: 10,
//               marginVertical: 5,
//               marginRight: message.role === 'assistant' ? 'auto' : 10,
//               marginLeft: message.role === 'assistant' ? 10 : 'auto',
//               maxWidth: '80%',
//             }}>
//               <Text>{message.role === 'assistant' ? parseAndStyleText(message.content) : message.content}</Text>
//             </View>
//           ))}
//         </View>

//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             onChangeText={setUserInput}
//             value={userInput}
//             placeholder="Type your message here..."
//             editable={!loading}
//           />
//           <TouchableOpacity onPress={sendMessage} style={styles.sendButton} disabled={loading}>
//             {loading ? (
//               <ActivityIndicator size="small" color="#ffffff" />
//             ) : (
//               <Text style={styles.sendButtonText}>Send</Text>
//             )}
//           </TouchableOpacity>
//         </View>
//       </View>
//     </KeyboardAwareScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   inputContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginRight: 10,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
//   sendButton: {
//     padding: 10,
//     backgroundColor: '#007bff',
//     borderRadius: 5,
//   },
//   sendButtonText: {
//     color: '#ffffff',
//   },
// });

// export default GeminiChat;
