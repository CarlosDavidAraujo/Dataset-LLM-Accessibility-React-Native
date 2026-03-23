import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert("Error", "Please enter both username and password");
      return;
    }
    Alert.alert("Success", `Welcome back, ${username}!`);
  };

  const handleForgotPassword = () => {
    Alert.alert("Info", "Password reset functionality would go here");
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        // accessibilityRole="form" valor invalido
        accessible={true}
        accessibilityLabel="Login form"
      >
        <Text style={styles.title} accessibilityRole="header">
          Welcome Back
        </Text>

        <View style={styles.inputGroup}>
          <Text nativeID="usernameLabel" style={styles.label}>
            Username or Email
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username or email"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="username"
            autoComplete="username"
            accessibilityLabel="Username or email input"
            accessibilityLabelledBy="usernameLabel"
            accessibilityRole="text"
            returnKeyType="next"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text nativeID="passwordLabel" style={styles.label}>
            Password
          </Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!isPasswordVisible}
              textContentType="password"
              autoComplete="password"
              accessibilityLabel="Password input"
              accessibilityLabelledBy="passwordLabel"
              accessibilityRole="text"
              returnKeyType="done"
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              accessibilityRole="button"
              accessibilityLabel={
                isPasswordVisible ? "Hide password" : "Show password"
              }
              accessibilityHint="Double tap to toggle password visibility"
              style={styles.toggleButton}
            >
              <Text style={styles.toggleButtonText}>
                {isPasswordVisible ? "HIDE" : "SHOW"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          onPress={handleForgotPassword}
          accessibilityRole="button"
          accessibilityLabel="Forgot password"
          accessibilityHint="Navigate to password recovery screen"
          style={styles.forgotPasswordButton}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleLogin}
          accessibilityRole="button"
          accessibilityLabel="Log in"
          accessibilityHint="Submit credentials to log into your account"
          style={styles.loginButton}
        >
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
  },
  scrollContainer: {
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  toggleButton: {
    backgroundColor: "#e0e0e0",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderLeftWidth: 1,
    borderLeftColor: "#ddd",
  },
  toggleButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  forgotPasswordButton: {
    alignSelf: "flex-start",
    paddingVertical: 10,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: "#007AFF",
    fontWeight: "500",
  },
  loginButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});

export default LoginScreen;
