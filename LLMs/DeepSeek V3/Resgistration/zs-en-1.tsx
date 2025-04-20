import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const RegistrationScreen = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: new Date(),
    gender: "",
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === "ios");
    if (selectedDate) {
      handleChange("dateOfBirth", selectedDate);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Submit logic here
      console.log("Form submitted:", formData);
    }
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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Create Account</Text>

        {/* First Name */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={[styles.input, errors.firstName && styles.errorInput]}
            placeholder="Enter your first name"
            placeholderTextColor="#888"
            value={formData.firstName}
            onChangeText={(text) => handleChange("firstName", text)}
            accessibilityLabel="First name"
            accessibilityHint="Enter your first name"
            importantForAutofill="yes"
            autoComplete="name-given"
            textContentType="givenName"
          />
          {errors.firstName && (
            <Text style={styles.errorText} accessibilityLiveRegion="polite">
              {errors.firstName}
            </Text>
          )}
        </View>

        {/* Last Name */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={[styles.input, errors.lastName && styles.errorInput]}
            placeholder="Enter your last name"
            placeholderTextColor="#888"
            value={formData.lastName}
            onChangeText={(text) => handleChange("lastName", text)}
            accessibilityLabel="Last name"
            accessibilityHint="Enter your last name"
            importantForAutofill="yes"
            autoComplete="name-family"
            textContentType="familyName"
          />
          {errors.lastName && (
            <Text style={styles.errorText} accessibilityLiveRegion="polite">
              {errors.lastName}
            </Text>
          )}
        </View>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, errors.email && styles.errorInput]}
            placeholder="Enter your email"
            placeholderTextColor="#888"
            value={formData.email}
            onChangeText={(text) => handleChange("email", text)}
            keyboardType="email-address"
            autoCapitalize="none"
            accessibilityLabel="Email"
            accessibilityHint="Enter your email address"
            importantForAutofill="yes"
            autoComplete="email"
            textContentType="emailAddress"
          />
          {errors.email && (
            <Text style={styles.errorText} accessibilityLiveRegion="polite">
              {errors.email}
            </Text>
          )}
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={[styles.input, errors.password && styles.errorInput]}
            placeholder="Create a password"
            placeholderTextColor="#888"
            value={formData.password}
            onChangeText={(text) => handleChange("password", text)}
            secureTextEntry={true}
            accessibilityLabel="Password"
            accessibilityHint="Create your password (minimum 8 characters)"
            importantForAutofill="yes"
            autoComplete="password-new"
            textContentType="newPassword"
          />
          {errors.password && (
            <Text style={styles.errorText} accessibilityLiveRegion="polite">
              {errors.password}
            </Text>
          )}
        </View>

        {/* Date of Birth */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Date of Birth</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowDatePicker(true)}
            accessibilityLabel="Date of birth"
            accessibilityHint="Select your date of birth"
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
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={handleDateChange}
              maximumDate={new Date()}
              accessibilityLabel="Date picker"
            />
          )}
        </View>

        {/* Gender */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Gender</Text>
          <View style={styles.radioContainer}>
            {["Male", "Female", "Other", "Prefer not to say"].map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.radioOption}
                onPress={() => handleChange("gender", option)}
                accessibilityLabel={`Gender: ${option}`}
                accessibilityRole="radio"
                accessibilityState={{ checked: formData.gender === option }}
              >
                <View style={styles.radioCircle}>
                  {formData.gender === option && (
                    <View style={styles.selectedRadio} />
                  )}
                </View>
                <Text style={styles.radioLabel}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={handleCancel}
            accessibilityLabel="Cancel registration"
            accessibilityRole="button"
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.submitButton]}
            onPress={handleSubmit}
            accessibilityLabel="Submit registration"
            accessibilityRole="button"
          >
            <Text style={styles.buttonText}>Submit</Text>
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
    color: "#333",
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
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#fff",
    justifyContent: "center", // For date input
  },
  errorInput: {
    borderColor: "#e74c3c",
  },
  errorText: {
    color: "#e74c3c",
    fontSize: 14,
    marginTop: 5,
  },
  dateText: {
    fontSize: 16,
    color: "#333",
  },
  radioContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
    marginBottom: 10,
    minHeight: 48, // Minimum touch target size
    minWidth: 48,
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#3498db",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  selectedRadio: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#3498db",
  },
  radioLabel: {
    fontSize: 16,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  button: {
    minHeight: 48, // WCAG minimum touch target size
    minWidth: "48%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  submitButton: {
    backgroundColor: "#3498db",
  },
  cancelButton: {
    backgroundColor: "#e74c3c",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RegistrationScreen;
