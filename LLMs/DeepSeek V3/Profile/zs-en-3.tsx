import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  AccessibilityInfo,
  Platform,
} from "react-native";

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
  });

  const handleInputChange = (field, value) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, you would save to an API here
    if (Platform.OS === "ios") {
      AccessibilityInfo.announceForAccessibility("Profile saved successfully");
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      {/* Profile Picture */}
      <View style={styles.profilePictureContainer}>
        <Image
          source={{ uri: "https://example.com/profile.jpg" }}
          style={styles.profilePicture}
          accessible={true}
          accessibilityLabel={`Profile picture of ${userData.firstName} ${userData.lastName}`}
          accessibilityRole="image"
        />
        {isEditing && (
          <TouchableOpacity
            style={styles.changePhotoButton}
            activeOpacity={0.7}
            accessibilityLabel="Change profile photo"
            accessibilityHint="Tap to select a new profile photo from your device"
            accessibilityRole="button"
          >
            <Text style={styles.changePhotoText}>Change Photo</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Personal Information */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader} accessibilityRole="header">
          Personal Information
        </Text>

        <View style={styles.inputGroup}>
          <Text
            style={styles.label}
            accessible={true}
            accessibilityLabel="First name"
          >
            First Name
          </Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={userData.firstName}
              onChangeText={(text) => handleInputChange("firstName", text)}
              accessibilityLabel="First name input"
              accessibilityHint="Enter your first name"
              autoComplete="name-given"
              textContentType="givenName"
              importantForAutofill="yes"
            />
          ) : (
            <Text
              style={styles.valueText}
              accessibilityLabel={`First name: ${userData.firstName}`}
            >
              {userData.firstName}
            </Text>
          )}
        </View>

        <View style={styles.inputGroup}>
          <Text
            style={styles.label}
            accessible={true}
            accessibilityLabel="Last name"
          >
            Last Name
          </Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={userData.lastName}
              onChangeText={(text) => handleInputChange("lastName", text)}
              accessibilityLabel="Last name input"
              accessibilityHint="Enter your last name"
              autoComplete="name-family"
              textContentType="familyName"
              importantForAutofill="yes"
            />
          ) : (
            <Text
              style={styles.valueText}
              accessibilityLabel={`Last name: ${userData.lastName}`}
            >
              {userData.lastName}
            </Text>
          )}
        </View>

        <View style={styles.inputGroup}>
          <Text
            style={styles.label}
            accessible={true}
            accessibilityLabel="Email address"
          >
            Email
          </Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={userData.email}
              onChangeText={(text) => handleInputChange("email", text)}
              keyboardType="email-address"
              autoCapitalize="none"
              accessibilityLabel="Email input"
              accessibilityHint="Enter your email address"
              autoComplete="email"
              textContentType="emailAddress"
              importantForAutofill="yes"
            />
          ) : (
            <Text
              style={styles.valueText}
              accessibilityLabel={`Email: ${userData.email}`}
            >
              {userData.email}
            </Text>
          )}
        </View>

        <View style={styles.inputGroup}>
          <Text
            style={styles.label}
            accessible={true}
            accessibilityLabel="Phone number"
          >
            Phone
          </Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={userData.phone}
              onChangeText={(text) => handleInputChange("phone", text)}
              keyboardType="phone-pad"
              accessibilityLabel="Phone number input"
              accessibilityHint="Enter your phone number"
              autoComplete="tel"
              textContentType="telephoneNumber"
              importantForAutofill="yes"
            />
          ) : (
            <Text
              style={styles.valueText}
              accessibilityLabel={`Phone number: ${userData.phone}`}
            >
              {userData.phone}
            </Text>
          )}
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        {isEditing ? (
          <>
            <TouchableOpacity
              style={[styles.button, styles.saveButton]}
              onPress={handleSave}
              activeOpacity={0.7}
              accessibilityLabel="Save profile changes"
              accessibilityRole="button"
              accessibilityHint="Saves all changes made to your profile"
              hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            >
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() => setIsEditing(false)}
              activeOpacity={0.7}
              accessibilityLabel="Cancel editing"
              accessibilityRole="button"
              accessibilityHint="Discards all changes made to your profile"
              hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity
            style={[styles.button, styles.editButton]}
            onPress={() => setIsEditing(true)}
            activeOpacity={0.7}
            accessibilityLabel="Edit profile"
            accessibilityRole="button"
            accessibilityHint="Allows you to edit your profile information"
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  profilePictureContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  changePhotoButton: {
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    minWidth: 150,
    alignItems: "center",
  },
  changePhotoText: {
    color: "#333",
    fontSize: 16,
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#333", // Good contrast for text
  },
  valueText: {
    fontSize: 16,
    color: "#333", // Good contrast for text
    paddingVertical: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    flexWrap: "wrap",
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    minWidth: 150,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  editButton: {
    backgroundColor: "#007AFF", // iOS blue - good contrast
  },
  saveButton: {
    backgroundColor: "#34C759", // iOS green - good contrast
  },
  cancelButton: {
    backgroundColor: "#FF3B30", // iOS red - good contrast
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
