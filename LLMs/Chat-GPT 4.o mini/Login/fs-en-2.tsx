import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Username Label and Input */}
      <Text nativeID="usernameLabel" style={styles.label}>Username or Email</Text>
      <TextInput
        accessibilityLabelledBy="usernameLabel"
        style={styles.input}
        placeholder="Enter your username or email"
        autoComplete="username"
        textContentType="username"
      />

      {/* Password Label and Input */}
      <Text nativeID="passwordLabel" style={styles.label}>Password</Text>
      <TextInput
        accessibilityLabelledBy="passwordLabel"
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        textContentType="password"
      />

      {/* Log In Button */}
      <TouchableOpacity style={styles.buttonContainer} accessible={true}>
        <Button
          title="Log In"
          onPress={() => { /* handle login logic */ }}
          accessibilityLabel="Log in to your account"
        />
      </TouchableOpacity>

      {/* Forgot Password Button */}
      <TouchableOpacity style={styles.buttonContainer} accessible={true}>
        <Button
          title="Forgot Password?"
          onPress={() => { /* handle forgot password logic */ }}
          accessibilityLabel="Navigate to forgot password screen"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  label: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 8,
    marginBottom: 16,
    fontSize: 16,
    color: '#000000',
  },
  buttonContainer: {
    minWidth: 48,
    minHeight: 48,
    padding: 8,
    marginBottom: 16,
  },
});

export default LoginScreen;
