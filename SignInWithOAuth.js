import React, { useState } from "react";
import * as WebBrowser from "expo-web-browser";
import { TouchableOpacity, Text, View, StyleSheet, TextInput, Image } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "./src/components/Community-JS/hooks/useWarmUpBrowser";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import RinggitSavvy from './assets/RinggitSavvyIcon.png';

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressGoogleSignIn = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <LinearGradient
      colors={['#B1D0E0', '#6998AB', '#406882', '#1A374D']}
      style={styles.container}
    >
      <Image source={RinggitSavvy} style={styles.logo} />
      <Text style={styles.title}>Ringgit Savvy</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#cccccc"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#cccccc"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signInButton} onPress={onPressGoogleSignIn}>
          <Ionicons name="logo-google" size={20} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>Sign in with Google</Text>
        </TouchableOpacity>
        <View style={styles.signUpTextContainer}>
          <Text style={styles.signUpText}>Don't have an account? </Text>
          <Text style={[styles.signUpText, styles.signUpLink]}>Sign up here</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 16,
    color: '#333333',
  },
  signInButton: {
    flexDirection: 'row',
    backgroundColor: "#6998AB",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: '100%',
    maxWidth: 300, // Ensures the button isn't too wide on large screens
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    marginLeft: -10, // Adjusts icon position to align it nicely with the text
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  signUpTextContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signUpText: {
    color: '#ffffff',
    fontSize: 14,
  },
  signUpLink: {
    textDecorationLine: 'underline',
  },
});

export default SignInWithOAuth;
