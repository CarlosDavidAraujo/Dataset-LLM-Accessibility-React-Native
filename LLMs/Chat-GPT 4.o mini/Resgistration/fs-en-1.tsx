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
      {/* First Name */}
      <Text nativeID="firstNameLabel" style={styles.label}>
        First Name
      </Text>
      <TextInput
        accessibilityLabelledBy="firstNameLabel"
        style={styles.input}
        placeholder="Enter first name"
      />

      {/* Last Name */}
      <Text nativeID="lastNameLabel" style={styles.label}>
        Last Name
      </Text>
      <TextInput
        accessibilityLabelledBy="lastNameLabel"
        style={styles.input}
        placeholder="Enter last name"
      />

      {/* Email Address */}
      <Text nativeID="emailLabel" style={styles.label}>
        Email Address
      </Text>
      <TextInput
        accessibilityLabelledBy="emailLabel"
        style={styles.input}
        placeholder="Enter email address"
        keyboardType="email-address"
      />

      {/* Password */}
      <Text nativeID="passwordLabel" style={styles.label}>
        Password
      </Text>
      <TextInput
        accessibilityLabelledBy="passwordLabel"
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry
      />

      {/* Date of Birth */}
      <Text nativeID="dobLabel" style={styles.label}>
        Date of Birth
      </Text>
      <TextInput
        accessibilityLabelledBy="dobLabel"
        style={styles.input}
        placeholder="Enter date of birth"
      />

      {/* Gender */}
      <Text nativeID="genderLabel" style={styles.label}>
        Gender
      </Text>
      <TextInput
        accessibilityLabelledBy="genderLabel"
        style={styles.input}
        placeholder="Enter gender"
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} accessible={true}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {/* Cancel Button */}
      <TouchableOpacity style={styles.button} accessible={true}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  label: {
    fontSize: 16,
    color: "#000000", // Black text to ensure good contrast
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#0052cc", // Good contrast against the white background
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
    marginBottom: 16,
    minWidth: 120,
    minHeight: 48, // Ensuring proper touch target size
  },
  buttonText: {
    color: "#FFFFFF", // White text to contrast against the blue background
    fontSize: 16,
  },
});

export default RegistrationScreen;
