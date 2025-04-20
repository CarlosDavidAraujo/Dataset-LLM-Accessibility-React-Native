import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
  Image,
} from "react-native";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      {/* First Name Field */}
      <Text nativeID="firstNameLabel" style={styles.label}>
        First Name
      </Text>
      <TextInput
        accessibilityLabelledBy="firstNameLabel"
        style={styles.input}
        placeholder="Enter first name"
      />

      {/* Last Name Field */}
      <Text nativeID="lastNameLabel" style={styles.label}>
        Last Name
      </Text>
      <TextInput
        accessibilityLabelledBy="lastNameLabel"
        style={styles.input}
        placeholder="Enter last name"
      />

      {/* Email Address Field */}
      <Text nativeID="emailLabel" style={styles.label}>
        Email Address
      </Text>
      <TextInput
        accessibilityLabelledBy="emailLabel"
        style={styles.input}
        placeholder="Enter email address"
        keyboardType="email-address"
      />

      {/* Password Field */}
      <Text nativeID="passwordLabel" style={styles.label}>
        Password
      </Text>
      <TextInput
        accessibilityLabelledBy="passwordLabel"
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry
      />

      {/* Date of Birth Field */}
      <Text nativeID="dobLabel" style={styles.label}>
        Date of Birth
      </Text>
      <TextInput
        accessibilityLabelledBy="dobLabel"
        style={styles.input}
        placeholder="Enter date of birth"
        keyboardType="numeric"
      />

      {/* Gender Field */}
      <Text nativeID="genderLabel" style={styles.label}>
        Gender
      </Text>
      <TextInput
        accessibilityLabelledBy="genderLabel"
        style={styles.input}
        placeholder="Enter gender"
      />

      {/* Submit Button */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Submit registration form"
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {/* Cancel Button */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Cancel registration"
      >
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000", // Black text to ensure good contrast
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginBottom: 16,
    minWidth: 160, // Ensuring the button is large enough to be tapped easily
    minHeight: 48, // Minimum touch target size (48x48)
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF", // White text on blue background for good contrast
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegistrationScreen;
