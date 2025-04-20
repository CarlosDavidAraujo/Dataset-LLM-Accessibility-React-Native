import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const ProfileViewScreen = () => {
  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: "https://example.com/profile-picture.jpg" }}
          style={styles.profileImage}
          accessibilityLabel="User's profile picture"
        />
      </View>

      {/* Personal Information Fields */}
      <View style={styles.infoContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          value="John"
          accessibilityLabel="First name input"
          placeholder="Enter your first name"
          placeholderTextColor="#AAAAAA"
        />

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          value="Doe"
          accessibilityLabel="Last name input"
          placeholder="Enter your last name"
          placeholderTextColor="#AAAAAA"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value="john.doe@example.com"
          accessibilityLabel="Email input"
          placeholder="Enter your email"
          keyboardType="email-address"
          placeholderTextColor="#AAAAAA"
        />

        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={styles.input}
          value="123-456-7890"
          accessibilityLabel="Phone number input"
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          placeholderTextColor="#AAAAAA"
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="Edit profile information"
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="Save profile information"
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  profileImageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  infoContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000", // Ensures high contrast for labels
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
    fontSize: 16,
    marginBottom: 15,
    color: "#000000", // High contrast for text input
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 4,
    minWidth: 120, // Minimum width for touch target
    minHeight: 48, // Minimum height for touch target
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});

export default ProfileViewScreen;
