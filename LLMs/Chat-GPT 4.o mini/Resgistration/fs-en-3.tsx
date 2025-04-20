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

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      {/* Title or Heading */}
      <Text style={styles.header}>Registration</Text>

      {/* First Name */}
      <Text nativeID="firstNameLabel" style={styles.label}>
        First Name
      </Text>
      <TextInput
        accessibilityLabelledBy="firstNameLabel"
        style={styles.input}
        placeholder="Enter your first name"
      />

      {/* Last Name */}
      <Text nativeID="lastNameLabel" style={styles.label}>
        Last Name
      </Text>
      <TextInput
        accessibilityLabelledBy="lastNameLabel"
        style={styles.input}
        placeholder="Enter your last name"
      />

      {/* Email Address */}
      <Text nativeID="emailLabel" style={styles.label}>
        Email Address
      </Text>
      <TextInput
        accessibilityLabelledBy="emailLabel"
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      {/* Password */}
      <Text nativeID="passwordLabel" style={styles.label}>
        Password
      </Text>
      <TextInput
        accessibilityLabelledBy="passwordLabel"
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
      />

      {/* Date of Birth */}
      <Text nativeID="dobLabel" style={styles.label}>
        Date of Birth
      </Text>
      <TextInput
        accessibilityLabelledBy="dobLabel"
        style={styles.input}
        placeholder="Enter your date of birth"
      />

      {/* Gender */}
      <Text nativeID="genderLabel" style={styles.label}>
        Gender
      </Text>
      <TextInput
        accessibilityLabelledBy="genderLabel"
        style={styles.input}
        placeholder="Enter your gender"
      />

      {/* Submit Button */}
      <TouchableOpacity
        style={styles.button}
        accessible={true}
        accessibilityLabel="Submit registration form"
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {/* Cancel Button */}
      <TouchableOpacity
        style={styles.button}
        accessible={true}
        accessibilityLabel="Cancel registration"
      >
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000", // High contrast
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#000000", // High contrast
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
    minWidth: 200,
    minHeight: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
