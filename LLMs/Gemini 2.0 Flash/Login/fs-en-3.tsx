import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Text nativeID="usernameLabel" style={styles.label}>
        Username or Email
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="usernameLabel"
        autoComplete="username"
        textContentType="username"
        placeholder="Enter username or email"
      />

      <Text nativeID="passwordLabel" style={styles.label}>
        Password
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="passwordLabel"
        secureTextEntry={true}
        placeholder="Enter password"
      />

      <TouchableOpacity style={styles.button} accessibilityLabel="Log in to your account">
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotPasswordButton} accessibilityLabel="Forgot password? Tap here to reset it.">
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000', // Good Contrast
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333333', // Good Contrast
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    color: '#000000' // good contrast.
  },
  button: {
    backgroundColor: '#007AFF', // Example Blue
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    minWidth: 48,
    minHeight: 48,
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF', // Good Contrast
    fontSize: 16,
  },
  forgotPasswordButton: {
    minWidth: 48,
    minHeight: 48,
    padding: 10,
    alignSelf: 'flex-start',
  },
  forgotPasswordText: {
    color: '#007AFF', // Example Blue
    fontSize: 14,
  },
});

export default LoginScreen;