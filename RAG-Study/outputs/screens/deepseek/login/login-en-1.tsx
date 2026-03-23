import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        //accessibilityRole="heading" valor invalido
        style={styles.title}
      >
        Login
      </Text>

      <TextInput
        accessibilityLabel="Username or Email"
        accessibilityHint="Enter your username or email address"
        placeholder="Username or Email"
        style={styles.input}
      />

      <TextInput
        accessibilityLabel="Password"
        accessibilityHint="Enter your password"
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
      />

      <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel="Log In"
        accessibilityHint="Logs you into the app"
        onPress={() => alert("Logging in...")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel="Forgot Password"
        accessibilityHint="Resets your password"
        onPress={() => alert("Forgot Password clicked")}
        style={styles.forgotPasswordButton}
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  forgotPasswordButton: {
    alignSelf: "center",
  },
  forgotPasswordText: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
