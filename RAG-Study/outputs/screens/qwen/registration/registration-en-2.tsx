import React, { useState } from "react";
import {
  Alert,
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
  const [gender, setGender] = useState<"male" | "female" | "other" | null>(
    null,
  );
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = () => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !dateOfBirth ||
      !gender
    ) {
      Alert.alert("Error", "Please fill all required fields");
      return;
    }
    Alert.alert("Success", "Registration submitted successfully!");
  };

  const handleCancel = () => {
    Alert.alert("Confirm Cancel", "Are you sure you want to cancel?", [
      { text: "No", style: "cancel" },
      {
        text: "Yes",
        onPress: () => Alert.alert("Cancelled", "Registration cancelled"),
      },
    ]);
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
          accessibilityLabel="First name"
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
          accessibilityLabel="Last name"
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
          accessibilityLabel="Email address"
          accessibilityLabelledBy="emailLabel"
          accessibilityRole="text"
          keyboardType="email-address"
          autoComplete="email"
          textContentType="emailAddress"
          placeholder="your.email@example.com"
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
          secureTextEntry
          accessibilityLabel="Password"
          accessibilityLabelledBy="passwordLabel"
          accessibilityRole="text"
          autoComplete="password"
          textContentType="password"
          placeholder="Create a strong password"
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
          accessibilityLabel="Date of birth"
          accessibilityLabelledBy="dobLabel"
          accessibilityRole="text"
          placeholder="MM/DD/YYYY"
          keyboardType="numbers-and-punctuation"
        />
      </View>

      {/* Gender */}
      <View style={styles.inputGroup}>
        <Text nativeID="genderLabel" style={styles.label}>
          Gender *
        </Text>
        <View style={styles.radioGroup} accessibilityRole="radiogroup">
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setGender("male")}
            accessibilityRole="radio"
            accessibilityState={{ selected: gender === "male" }}
            accessibilityLabel="Male"
          >
            <View
              style={[
                styles.radioCircle,
                gender === "male" && styles.selectedRadio,
              ]}
            />
            <Text style={styles.radioLabel}>Male</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setGender("female")}
            accessibilityRole="radio"
            accessibilityState={{ selected: gender === "female" }}
            accessibilityLabel="Female"
          >
            <View
              style={[
                styles.radioCircle,
                gender === "female" && styles.selectedRadio,
              ]}
            />
            <Text style={styles.radioLabel}>Female</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setGender("other")}
            accessibilityRole="radio"
            accessibilityState={{ selected: gender === "other" }}
            accessibilityLabel="Other"
          >
            <View
              style={[
                styles.radioCircle,
                gender === "other" && styles.selectedRadio,
              ]}
            />
            <Text style={styles.radioLabel}>Other</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Terms & Conditions */}
      <View style={styles.inputGroup}>
        <View style={styles.switchContainer}>
          <Switch
            value={termsAccepted}
            onValueChange={setTermsAccepted}
            accessibilityLabel="Accept terms and conditions"
          />
          <Text style={styles.switchLabel}>
            I accept the Terms and Conditions *
          </Text>
        </View>
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
    marginVertical: 20,
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
    height: 48,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#666",
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRadio: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
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
    fontSize: 16,
    marginLeft: 8,
    color: "#333",
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  button: {
    flex: 1,
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
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
