import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>

      <Text nativeID="firstNameLabel" style={styles.label}>
        First Name
      </Text>
      <TextInput
        accessibilityLabelledBy="firstNameLabel"
        placeholder="Enter first name"
        style={styles.input}
      />

      <Text nativeID="lastNameLabel" style={styles.label}>
        Last Name
      </Text>
      <TextInput
        accessibilityLabelledBy="lastNameLabel"
        placeholder="Enter last name"
        style={styles.input}
      />

      <Text nativeID="emailLabel" style={styles.label}>
        Email Address
      </Text>
      <TextInput
        accessibilityLabelledBy="emailLabel"
        placeholder="Enter email address"
        keyboardType="email-address"
        style={styles.input}
      />

      <Text nativeID="passwordLabel" style={styles.label}>
        Password
      </Text>
      <TextInput
        accessibilityLabelledBy="passwordLabel"
        placeholder="Enter password"
        secureTextEntry={true}
        style={styles.input}
      />

      <Text nativeID="dobLabel" style={styles.label}>
        Date of Birth
      </Text>
      <TextInput
        accessibilityLabelledBy="dobLabel"
        placeholder="MM/DD/YYYY"
        style={styles.input}
      />

      <Text nativeID="genderLabel" style={styles.label}>
        Gender
      </Text>
      <TextInput
        accessibilityLabelledBy="genderLabel"
        placeholder="Enter gender"
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="Submit registration form"
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="Cancel registration form"
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF", // White background
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000000", // Black text for good contrast
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#000000", // Black text for good contrast
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    minHeight: 48, // Minimum touch target height
    color: "#000000", // Black text for good contrast
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007AFF", // Blue button for example
    padding: 15,
    borderRadius: 5,
    minWidth: 120, // Minimum touch target width
    minHeight: 48, // Minimum touch target height
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF", // White text for good contrast on blue background
    fontSize: 16,
  },
});

export default RegistrationScreen;
