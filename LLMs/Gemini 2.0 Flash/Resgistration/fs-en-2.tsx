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
        style={styles.input}
        placeholder="Enter first name"
      />

      <Text nativeID="lastNameLabel" style={styles.label}>
        Last Name
      </Text>
      <TextInput
        accessibilityLabelledBy="lastNameLabel"
        style={styles.input}
        placeholder="Enter last name"
      />

      <Text nativeID="emailLabel" style={styles.label}>
        Email Address
      </Text>
      <TextInput
        accessibilityLabelledBy="emailLabel"
        style={styles.input}
        placeholder="Enter email address"
        keyboardType="email-address"
        textContentType="emailAddress"
      />

      <Text nativeID="passwordLabel" style={styles.label}>
        Password
      </Text>
      <TextInput
        accessibilityLabelledBy="passwordLabel"
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry
        textContentType="password"
      />

      <Text nativeID="dobLabel" style={styles.label}>
        Date of Birth
      </Text>
      <TextInput
        accessibilityLabelledBy="dobLabel"
        style={styles.input}
        placeholder="DD/MM/YYYY"
        keyboardType="number-pad"
      />

      <Text nativeID="genderLabel" style={styles.label}>
        Gender
      </Text>
      <TextInput
        accessibilityLabelledBy="genderLabel"
        style={styles.input}
        placeholder="Enter gender"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="Submit form data"
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="Cancel registration"
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
    backgroundColor: "#FFFFFF", // White background for good contrast
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
    color: "#000000", // Black text for good contrast
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007AFF", // Blue button background
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: Platform.OS === "ios" ? 44 : 48,
    minHeight: Platform.OS === "ios" ? 44 : 48,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF", // White text for good contrast on blue background
    fontSize: 16,
  },
});

export default RegistrationScreen;
