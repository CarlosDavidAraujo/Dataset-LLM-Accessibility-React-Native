import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      
      {/* Username/Email Input Field */}
      <Text nativeID="usernameLabel" style={styles.label}>
        Username or Email
      </Text>
      <TextInput
        accessibilityLabelledBy="usernameLabel"
        style={styles.input}
        placeholder="Enter your username or email"
        placeholderTextColor="#888"
        textContentType="emailAddress"
        autoComplete="email"
      />

      {/* Password Input Field */}
      <Text nativeID="passwordLabel" style={styles.label}>
        Password
      </Text>
      <TextInput
        accessibilityLabelledBy="passwordLabel"
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#888"
        secureTextEntry
        textContentType="password"
        autoComplete="password"
      />
      
      {/* Login Button */}
      <TouchableOpacity style={styles.button} accessibilityLabel="Log in to your account">
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      {/* Forgot Password Button */}
      <TouchableOpacity style={styles.linkButton} accessibilityLabel="Forgot password, reset your password">
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  label: {
    fontSize: 16,
    color: '#000000',  // Ensures good contrast against white background
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 8,
    fontSize: 16,
    color: '#000000',  // Text contrast with the input field background
    marginBottom: 16,
  },
  button: {
    width: '100%',
    height: 48,
    backgroundColor: '#0066CC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 48,
    minHeight: 48,
    padding: 12,  // Ensures touch target size is sufficient
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  linkButton: {
    marginTop: 12,
  },
  linkText: {
    color: '#0066CC',
    fontSize: 14,
  },
});

export default LoginScreen;
