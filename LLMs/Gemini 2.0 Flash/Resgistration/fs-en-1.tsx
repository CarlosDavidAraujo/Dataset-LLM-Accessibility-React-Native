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
      <Text style={styles.header}>Registration</Text>

      <Text nativeID="firstNameLabel" style={styles.label}>
        First Name
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="firstNameLabel"
        placeholder="Enter first name"
      />

      <Text nativeID="lastNameLabel" style={styles.label}>
        Last Name
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="lastNameLabel"
        placeholder="Enter last name"
      />

      <Text nativeID="emailLabel" style={styles.label}>
        Email Address
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="emailLabel"
        placeholder="Enter email address"
        keyboardType="email-address"
        autoComplete="email"
        textContentType="emailAddress"
      />

      <Text nativeID="passwordLabel" style={styles.label}>
        Password
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="passwordLabel"
        placeholder="Enter password"
        secureTextEntry
        autoComplete="new-password"
        textContentType="newPassword"
      />

      <Text nativeID="dobLabel" style={styles.label}>
        Date of Birth
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="dobLabel"
        placeholder="MM/DD/YYYY"
        keyboardType="number-pad"
      />

      <Text nativeID="genderLabel" style={styles.label}>
        Gender
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="genderLabel"
        placeholder="Enter gender"
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
    backgroundColor: "#FFFFFF", // Ensures good contrast with dark text
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000000", // High contrast
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#000000", // High contrast
  },
  input: {
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    color: "#000000", // High contrast
    minWidth: "100%", // Ensure width.
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007AFF", // Example accessible color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    minWidth: Platform.OS === "ios" ? 44 : 48, // Minimum touch target size
    minHeight: Platform.OS === "ios" ? 44 : 48,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF", // High contrast
    fontSize: 16,
  },
});

export default RegistrationScreen;
