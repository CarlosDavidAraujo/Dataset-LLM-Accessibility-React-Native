import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Username/Email Field */}
      <Text nativeID="usernameLabel" style={styles.label}>
        Username/Email
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="usernameLabel"
        accessibilityLabel="Enter your username or email"
        autoComplete="username"
        textContentType="username"
        placeholder="Enter username or email"
        placeholderTextColor="#666"
      />

      {/* Password Field */}
      <Text nativeID="passwordLabel" style={styles.label}>
        Password
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="passwordLabel"
        accessibilityLabel="Enter your password"
        autoComplete="password"
        textContentType="password"
        placeholder="Enter password"
        placeholderTextColor="#666"
        secureTextEntry
      />

      {/* Log In Button */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Log in to your account"
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      {/* Forgot Password Button */}
      <TouchableOpacity
        style={styles.forgotPasswordButton}
        accessibilityLabel="Forgot your password? Reset it here"
        accessibilityRole="button"
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  label: {
    fontSize: 16,
    color: '#000000', // High contrast with white background
    marginBottom: 8,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    color: '#000000', // High contrast with white background
    backgroundColor: '#FFFFFF',
  },
  button: {
    minWidth: '100%',
    minHeight: 48,
    backgroundColor: '#003366',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF', // High contrast with dark blue background
    fontWeight: 'bold',
  },
  forgotPasswordButton: {
    minWidth: '100%',
    minHeight: 48,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#003366', // High contrast with white background
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;