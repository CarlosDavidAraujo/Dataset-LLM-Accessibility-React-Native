import React, { useState } from "react";
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
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
  const [gender, setGender] = useState<"male" | "female" | "other">("other");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = () => {
    if (!firstName || !lastName || !email || !password) {
      Alert.alert("Error", "Please fill all required fields");
      return;
    }
    Alert.alert("Success", "Registration submitted successfully!");
  };

  const handleCancel = () => {
    Alert.alert(
      "Confirm Cancel",
      "Are you sure you want to cancel registration?",
      [
        { text: "No", style: "cancel" },
        { text: "Yes", onPress: () => console.log("Registration cancelled") },
      ],
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      //accessibilityRole="form" valor invalido
      accessible={true}
    >
      <Text style={styles.title} accessibilityRole="header">
        Create Account
      </Text>

      {/* First Name */}
      <View style={styles.fieldContainer}>
        <Text nativeID="firstNameLabel" style={styles.label}>
          First Name *
        </Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          accessibilityLabel="First name"
          accessibilityLabelledBy="firstNameLabel"
          accessibilityRole="text"
          textContentType="givenName"
          autoComplete="given-name"
          placeholder="Enter your first name"
        />
      </View>

      {/* Last Name */}
      <View style={styles.fieldContainer}>
        <Text nativeID="lastNameLabel" style={styles.label}>
          Last Name *
        </Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          accessibilityLabel="Last name"
          accessibilityLabelledBy="lastNameLabel"
          accessibilityRole="text"
          textContentType="familyName"
          autoComplete="family-name"
          placeholder="Enter your last name"
        />
      </View>

      {/* Email */}
      <View style={styles.fieldContainer}>
        <Text nativeID="emailLabel" style={styles.label}>
          Email Address *
        </Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          accessibilityLabel="Email address"
          accessibilityLabelledBy="emailLabel"
          accessibilityRole="text"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoComplete="email"
          placeholder="your.email@example.com"
        />
      </View>

      {/* Password */}
      <View style={styles.fieldContainer}>
        <Text nativeID="passwordLabel" style={styles.label}>
          Password *
        </Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          accessibilityLabel="Password"
          accessibilityLabelledBy="passwordLabel"
          accessibilityRole="text"
          secureTextEntry
          textContentType="newPassword"
          autoComplete="password-new"
          placeholder="Create a strong password"
        />
      </View>

      {/* Date of Birth */}
      <View style={styles.fieldContainer}>
        <Text nativeID="dobLabel" style={styles.label}>
          Date of Birth
        </Text>
        <TextInput
          style={styles.input}
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
          accessibilityLabel="Date of birth"
          accessibilityLabelledBy="dobLabel"
          accessibilityRole="text"
          placeholder="MM/DD/YYYY"
          keyboardType={
            Platform.OS === "ios" ? "numbers-and-punctuation" : "numeric"
          }
        />
      </View>

      {/* Gender Selection */}
      <View style={styles.fieldContainer}>
        <Text nativeID="genderLabel" style={styles.label}>
          Gender
        </Text>
        <View
          style={styles.radioGroup}
          accessibilityRole="radiogroup"
          accessibilityLabelledBy="genderLabel"
        >
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setGender("male")}
            accessibilityRole="radio"
            accessibilityState={{ checked: gender === "male" }}
            accessibilityLabel="Male"
          >
            <View
              style={[
                styles.radioCircle,
                gender === "male" && styles.selectedRadio,
              ]}
            >
              {gender === "male" && <View style={styles.radioInner} />}
            </View>
            <Text style={styles.radioLabel}>Male</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setGender("female")}
            accessibilityRole="radio"
            accessibilityState={{ checked: gender === "female" }}
            accessibilityLabel="Female"
          >
            <View
              style={[
                styles.radioCircle,
                gender === "female" && styles.selectedRadio,
              ]}
            >
              {gender === "female" && <View style={styles.radioInner} />}
            </View>
            <Text style={styles.radioLabel}>Female</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setGender("other")}
            accessibilityRole="radio"
            accessibilityState={{ checked: gender === "other" }}
            accessibilityLabel="Other"
          >
            <View
              style={[
                styles.radioCircle,
                gender === "other" && styles.selectedRadio,
              ]}
            >
              {gender === "other" && <View style={styles.radioInner} />}
            </View>
            <Text style={styles.radioLabel}>Other</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Terms Agreement */}
      <View style={styles.fieldContainer}>
        <View style={styles.switchContainer}>
          <Switch
            value={agreedToTerms}
            onValueChange={setAgreedToTerms}
            accessibilityLabel="Agree to terms and conditions"
            accessibilityRole="switch"
          />
          <Text nativeID="termsLabel" style={styles.switchLabel}>
            I agree to the Terms and Conditions
          </Text>
        </View>
      </View>

      {/* Action Buttons */}
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

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
    color: "#333",
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#999",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  selectedRadio: {
    borderColor: "#007AFF",
  },
  radioInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#007AFF",
  },
  radioLabel: {
    fontSize: 16,
    color: "#333",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  switchLabel: {
    marginLeft: 12,
    fontSize: 16,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
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
