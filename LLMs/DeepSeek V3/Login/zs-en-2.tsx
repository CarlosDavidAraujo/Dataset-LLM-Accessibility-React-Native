import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        {/* Email/Username Input */}
        <Text style={styles.label}>Email/Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email or username"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          accessibilityLabel="Email or username input"
          accessibilityHint="Enter your email address or username"
        />

        {/* Password Input */}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          accessibilityLabel="Password input"
          accessibilityHint="Enter your password"
        />

        {/* Log In Button */}
        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="Log in button"
          accessibilityHint="Press to log in with your credentials"
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        {/* Forgot Password Button */}
        <TouchableOpacity
          style={styles.forgotPasswordButton}
          accessibilityLabel="Forgot password button"
          accessibilityHint="Press to reset your password"
          accessibilityRole="button"
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    color: '#333', // Sufficient contrast for text
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
    color: '#000', // Sufficient contrast for text
  },
  button: {
    backgroundColor: '#007AFF', // Sufficient contrast for button background
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff', // Sufficient contrast for button text
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#007AFF', // Sufficient contrast for text
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;