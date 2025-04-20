import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";

const RegistrationScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = () => {
    // Handle form submission logic
    console.log("Form Submitted");
  };

  const handleCancel = () => {
    // Handle form cancelation logic
    console.log("Form Canceled");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Registration</Text>

      {/* First Name Field */}
      <View style={styles.inputContainer}>
        <Text
          style={styles.label}
          accessibilityLabel="First Name"
          accessible={true}
        >
          First Name
        </Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="Enter your first name"
          accessibilityLabel="First name input field"
          accessible={true}
        />
      </View>

      {/* Last Name Field */}
      <View style={styles.inputContainer}>
        <Text
          style={styles.label}
          accessibilityLabel="Last Name"
          accessible={true}
        >
          Last Name
        </Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          placeholder="Enter your last name"
          accessibilityLabel="Last name input field"
          accessible={true}
        />
      </View>

      {/* Email Field */}
      <View style={styles.inputContainer}>
        <Text
          style={styles.label}
          accessibilityLabel="Email Address"
          accessible={true}
        >
          Email Address
        </Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          accessibilityLabel="Email input field"
          accessible={true}
        />
      </View>

      {/* Password Field */}
      <View style={styles.inputContainer}>
        <Text
          style={styles.label}
          accessibilityLabel="Password"
          accessible={true}
        >
          Password
        </Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry={true}
          accessibilityLabel="Password input field"
          accessible={true}
        />
      </View>

      {/* Date of Birth Field */}
      <View style={styles.inputContainer}>
        <Text
          style={styles.label}
          accessibilityLabel="Date of Birth"
          accessible={true}
        >
          Date of Birth
        </Text>
        <TextInput
          style={styles.input}
          value={dob}
          onChangeText={setDob}
          placeholder="Enter your date of birth"
          keyboardType="numeric"
          accessibilityLabel="Date of birth input field"
          accessible={true}
        />
      </View>

      {/* Gender Field */}
      <View style={styles.inputContainer}>
        <Text
          style={styles.label}
          accessibilityLabel="Gender"
          accessible={true}
        >
          Gender
        </Text>
        <TextInput
          style={styles.input}
          value={gender}
          onChangeText={setGender}
          placeholder="Enter your gender"
          accessibilityLabel="Gender input field"
          accessible={true}
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        accessibilityLabel="Submit Registration"
        accessible={true}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {/* Cancel Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleCancel}
        accessibilityLabel="Cancel Registration"
        accessible={true}
      >
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#ffffff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    fontSize: 16,
    marginTop: 8,
    color: "#333",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
    minWidth: 150,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default RegistrationScreen;
