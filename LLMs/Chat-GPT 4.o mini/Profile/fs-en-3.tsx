import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <View style={styles.profilePictureContainer}>
        <Image
          source={{ uri: "https://example.com/profile-picture.jpg" }}
          style={styles.profilePicture}
          accessibilityLabel="Profile picture"
        />
      </View>

      {/* First Name */}
      <Text nativeID="firstNameLabel" style={styles.label}>
        First Name
      </Text>
      <TextInput
        accessibilityLabelledBy="firstNameLabel"
        style={styles.input}
        placeholder="Enter first name"
        placeholderTextColor="#B0B0B0"
        textContentType="givenName"
      />

      {/* Last Name */}
      <Text nativeID="lastNameLabel" style={styles.label}>
        Last Name
      </Text>
      <TextInput
        accessibilityLabelledBy="lastNameLabel"
        style={styles.input}
        placeholder="Enter last name"
        placeholderTextColor="#B0B0B0"
        textContentType="familyName"
      />

      {/* Email */}
      <Text nativeID="emailLabel" style={styles.label}>
        Email
      </Text>
      <TextInput
        accessibilityLabelledBy="emailLabel"
        style={styles.input}
        placeholder="Enter email"
        placeholderTextColor="#B0B0B0"
        keyboardType="email-address"
        textContentType="emailAddress"
      />

      {/* Phone */}
      <Text nativeID="phoneLabel" style={styles.label}>
        Phone
      </Text>
      <TextInput
        accessibilityLabelledBy="phoneLabel"
        style={styles.input}
        placeholder="Enter phone number"
        placeholderTextColor="#B0B0B0"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
      />

      {/* Edit Button */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Edit profile information"
      >
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>

      {/* Save Button */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Save profile information"
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  profilePictureContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  label: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 8,
    marginBottom: 12,
    color: "#000000",
  },
  button: {
    minWidth: 160,
    minHeight: 48,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default ProfileScreen;
