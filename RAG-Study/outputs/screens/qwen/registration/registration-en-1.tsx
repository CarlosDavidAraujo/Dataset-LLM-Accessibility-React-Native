import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const RegistrationScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = () => {
    Alert.alert(
      "Registration Submitted",
      "Your information has been submitted successfully.",
    );
  };

  const handleCancel = () => {
    Alert.alert("Cancelled", "Registration cancelled.");
  };

  return (
    <ScrollView
      style={styles.container}
      //accessibilityRole="form" valor invalido
      accessible={true}
    >
      <Text style={styles.title} accessibilityRole="header">
        Registration Form
      </Text>

      {/* First Name */}
      <View style={styles.inputGroup}>
        <Text nativeID="firstNameLabel" style={styles.label}>
          First Name *
        </Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          accessibilityLabel="First name input"
          accessibilityLabelledBy="firstNameLabel"
          accessibilityRole="text"
          autoComplete="name"
          textContentType="givenName"
          placeholder="Enter your first name"
        />
      </View>

      {/* Last Name */}
      <View style={styles.inputGroup}>
        <Text nativeID="lastNameLabel" style={styles.label}>
          Last Name *
        </Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          accessibilityLabel="Last name input"
          accessibilityLabelledBy="lastNameLabel"
          accessibilityRole="text"
          autoComplete="name"
          textContentType="familyName"
          placeholder="Enter your last name"
        />
      </View>

      {/* Email */}
      <View style={styles.inputGroup}>
        <Text nativeID="emailLabel" style={styles.label}>
          Email Address *
        </Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          accessibilityLabel="Email address input"
          accessibilityLabelledBy="emailLabel"
          accessibilityRole="text"
          autoComplete="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholder="example@domain.com"
        />
      </View>

      {/* Password */}
      <View style={styles.inputGroup}>
        <Text nativeID="passwordLabel" style={styles.label}>
          Password *
        </Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          accessibilityLabel="Password input"
          accessibilityLabelledBy="passwordLabel"
          accessibilityRole="text"
          autoComplete="password"
          textContentType="password"
          placeholder="Enter your password"
        />
      </View>

      {/* Date of Birth */}
      <View style={styles.inputGroup}>
        <Text nativeID="dobLabel" style={styles.label}>
          Date of Birth *
        </Text>
        <TextInput
          style={styles.input}
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
          accessibilityLabel="Date of birth input"
          accessibilityLabelledBy="dobLabel"
          accessibilityRole="text"
          placeholder="MM/DD/YYYY"
          keyboardType="numbers-and-punctuation"
        />
      </View>

      {/* Gender */}
      <View style={styles.inputGroup}>
        <Text nativeID="genderLabel" style={styles.label}>
          Gender
        </Text>
        <TextInput
          style={styles.input}
          value={gender}
          onChangeText={setGender}
          accessibilityLabel="Gender selection"
          accessibilityLabelledBy="genderLabel"
          accessibilityRole="combobox"
          placeholder="Select your gender"
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.submitButton]}
          onPress={handleSubmit}
          accessibilityRole="button"
          accessibilityLabel="Submit registration form"
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={handleCancel}
          accessibilityRole="button"
          accessibilityLabel="Cancel registration"
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 24,
    color: "#333",
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  button: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 8,
  },
  submitButton: {
    backgroundColor: "#007AFF",
  },
  cancelButton: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});

export default RegistrationScreen;
