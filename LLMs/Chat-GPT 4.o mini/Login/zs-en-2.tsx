import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// Login screen component
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Screen Header */}
      <Text style={styles.header} accessibilityRole="header">
        Log In
      </Text>

      {/* Username/Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Username or Email"
        placeholderTextColor="#888"  // Ensuring enough contrast for the placeholder text
        accessibilityLabel="Enter your username or email"
        accessible={true}
        accessibilityHint="Enter the username or email associated with your account"
        //accessibilityRole="textbox"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry={true}
        accessibilityLabel="Enter your password"
        accessible={true}
        accessibilityHint="Enter your password to log in"
        //accessibilityRole="textbox"
      />

      {/* Log In Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Logging in...')}
        accessibilityLabel="Log in"
        accessible={true}
        accessibilityRole="button"
        accessibilityHint="Tap to log in with the entered credentials"
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      {/* Forgot Password Button */}
      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={() => Alert.alert('Forgot Password...')}
        accessibilityLabel="Forgot Password"
        accessible={true}
        accessibilityRole="button"
        accessibilityHint="Tap to reset your password"
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the login screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#2c3e50',  // High contrast text color
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#2c3e50',  // High contrast text color
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  forgotPassword: {
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#3498db',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
