import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert('Error', 'Please enter both username and password');
      return;
    }
    Alert.alert('Success', `Welcome back, ${username}!`);
  };

  const handleForgotPassword = () => {
    Alert.alert('Info', 'Password reset functionality would go here');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <Text 
            style={styles.title}
            accessibilityRole="header"
            accessible={true}
          >
            Welcome Back
          </Text>
          <Text 
            style={styles.subtitle}
            accessible={true}
          >
            Please sign in to continue
          </Text>
        </View>

        <View style={styles.form}>
          {/* Username Field */}
          <View style={styles.inputGroup}>
            <Text 
              nativeID="usernameLabel" 
              style={[styles.label, usernameFocus && styles.focusedLabel]}
              accessible={true}
            >
              Username or Email
            </Text>
            <TextInput
              style={[styles.input, usernameFocus && styles.focusedInput]}
              value={username}
              onChangeText={setUsername}
              onFocus={() => setUsernameFocus(true)}
              onBlur={() => setUsernameFocus(false)}
              accessibilityLabel="Username or email input"
              accessibilityLabelledBy="usernameLabel"
              accessibilityHint="Enter your username or email address"
              autoComplete="username"
              textContentType="username"
              keyboardType="email-address"
              returnKeyType="next"
              enablesReturnKeyAutomatically={true}
              accessible={true}
            />
          </View>

          {/* Password Field */}
          <View style={styles.inputGroup}>
            <Text 
              nativeID="passwordLabel" 
              style={[styles.label, passwordFocus && styles.focusedLabel]}
              accessible={true}
            >
              Password
            </Text>
            <TextInput
              style={[styles.input, passwordFocus && styles.focusedInput]}
              value={password}
              onChangeText={setPassword}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              accessibilityLabel="Password input"
              accessibilityLabelledBy="passwordLabel"
              accessibilityHint="Enter your password"
              autoComplete="password"
              textContentType="password"
              secureTextEntry={true}
              returnKeyType="done"
              enablesReturnKeyAutomatically={true}
              accessible={true}
            />
          </View>

          {/* Forgot Password Button */}
          <TouchableOpacity
            style={styles.forgotButton}
            onPress={handleForgotPassword}
            accessibilityRole="button"
            accessibilityLabel="Forgot password"
            accessibilityHint="Navigate to password recovery screen"
            accessible={true}
          >
            <Text style={styles.forgotButtonText}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            accessibilityRole="button"
            accessibilityLabel="Log in"
            accessibilityHint="Sign in with entered credentials"
            accessible={true}
          >
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#718096',
    textAlign: 'center',
  },
  form: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4a5568',
    marginBottom: 8,
  },
  focusedLabel: {
    color: '#3182ce',
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#ffffff',
  },
  focusedInput: {
    borderColor: '#3182ce',
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginBottom: 25,
    paddingVertical: 5,
  },
  forgotButtonText: {
    fontSize: 15,
    color: '#3182ce',
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#3182ce',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default LoginScreen;
