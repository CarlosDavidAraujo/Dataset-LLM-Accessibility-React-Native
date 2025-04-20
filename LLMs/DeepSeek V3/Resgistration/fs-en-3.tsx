import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
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
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      {/* Header */}
      <Text style={styles.header} accessibilityRole="header">
        Create Account
      </Text>

      {/* First Name Field */}
      <View style={styles.inputGroup}>
        <Text nativeID="firstNameLabel" style={styles.label}>
          First Name
        </Text>
        <TextInput
          style={styles.input}
          accessibilityLabelledBy="firstNameLabel"
          accessibilityHint="Enter your first name"
          autoComplete="name-given"
          textContentType="givenName"
          value={formData.firstName}
          onChangeText={(text) => handleInputChange("firstName", text)}
          placeholder="Enter first name"
          placeholderTextColor="#767676" // Meets contrast requirements
        />
      </View>

      {/* Last Name Field */}
      <View style={styles.inputGroup}>
        <Text nativeID="lastNameLabel" style={styles.label}>
          Last Name
        </Text>
        <TextInput
          style={styles.input}
          accessibilityLabelledBy="lastNameLabel"
          accessibilityHint="Enter your last name"
          autoComplete="name-family"
          textContentType="familyName"
          value={formData.lastName}
          onChangeText={(text) => handleInputChange("lastName", text)}
          placeholder="Enter last name"
          placeholderTextColor="#767676"
        />
      </View>

      {/* Email Field */}
      <View style={styles.inputGroup}>
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
          value={formData.email}
          onChangeText={(text) => handleInputChange("email", text)}
          placeholder="Enter email address"
          placeholderTextColor="#767676"
        />
      </View>

      {/* Password Field */}
      <View style={styles.inputGroup}>
        <Text nativeID="passwordLabel" style={styles.label}>
          Password
        </Text>
        <TextInput
          style={styles.input}
          accessibilityLabelledBy="passwordLabel"
          accessibilityHint="Enter your password"
          autoComplete="password"
          textContentType="password"
          secureTextEntry
          value={formData.password}
          onChangeText={(text) => handleInputChange("password", text)}
          placeholder="Enter password"
          placeholderTextColor="#767676"
        />
      </View>

      {/* Date of Birth Field */}
      <View style={styles.inputGroup}>
        <Text nativeID="dobLabel" style={styles.label}>
          Date of Birth
        </Text>
        <TextInput
          style={styles.input}
          accessibilityLabelledBy="dobLabel"
          accessibilityHint="Enter your date of birth in MM/DD/YYYY format"
          autoComplete="birthdate-full"
          textContentType="none"
          keyboardType={
            Platform.OS === "ios" ? "numbers-and-punctuation" : "numeric"
          }
          value={formData.dob}
          onChangeText={(text) => handleInputChange("dob", text)}
          placeholder="MM/DD/YYYY"
          placeholderTextColor="#767676"
        />
      </View>

      {/* Gender Field */}
      <View style={styles.inputGroup}>
        <Text nativeID="genderLabel" style={styles.label}>
          Gender
        </Text>
        <TextInput
          style={styles.input}
          accessibilityLabelledBy="genderLabel"
          accessibilityHint="Enter your gender identity"
          value={formData.gender}
          onChangeText={(text) => handleInputChange("gender", text)}
          placeholder="Enter gender (optional)"
          placeholderTextColor="#767676"
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.submitButton}
          accessibilityRole="button"
          accessibilityLabel="Submit registration form"
          accessibilityHint="Creates your new account"
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelButton}
          accessibilityRole="button"
          accessibilityLabel="Cancel registration"
          accessibilityHint="Discards form and returns to previous screen"
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#FFFFFF", // White background for good contrast
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000", // Black text for good contrast
    marginBottom: 24,
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: "#000000", // Black text for good contrast
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#767676",
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    color: "#000000", // Black text for good contrast
    backgroundColor: "#FFFFFF", // White background
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  submitButton: {
    backgroundColor: "#0066CC", // Dark blue
    minWidth: 140,
    minHeight: 48, // Meets minimum touch target size
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    padding: 12,
  },
  cancelButton: {
    backgroundColor: "#CC0000", // Dark red
    minWidth: 140,
    minHeight: 48, // Meets minimum touch target size
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    padding: 12,
  },
  buttonText: {
    color: "#FFFFFF", // White text for good contrast
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegistrationScreen;
