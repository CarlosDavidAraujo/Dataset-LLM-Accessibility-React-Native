import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';

// Accessibility-enhanced Login Screen
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Login</Text>

      {/* Username or Email Field */}
      <TextInput
        style={styles.input}
        placeholder="Enter your username or email"
        placeholderTextColor="#A9A9A9"
        accessibilityLabel="Username or Email"
        accessibilityHint="Enter your username or email address"
        accessible={true}
        importantForAccessibility="yes"
      />

      {/* Password Field */}
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#A9A9A9"
        secureTextEntry
        accessibilityLabel="Password"
        accessibilityHint="Enter your password"
        accessible={true}
        importantForAccessibility="yes"
      />

      {/* Login Button */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Log In"
        accessible={true}
        importantForAccessibility="yes"
        onPress={() => console.log("Log In Pressed")}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      {/* Forgot Password Link */}
      <TouchableOpacity
        style={styles.link}
        accessibilityLabel="Forgot Password"
        accessible={true}
        importantForAccessibility="yes"
        onPress={() => console.log("Forgot Password Pressed")}
      >
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
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#000', // High contrast text
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
    color: '#000', // High contrast text
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 10,
  },
  linkText: {
    color: '#007BFF',
    fontSize: 16,
  },
});

export default LoginScreen;
