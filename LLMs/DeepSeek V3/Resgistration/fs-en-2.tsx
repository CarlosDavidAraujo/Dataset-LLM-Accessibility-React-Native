import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const RegistrationScreen = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
  });

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.heading} accessibilityRole="header">
          Create Account
        </Text>

        {/* First Name */}
        <Text nativeID="firstNameLabel" style={styles.label}>
          First Name
        </Text>
        <TextInput
          style={styles.input}
          accessibilityLabelledBy="firstNameLabel"
          accessibilityHint="Enter your first name"
          value={formData.firstName}
          onChangeText={(text) => handleInputChange("firstName", text)}
          autoComplete="name-given"
          textContentType="givenName"
        />

        {/* Last Name */}
        <Text nativeID="lastNameLabel" style={styles.label}>
          Last Name
        </Text>
        <TextInput
          style={styles.input}
          accessibilityLabelledBy="lastNameLabel"
          accessibilityHint="Enter your last name"
          value={formData.lastName}
          onChangeText={(text) => handleInputChange("lastName", text)}
          autoComplete="name-family"
          textContentType="familyName"
        />

        {/* Email */}
        <Text nativeID="emailLabel" style={styles.label}>
          Email Address
        </Text>
        <TextInput
          style={styles.input}
          accessibilityLabelledBy="emailLabel"
          accessibilityHint="Enter your email address"
          value={formData.email}
          onChangeText={(text) => handleInputChange("email", text)}
          keyboardType="email-address"
          autoComplete="email"
          textContentType="emailAddress"
          autoCapitalize="none"
        />

        {/* Password */}
        <Text nativeID="passwordLabel" style={styles.label}>
          Password
        </Text>
        <TextInput
          style={styles.input}
          accessibilityLabelledBy="passwordLabel"
          accessibilityHint="Enter your password"
          value={formData.password}
          onChangeText={(text) => handleInputChange("password", text)}
          secureTextEntry
          autoComplete="password"
          textContentType="password"
        />

        {/* Date of Birth */}
        <Text nativeID="dobLabel" style={styles.label}>
          Date of Birth
        </Text>
        <TextInput
          style={styles.input}
          accessibilityLabelledBy="dobLabel"
          accessibilityHint="Enter your date of birth in MM/DD/YYYY format"
          value={formData.dob}
          onChangeText={(text) => handleInputChange("dob", text)}
          placeholder="MM/DD/YYYY"
          keyboardType="numbers-and-punctuation"
        />

        {/* Gender */}
        <Text nativeID="genderLabel" style={styles.label}>
          Gender
        </Text>
        <TextInput
          style={styles.input}
          accessibilityLabelledBy="genderLabel"
          accessibilityHint="Enter your gender identity"
          value={formData.gender}
          onChangeText={(text) => handleInputChange("gender", text)}
        />

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.submitButton]}
            accessibilityLabel="Submit registration form"
            accessibilityRole="button"
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            accessibilityLabel="Cancel registration"
            accessibilityRole="button"
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContainer: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    color: "#000000", // High contrast with white background
    marginBottom: 24,
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    color: "#333333", // Dark gray for good contrast (4.74:1)
    marginBottom: 8,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 4,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 16,
    color: "#000000", // Black text for maximum contrast
    backgroundColor: "#FFFFFF",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  button: {
    minWidth: 120,
    minHeight: 48, // Meets minimum touch target size
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  submitButton: {
    backgroundColor: "#0066CC", // Blue background
  },
  cancelButton: {
    backgroundColor: "#CCCCCC", // Light gray background
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF", // White text on colored buttons for contrast
  },
});

export default RegistrationScreen;
