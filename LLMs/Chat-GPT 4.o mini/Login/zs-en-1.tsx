import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header} accessible={true} accessibilityRole="header">
        Login
      </Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username or Email"
        placeholderTextColor="#A1A1A1"
        accessibilityLabel="Username or email input"
        accessibilityHint="Enter your username or email"
        accessible={true}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#A1A1A1"
        secureTextEntry={true}
        accessibilityLabel="Password input"
        accessibilityHint="Enter your password"
        accessible={true}
      />
      
      <TouchableOpacity
        style={styles.button}
        accessible={true}
        accessibilityLabel="Log In button"
        accessibilityHint="Log in with your credentials"
        onPress={() => { /* Handle login action */ }}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.forgotButton}
        accessible={true}
        accessibilityLabel="Forgot password link"
        accessibilityHint="Navigate to password recovery screen"
        onPress={() => { /* Handle forgot password action */ }}
      >
        <Text style={styles.forgotButtonText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F9F9F9',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2E2E2E',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#D1D1D1',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  forgotButton: {
    marginTop: 10,
  },
  forgotButtonText: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: '600',
  },
});

export default LoginScreen;
