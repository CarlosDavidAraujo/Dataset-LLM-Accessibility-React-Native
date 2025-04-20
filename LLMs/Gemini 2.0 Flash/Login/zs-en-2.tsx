import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
} from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    Alert.alert('Login Attempt', `Username: ${username}, Password: ${password}`);
  };

  const handleForgotPassword = () => {
    // Implement forgot password logic here
    Alert.alert('Forgot Password', 'Navigating to forgot password screen.');
  };

  return (
    <View style={styles.container} accessible={true} accessibilityLabel="Login Screen">
      <Text style={styles.title} accessibilityRole="header" 
      // accessibilityLevel={1} alucinação de propriedade inexistente
       >
        Log In
      </Text>

      <Text style={styles.label} accessibilityLabel="Username or Email">
        Username/Email
      </Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter username or email"
        accessibilityLabel="Username or Email Input"
        accessibilityHint="Enter your registered username or email address"
         //accessibilityRole="textbox" alucinação de valor inválido para a propriedadeaccessibilityRole="textbox"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Text style={styles.label} accessibilityLabel="Password">
        Password
      </Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        secureTextEntry={true}
        accessibilityLabel="Password Input"
        accessibilityHint="Enter your password"
        //accessibilityRole="textbox" alucinação de valor inválido para a propriedade accessibilityRole="textbox"
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin} accessibilityLabel="Log In Button" accessibilityRole="button">
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotPasswordButton} onPress={handleForgotPassword} accessibilityLabel="Forgot Password Button" accessibilityRole="button">
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF', // Example primary button color
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    minHeight: 48, // Minimum touch target size
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordButton: {
    marginTop: 10,
    alignItems: 'center',
    padding: 10,
    minHeight: 48, // Minimum touch target size
    justifyContent: 'center',
  },
  forgotPasswordText: {
    color: '#007AFF',
    fontSize: 16,
  },
});

export default LoginScreen;