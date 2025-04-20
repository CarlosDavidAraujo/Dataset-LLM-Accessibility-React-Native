import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
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
    // Submit logic
    console.log("Form Submitted");
  };

  const handleCancel = () => {
    // Cancel logic
    console.log("Form Canceled");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading} accessibilityRole="header">
        Registration
      </Text>

      <View style={styles.inputContainer}>
        <Text
          style={styles.label}
          accessible={true}
          accessibilityLabel="First Name"
        >
          First Name
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your first name"
          value={firstName}
          onChangeText={setFirstName}
          accessible={true}
          accessibilityLabel="First Name Input"
          accessibilityHint="Enter your first name."
        />
      </View>

      <View style={styles.inputContainer}>
        <Text
          style={styles.label}
          accessible={true}
          accessibilityLabel="Last Name"
        >
          Last Name
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your last name"
          value={lastName}
          onChangeText={setLastName}
          accessible={true}
          accessibilityLabel="Last Name Input"
          accessibilityHint="Enter your last name."
        />
      </View>

      <View style={styles.inputContainer}>
        <Text
          style={styles.label}
          accessible={true}
          accessibilityLabel="Email Address"
        >
          Email Address
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          accessible={true}
          accessibilityLabel="Email Address Input"
          accessibilityHint="Enter your email address."
        />
      </View>

      <View style={styles.inputContainer}>
        <Text
          style={styles.label}
          accessible={true}
          accessibilityLabel="Password"
        >
          Password
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          accessible={true}
          accessibilityLabel="Password Input"
          accessibilityHint="Enter your password."
        />
      </View>

      <View style={styles.inputContainer}>
        <Text
          style={styles.label}
          accessible={true}
          accessibilityLabel="Date of Birth"
        >
          Date of Birth
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your date of birth"
          value={dob}
          onChangeText={setDob}
          accessible={true}
          accessibilityLabel="Date of Birth Input"
          accessibilityHint="Enter your date of birth."
        />
      </View>

      <View style={styles.inputContainer}>
        <Text
          style={styles.label}
          accessible={true}
          accessibilityLabel="Gender"
        >
          Gender
        </Text>
        <Picker
          selectedValue={gender}
          style={styles.input}
          onValueChange={setGender}
          accessible={true}
          accessibilityLabel="Select Gender"
          accessibilityHint="Select your gender."
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
          accessible={true}
          accessibilityLabel="Submit Button"
          accessibilityHint="Submit the registration form"
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleCancel}
          accessible={true}
          accessibilityLabel="Cancel Button"
          accessibilityHint="Cancel the registration process"
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
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default RegistrationScreen;
