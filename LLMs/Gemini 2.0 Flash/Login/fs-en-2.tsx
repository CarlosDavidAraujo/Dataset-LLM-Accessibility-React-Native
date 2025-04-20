import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Text nativeID="usernameLabel" style={styles.label}>
        Username/Email
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
    color: '#000000', // Good contrast
  },
  label: {
    marginBottom: 5,
    color: '#333333', // Good contrast
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    color: '#000000', // Good contrast
  },
  button: {
    backgroundColor: '#007AFF', // Good contrast
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    minWidth: 48,
    minHeight: 48,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // Good contrast
    fontSize: 16,
  },
  forgotPasswordButton: {
    marginTop: 10,
    alignItems: 'center',
    minWidth: 48,
    minHeight: 48,
    padding: 8, // padding for better touch target size.
    justifyContent: 'center',

  },
  forgotPasswordText: {
    color: '#007AFF', // Good contrast
  },
});

export default LoginScreen;