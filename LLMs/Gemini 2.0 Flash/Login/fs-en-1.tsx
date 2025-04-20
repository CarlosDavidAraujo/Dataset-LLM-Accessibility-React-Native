import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Text nativeID="emailLabel" style={styles.label}>
        Email or Username
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="emailLabel"
        keyboardType="email-address"
        placeholder="Enter email or username"
        textContentType="username"
        autoComplete="username"
      />

      <Text nativeID="passwordLabel" style={styles.label}>
        Password
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="passwordLabel"
        secureTextEntry
        placeholder="Enter password"
        textContentType="password"
        autoComplete="password"
      />

      <TouchableOpacity style={styles.button} accessibilityLabel="Log in to your account">
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotPasswordButton} accessibilityLabel="Forgot password? Reset your password.">
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF', // White Background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000', // Black Text
    textAlign: 'center',
  },
  label: {
    marginBottom: 5,
    color: '#000000', // Black Text
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: '#000000' // Black Text
  },
  button: {
    backgroundColor: '#007AFF', // Blue Background
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 5,
    minWidth: 48,
    minHeight: 48,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // White Text
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotPasswordButton: {
    marginTop: 10,
    alignItems: 'center',
    minWidth: 48,
    minHeight: 48,
    justifyContent: 'center',
    padding: 8,
  },
  forgotPasswordText: {
    color: '#007AFF', // Blue Text
  },
});

export default LoginScreen;