import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const ProfileViewScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
  });

  const handleInputChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <View style={styles.container} accessible={true}>
      {/* Profile Picture */}
      <View style={styles.profilePictureContainer}>
        <Image
          source={{ uri: "https://example.com/profile.jpg" }}
          style={styles.profilePicture}
          accessibilityLabel="Profile picture of John Doe"
          accessibilityRole="image"
        />
      </View>

      {/* Profile Fields */}
      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text nativeID="firstNameLabel" style={styles.label}>
            First Name
          </Text>
          {isEditing ? (
            <TextInput
              value={profile.firstName}
              onChangeText={(text) => handleInputChange("firstName", text)}
              style={styles.input}
              accessibilityLabelledBy="firstNameLabel"
              accessibilityLabel="First name input field"
              autoComplete="name-given"
              textContentType="givenName"
            />
          ) : (
            <Text style={styles.textValue}>{profile.firstName}</Text>
          )}
        </View>

        <View style={styles.inputGroup}>
          <Text nativeID="lastNameLabel" style={styles.label}>
            Last Name
          </Text>
          {isEditing ? (
            <TextInput
              value={profile.lastName}
              onChangeText={(text) => handleInputChange("lastName", text)}
              style={styles.input}
              accessibilityLabelledBy="lastNameLabel"
              accessibilityLabel="Last name input field"
              autoComplete="name-family"
              textContentType="familyName"
            />
          ) : (
            <Text style={styles.textValue}>{profile.lastName}</Text>
          )}
        </View>

        <View style={styles.inputGroup}>
          <Text nativeID="emailLabel" style={styles.label}>
            Email
          </Text>
          {isEditing ? (
            <TextInput
              value={profile.email}
              onChangeText={(text) => handleInputChange("email", text)}
              style={styles.input}
              accessibilityLabelledBy="emailLabel"
              accessibilityLabel="Email input field"
              keyboardType="email-address"
              autoComplete="email"
              textContentType="emailAddress"
            />
          ) : (
            <Text style={styles.textValue}>{profile.email}</Text>
          )}
        </View>

        <View style={styles.inputGroup}>
          <Text nativeID="phoneLabel" style={styles.label}>
            Phone
          </Text>
          {isEditing ? (
            <TextInput
              value={profile.phone}
              onChangeText={(text) => handleInputChange("phone", text)}
              style={styles.input}
              accessibilityLabelledBy="phoneLabel"
              accessibilityLabel="Phone number input field"
              keyboardType="phone-pad"
              autoComplete="tel"
              textContentType="telephoneNumber"
            />
          ) : (
            <Text style={styles.textValue}>{profile.phone}</Text>
          )}
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsEditing(!isEditing)}
          accessibilityLabel={
            isEditing ? "Cancel editing profile" : "Edit profile"
          }
          accessibilityRole="button"
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>{isEditing ? "Cancel" : "Edit"}</Text>
        </TouchableOpacity>

        {isEditing && (
          <TouchableOpacity
            style={[styles.button, styles.saveButton]}
            onPress={() => setIsEditing(false)}
            accessibilityLabel="Save profile changes"
            accessibilityRole="button"
            activeOpacity={0.7}
          >
            <Text style={[styles.buttonText, styles.saveButtonText]}>Save</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  profilePictureContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  formContainer: {
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: "#333333", // Dark gray for good contrast on white
    marginBottom: 4,
    fontWeight: "600",
  },
  textValue: {
    fontSize: 16,
    color: "#000000", // Black for best contrast on white
    paddingVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    color: "#000000", // Black text for contrast
    backgroundColor: "#FFFFFF", // White background
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  button: {
    minWidth: 120,
    minHeight: 48, // Meets minimum touch target size
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  saveButton: {
    backgroundColor: "#0066CC", // Dark blue background
  },
  buttonText: {
    color: "#000000", // Black text for contrast on light gray
    fontSize: 16,
    fontWeight: "600",
  },
  saveButtonText: {
    color: "#FFFFFF", // White text for contrast on dark blue
  },
});

export default ProfileViewScreen;
