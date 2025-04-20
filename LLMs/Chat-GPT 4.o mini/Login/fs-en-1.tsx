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
        accessibilityLabelledBy="usernameLabel"
        style={styles.input}
        placeholder="Enter your username or email"
        autoComplete="username"
        textContentType="username"
      />

      {/* Password Field */}
      <Text nativeID="passwordLabel" style={styles.label}>
        Password
      </Text>
      <TextInput
        accessibilityLabelledBy="passwordLabel"
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        autoComplete="password"
        textContentType="password"
      />

      {/* Log In Button */}
      <TouchableOpacity style={styles.button} accessible={true} accessibilityLabel="Log in to your account">
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      {/* Forgot Password Button */}
      <TouchableOpacity style={styles.linkButton} accessible={true} accessibilityLabel="Forgot your password?">
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  label: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    fontSize: 16,
    borderRadius: 4,
    color: '#000000',
  },
  button: {
    backgroundColor: '#0056B3',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    minWidth: 200,
    minHeight: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkButton: {
    marginTop: 16,
    alignItems: 'center',
  },
  linkText: {
    color: '#0056B3',
    fontSize: 14,
  },
});

export default LoginScreen;
