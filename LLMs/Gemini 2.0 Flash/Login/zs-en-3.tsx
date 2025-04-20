import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
} from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    console.log('Logging in with:', username, password);
  };

  const handleForgotPassword = () => {
    // Implement forgot password logic here
    console.log('Forgot password pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title} accessibilityRole="header" aria-level="1">
        Log In
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label} accessibilityLabel="Username or Email">
          Username or Email
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter username or email"
          value={username}
          onChangeText={setUsername}
          accessibilityLabel="Username or Email input"
          accessibilityHint="Enter your username or email address"
          //accessibilityRole="textbox" alucinação de valor inválido para a propriedade
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label} accessibilityLabel="Password">
          Password
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          accessibilityLabel="Password input"
          accessibilityHint="Enter your password"
        //  accessibilityRole="textbox"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin} accessibilityRole="button" accessibilityLabel="Log In">
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgotPasswordButton}
        onPress={handleForgotPassword}
        accessibilityRole="button"
        accessibilityLabel="Forgot Password"
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff', // White background for good contrast
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Dark text for good contrast
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 50, // Adequate touch target size
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF', // Standard blue button
    paddingVertical: 15, // Adequate touch target size
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordButton: {
    marginTop: 15,
    alignItems: 'center',
    paddingVertical: 12, //Adequate touch target size
  },
  forgotPasswordText: {
    color: '#007AFF',
    fontSize: 16,
  },
});

export default LoginScreen;