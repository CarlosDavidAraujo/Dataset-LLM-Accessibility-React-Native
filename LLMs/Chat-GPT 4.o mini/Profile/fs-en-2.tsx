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
      {/* Profile Picture */}
      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: "https://example.com/profile.jpg" }}
          style={styles.profileImage}
          accessibilityLabel="User's profile picture"
        />
      </View>

      {/* First Name */}
      <View style={styles.fieldContainer}>
        <Text nativeID="firstNameLabel" style={styles.label}>
          First Name
        </Text>
        <TextInput
          accessibilityLabelledBy="firstNameLabel"
          style={styles.input}
          value="John"
          editable={false}
          placeholder="First Name"
        />
      </View>

      {/* Last Name */}
      <View style={styles.fieldContainer}>
        <Text nativeID="lastNameLabel" style={styles.label}>
          Last Name
        </Text>
        <TextInput
          accessibilityLabelledBy="lastNameLabel"
          style={styles.input}
          value="Doe"
          editable={false}
          placeholder="Last Name"
        />
      </View>

      {/* Email */}
      <View style={styles.fieldContainer}>
        <Text nativeID="emailLabel" style={styles.label}>
          Email
        </Text>
        <TextInput
          accessibilityLabelledBy="emailLabel"
          style={styles.input}
          value="john.doe@example.com"
          editable={false}
          placeholder="Email Address"
        />
      </View>

      {/* Phone */}
      <View style={styles.fieldContainer}>
        <Text nativeID="phoneLabel" style={styles.label}>
          Phone
        </Text>
        <TextInput
          accessibilityLabelledBy="phoneLabel"
          style={styles.input}
          value="(555) 123-4567"
          editable={false}
          placeholder="Phone Number"
        />
      </View>

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
    padding: 20,
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
  fieldContainer: {
    marginBottom: 15,
  },
  label: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#F0F0F0",
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
    color: "#000000",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    minWidth: 100,
    minHeight: 48,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileView;
