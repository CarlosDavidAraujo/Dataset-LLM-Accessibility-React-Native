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
        source={{ uri: "https://via.placeholder.com/150" }} // Replace with actual profile image URL
        style={styles.profileImage}
        accessibilityLabel="User profile picture"
      />

      <Text style={styles.header}>User Profile</Text>

      <Text nativeID="firstNameLabel" style={styles.label}>
        First Name
      </Text>
      <TextInput
        accessibilityLabelledBy="firstNameLabel"
        style={styles.input}
        value="John" // Replace with actual user data
        editable={false}
      />

      <Text nativeID="lastNameLabel" style={styles.label}>
        Last Name
      </Text>
      <TextInput
        accessibilityLabelledBy="lastNameLabel"
        style={styles.input}
        value="Doe" // Replace with actual user data
        editable={false}
      />

      <Text nativeID="emailLabel" style={styles.label}>
        Email
      </Text>
      <TextInput
        accessibilityLabelledBy="emailLabel"
        style={styles.input}
        value="john.doe@example.com" // Replace with actual user data
        editable={false}
      />

      <Text nativeID="phoneLabel" style={styles.label}>
        Phone
      </Text>
      <TextInput
        accessibilityLabelledBy="phoneLabel"
        style={styles.input}
        value="+1 123-456-7890" // Replace with actual user data
        editable={false}
      />

      <TouchableOpacity
        style={styles.editButton}
        accessibilityLabel="Edit profile information"
      >
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.saveButton}
        accessibilityLabel="Save profile changes"
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFFFFF", // Good Contrast with dark texts.
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    alignSelf: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000000", // good contrast with white background.
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#000000", // good contrast with white background.
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: "#000000", // good contrast with white background.
  },
  editButton: {
    backgroundColor: "#007AFF", // Example Blue, good contrast with white text.
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    minWidth: 48,
    minHeight: 48,
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "#28A745", // Example Green, good contrast with white text.
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    minWidth: 48,
    minHeight: 48,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default ProfileView;
