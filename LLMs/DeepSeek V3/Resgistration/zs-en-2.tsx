import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
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
import { useWindowDimensions } from "react-native";

const RegistrationScreen = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
  });

  const { width, height } = useWindowDimensions();
  const isSmallScreen = width < 375;

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Submit logic here
    console.log("Form submitted:", formData);
  };

  const handleCancel = () => {
    // Cancel logic here
    console.log("Form cancelled");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Create Account</Text>

        {/* First Name */}
        <View style={styles.inputContainer}>
          <Text
            style={styles.label}
            accessible={true}
            accessibilityLabel="First Name"
            accessibilityRole="text"
          >
            First Name
          </Text>
          <TextInput
            style={styles.input}
            value={formData.firstName}
            onChangeText={(text) => handleInputChange("firstName", text)}
            placeholder="Enter your first name"
            placeholderTextColor="#767676"
            accessibilityLabel="First Name"
            accessibilityHint="Enter your first name"
            accessibilityRole="text"
            importantForAutofill="yes"
            autoComplete="name-given"
            textContentType="givenName"
          />
        </View>

        {/* Last Name */}
        <View style={styles.inputContainer}>
          <Text
            style={styles.label}
            accessible={true}
            accessibilityLabel="Last Name"
            accessibilityRole="text"
          >
            Last Name
          </Text>
          <TextInput
            style={styles.input}
            value={formData.lastName}
            onChangeText={(text) => handleInputChange("lastName", text)}
            placeholder="Enter your last name"
            placeholderTextColor="#767676"
            accessibilityLabel="Last Name"
            accessibilityHint="Enter your last name"
            accessibilityRole="text"
            importantForAutofill="yes"
            autoComplete="name-family"
            textContentType="familyName"
          />
        </View>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Text
            style={styles.label}
            accessible={true}
            accessibilityLabel="Email Address"
            accessibilityRole="text"
          >
            Email Address
          </Text>
          <TextInput
            style={styles.input}
            value={formData.email}
            onChangeText={(text) => handleInputChange("email", text)}
            placeholder="Enter your email"
            placeholderTextColor="#767676"
            keyboardType="email-address"
            autoCapitalize="none"
            accessibilityLabel="Email Address"
            accessibilityHint="Enter your email address"
            accessibilityRole="text"
            importantForAutofill="yes"
            autoComplete="email"
            textContentType="emailAddress"
          />
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <Text
            style={styles.label}
            accessible={true}
            accessibilityLabel="Password"
            accessibilityRole="text"
          >
            Password
          </Text>
          <TextInput
            style={styles.input}
            value={formData.password}
            onChangeText={(text) => handleInputChange("password", text)}
            placeholder="Create a password"
            placeholderTextColor="#767676"
            secureTextEntry={true}
            accessibilityLabel="Password"
            accessibilityHint="Create your password"
            accessibilityRole="text"
            importantForAutofill="yes"
            autoComplete="password"
            textContentType="password"
          />
        </View>

        {/* Date of Birth */}
        <View style={styles.inputContainer}>
          <Text
            style={styles.label}
            accessible={true}
            accessibilityLabel="Date of Birth"
            accessibilityRole="text"
          >
            Date of Birth
          </Text>
          <TextInput
            style={styles.input}
            value={formData.dob}
            onChangeText={(text) => handleInputChange("dob", text)}
            placeholder="MM/DD/YYYY"
            placeholderTextColor="#767676"
            keyboardType="numbers-and-punctuation"
            accessibilityLabel="Date of Birth"
            accessibilityHint="Enter your date of birth in MM/DD/YYYY format"
            accessibilityRole="text"
          />
        </View>

        {/* Gender */}
        <View style={styles.inputContainer}>
          <Text
            style={styles.label}
            accessible={true}
            accessibilityLabel="Gender"
            accessibilityRole="text"
          >
            Gender
          </Text>
          <Picker
            selectedValue={formData.gender}
            style={[styles.input, styles.picker]}
            onValueChange={(itemValue) =>
              handleInputChange("gender", itemValue)
            }
            accessibilityLabel="Gender selection"
            accessibilityRole="combobox"
          >
            <Picker.Item label="Select gender" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Non-binary" value="non-binary" />
            <Picker.Item label="Prefer not to say" value="unspecified" />
          </Picker>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.submitButton]}
            onPress={handleSubmit}
            accessible={true}
            accessibilityLabel="Submit registration"
            accessibilityRole="button"
            accessibilityHint="Submit your registration information"
            hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={handleCancel}
            accessible={true}
            accessibilityLabel="Cancel registration"
            accessibilityRole="button"
            accessibilityHint="Cancel the registration process"
            hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
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
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000", // High contrast black
    marginBottom: 30,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#333333", // Dark gray for good contrast
    marginBottom: 8,
    fontWeight: "600",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#000000", // High contrast black
    backgroundColor: "#FFFFFF",
  },
  picker: {
    height: 50,
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    minHeight: 48, // Minimum touch target size
    minWidth: 120, // Minimum touch target size
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: "#1E88E5", // Blue with good contrast
  },
  cancelButton: {
    backgroundColor: "#757575", // Gray with good contrast
  },
  buttonText: {
    color: "#FFFFFF", // White for good contrast
    fontSize: 16,
    fontWeight: "600",
  },
});

export default RegistrationScreen;
