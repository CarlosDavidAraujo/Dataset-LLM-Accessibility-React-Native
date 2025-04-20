import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const ProfileView = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/150" }} // Replace with actual profile picture URL
        style={styles.profileImage}
        accessibilityLabel="User profile picture"
      />

      <Text nativeID="firstNameLabel" style={styles.label}>
        First Name
      </Text>
      <TextInput
        accessibilityLabelledBy="firstNameLabel"
        style={styles.input}
        defaultValue="John"
      />

      <Text nativeID="lastNameLabel" style={styles.label}>
        Last Name
      </Text>
      <TextInput
        accessibilityLabelledBy="lastNameLabel"
        style={styles.input}
        defaultValue="Doe"
      />

      <Text nativeID="emailLabel" style={styles.label}>
        Email
      </Text>
      <TextInput
        accessibilityLabelledBy="emailLabel"
        style={styles.input}
        defaultValue="john.doe@example.com"
        keyboardType="email-address"
      />

      <Text nativeID="phoneLabel" style={styles.label}>
        Phone
      </Text>
      <TextInput
        accessibilityLabelledBy="phoneLabel"
        style={styles.input}
        defaultValue="123-456-7890"
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF", // Good contrast with dark text
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#000000", // Good contrast
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    color: "#000000", // Good contrast
  },
  button: {
    backgroundColor: "#007AFF", // Example accessible color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    minWidth: 48,
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF", // Good contrast
    fontSize: 16,
  },
});

export default ProfileView;
