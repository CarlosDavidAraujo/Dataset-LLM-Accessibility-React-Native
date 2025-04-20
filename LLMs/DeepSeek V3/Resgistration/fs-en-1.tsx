import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const RegistrationScreen = () => {
  return (
    <View style={styles.container} accessible={true}>
      {/* Header */}
      <Text style={styles.header}>Create Account</Text>

      {/* Form Fields */}
      <View style={styles.formGroup}>
        <Text nativeID="firstNameLabel" style={styles.label}>
          First Name
        </Text>
        <TextInput
          style={styles.input}
          accessibilityLabelledBy="firstNameLabel"
          accessibilityHint="Enter your first name"
          autoComplete="name-given"
          textContentType="givenName"
          placeholder="John"
        />
      </View>

      <View style={styles.formGroup}>
        <Text nativeID="lastNameLabel" style={styles.label}>
          Last Name
        </Text>
        <TextInput
          style={styles.input}
          accessibilityLabelledBy="lastNameLabel"
          accessibilityHint="Enter your last name"
          autoComplete="name-family"
          textContentType="familyName"
          placeholder="Doe"
        />
      </View>

      <View style={styles.formGroup}>
        <Text nativeID="emailLabel" style={styles.label}>
          Email Address
        </Text>
        <TextInput
          style={styles.input}
          accessibilityLabelledBy="emailLabel"
          accessibilityHint="Enter your email address"
          autoComplete="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholder="john.doe@example.com"
        />
      </View>

      <View style={styles.formGroup}>
        <Text nativeID="passwordLabel" style={styles.label}>
          Password
        </Text>
        <TextInput
          style={styles.input}
          accessibilityLabelledBy="passwordLabel"
          accessibilityHint="Create a password with at least 8 characters"
          autoComplete="password-new"
          textContentType="newPassword"
          secureTextEntry={true}
          placeholder="••••••••"
        />
      </View>

      <View style={styles.formGroup}>
        <Text nativeID="dobLabel" style={styles.label}>
          Date of Birth
        </Text>
        <TextInput
          style={styles.input}
          accessibilityLabelledBy="dobLabel"
          accessibilityHint="Enter your date of birth in MM/DD/YYYY format"
          placeholder="MM/DD/YYYY"
        />
      </View>

      <View style={styles.formGroup}>
        <Text nativeID="genderLabel" style={styles.label}>
          Gender
        </Text>
        <View
          style={styles.radioGroup}
          accessibilityLabelledBy="genderLabel"
          role="radiogroup"
        >
          <TouchableOpacity
            style={styles.radioOption}
            accessibilityRole="radio"
            accessibilityLabel="Male"
          >
            <Text style={styles.radioText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioOption}
            accessibilityRole="radio"
            accessibilityLabel="Female"
          >
            <Text style={styles.radioText}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioOption}
            accessibilityRole="radio"
            accessibilityLabel="Other"
          >
            <Text style={styles.radioText}>Other</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.submitButton}
          accessibilityRole="button"
          accessibilityLabel="Submit registration form"
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelButton}
          accessibilityRole="button"
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
    backgroundColor: "#FFFFFF",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 24,
    textAlign: "center",
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: "#333333",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    color: "#000000",
    backgroundColor: "#FFFFFF",
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  radioOption: {
    minWidth: 80,
    minHeight: 48,
    padding: 12,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  radioText: {
    color: "#000000",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  submitButton: {
    backgroundColor: "#0066CC",
    minWidth: 120,
    minHeight: 48,
    padding: 12,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#CC0000",
    minWidth: 120,
    minHeight: 48,
    padding: 12,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegistrationScreen;
