import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

const RegistrationScreen = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: new Date(),
    gender: "prefer-not-to-say",
  });
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log(formData);
  };

  const handleCancel = () => {
    // Handle cancel action
    console.log("Registration cancelled");
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || formData.dateOfBirth;
    setShowDatePicker(Platform.OS === "ios");
    handleChange("dateOfBirth", currentDate);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title} accessibilityRole="header">
          Create Account
        </Text>

        {/* First Name */}
        <View style={styles.inputContainer}>
          <Text style={styles.label} accessibilityRole="text">
            First Name
          </Text>
          <TextInput
            style={styles.input}
            value={formData.firstName}
            onChangeText={(text) => handleChange("firstName", text)}
            placeholder="Enter your first name"
            placeholderTextColor="#767676"
            accessibilityLabel="First Name"
            accessibilityHint="Enter your first name"
            importantForAutofill="yes"
            autoComplete="name-given"
            textContentType="givenName"
          />
        </View>

        {/* Last Name */}
        <View style={styles.inputContainer}>
          <Text style={styles.label} accessibilityRole="text">
            Last Name
          </Text>
          <TextInput
            style={styles.input}
            value={formData.lastName}
            onChangeText={(text) => handleChange("lastName", text)}
            placeholder="Enter your last name"
            placeholderTextColor="#767676"
            accessibilityLabel="Last Name"
            accessibilityHint="Enter your last name"
            importantForAutofill="yes"
            autoComplete="name-family"
            textContentType="familyName"
          />
        </View>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Text style={styles.label} accessibilityRole="text">
            Email Address
          </Text>
          <TextInput
            style={styles.input}
            value={formData.email}
            onChangeText={(text) => handleChange("email", text)}
            placeholder="Enter your email"
            placeholderTextColor="#767676"
            keyboardType="email-address"
            autoCapitalize="none"
            accessibilityLabel="Email Address"
            accessibilityHint="Enter your email address"
            importantForAutofill="yes"
            autoComplete="email"
            textContentType="emailAddress"
          />
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <Text style={styles.label} accessibilityRole="text">
            Password
          </Text>
          <TextInput
            style={styles.input}
            value={formData.password}
            onChangeText={(text) => handleChange("password", text)}
            placeholder="Create a password"
            placeholderTextColor="#767676"
            secureTextEntry={true}
            accessibilityLabel="Password"
            accessibilityHint="Create your password"
            importantForAutofill="yes"
            autoComplete="password"
            textContentType="password"
          />
        </View>

        {/* Date of Birth */}
        <View style={styles.inputContainer}>
          <Text style={styles.label} accessibilityRole="text">
            Date of Birth
          </Text>
          <TouchableOpacity
            style={styles.dateInput}
            onPress={() => setShowDatePicker(true)}
            accessibilityLabel="Date of Birth"
            accessibilityHint="Tap to select your date of birth"
            accessibilityRole="button"
          >
            <Text style={styles.dateText}>
              {formData.dateOfBirth.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={formData.dateOfBirth}
              mode="date"
              display="default"
              onChange={onDateChange}
              maximumDate={new Date()}
              accessibilityLabel="Date picker"
            />
          )}
        </View>

        {/* Gender */}
        <View style={styles.inputContainer}>
          <Text style={styles.label} accessibilityRole="text">
            Gender
          </Text>
          <View style={styles.pickerContainer} accessibilityRole="combobox">
            <Picker
              selectedValue={formData.gender}
              onValueChange={(itemValue) => handleChange("gender", itemValue)}
              style={styles.picker}
              accessibilityLabel="Gender selection"
            >
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Non-binary" value="non-binary" />
              <Picker.Item
                label="Prefer not to say"
                value="prefer-not-to-say"
              />
            </Picker>
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.submitButton]}
            onPress={handleSubmit}
            accessibilityLabel="Submit registration"
            accessibilityHint="Submit your registration form"
            accessibilityRole="button"
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={handleCancel}
            accessibilityLabel="Cancel registration"
            accessibilityHint="Cancel the registration process"
            accessibilityRole="button"
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
    backgroundColor: "#fff",
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 30,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 15,
    fontSize: 16,
    color: "#000",
    backgroundColor: "#fff",
    minHeight: 50, // Adequate touch target size
  },
  dateInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 15,
    justifyContent: "center",
    minHeight: 50, // Adequate touch target size
  },
  dateText: {
    fontSize: 16,
    color: "#000",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    overflow: "hidden",
    minHeight: 50, // Adequate touch target size
    justifyContent: "center",
  },
  picker: {
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 25,
    minWidth: 120,
    minHeight: 50, // Adequate touch target size
    justifyContent: "center",
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: "#007AFF",
  },
  cancelButton: {
    backgroundColor: "#FF3B30",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default RegistrationScreen;
