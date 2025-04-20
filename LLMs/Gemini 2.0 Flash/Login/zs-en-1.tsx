import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with:', username, password);
  };

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    console.log('Forgot password pressed');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <Text style={styles.title}>Log In</Text>

        <TextInput
          style={styles.input}
          placeholder="Username/Email"
          value={username}
          onChangeText={setUsername}
          accessibilityLabel="Username or Email"
          accessibilityHint="Enter your username or email address"
           //accessibilityRole="textbox" alucinação de valor inválido para a propriedadeaccessibilityRole="textbox"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          accessibilityLabel="Password"
          accessibilityHint="Enter your password"
           //accessibilityRole="textbox" alucinação de valor inválido para a propriedadeaccessibilityRole="textbox"
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin} accessibilityLabel="Log In" accessibilityRole="button">
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.forgotPasswordButton}
          onPress={handleForgotPassword}
          accessibilityLabel="Forgot Password"
          accessibilityRole="button"
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333', // Sufficient contrast
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333', // Sufficient contrast
  },
  button: {
    backgroundColor: '#007AFF', // Example primary color
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    minHeight: 48, // Minimum touch target size
    justifyContent: 'center',

  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordButton: {
    marginTop: 15,
    alignItems: 'center',
    minHeight: 48, // Minimum touch target size
    justifyContent: 'center',

  },
  forgotPasswordText: {
    color: '#007AFF',
    fontSize: 16,
  },
});

export default LoginScreen;