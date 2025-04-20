import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  AccessibilityInfo,
  Platform,
} from "react-native";

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    profilePicture: "https://example.com/profile.jpg",
  });

  const handleInputChange = (field: string, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, you would save to backend here
    if (Platform.OS === "ios") {
      AccessibilityInfo.announceForAccessibility("Profile saved successfully");
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      accessible={true}
      accessibilityLabel="Profile screen"
    >
      {/* Profile Picture */}
      <View style={styles.profilePictureContainer}>
        <Image
          source={{ uri: profile.profilePicture }}
          style={styles.profilePicture}
          accessible={true}
          accessibilityLabel={`Profile picture of ${profile.firstName} ${profile.lastName}`}
          accessibilityRole="image"
        />
        {isEditing && (
          <TouchableOpacity
            style={styles.changePhotoButton}
            accessible={true}
            accessibilityLabel="Change profile picture"
            accessibilityHint="Opens options to change your profile photo"
            accessibilityRole="button"
          >
            <Text style={styles.changePhotoButtonText}>Change Photo</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Profile Fields */}
      <View style={styles.fieldsContainer}>
        <View style={styles.fieldGroup}>
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
              value={profile.firstName}
              onChangeText={(text) => handleInputChange("firstName", text)}
              accessible={true}
              accessibilityLabel="First name input"
              accessibilityHint="Enter your first name"
              autoCorrect={false}
              importantForAutofill="yes"
            />
          ) : (
            <Text
              style={styles.fieldValue}
              accessible={true}
              accessibilityLabel={`First name is ${profile.firstName}`}
            >
              {profile.firstName}
            </Text>
          )}
        </View>

        <View style={styles.fieldGroup}>
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
              value={profile.lastName}
              onChangeText={(text) => handleInputChange("lastName", text)}
              accessible={true}
              accessibilityLabel="Last name input"
              accessibilityHint="Enter your last name"
              autoCorrect={false}
            />
          ) : (
            <Text
              style={styles.fieldValue}
              accessible={true}
              accessibilityLabel={`Last name is ${profile.lastName}`}
            >
              {profile.lastName}
            </Text>
          )}
        </View>

        <View style={styles.fieldGroup}>
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
              value={profile.email}
              onChangeText={(text) => handleInputChange("email", text)}
              keyboardType="email-address"
              autoCapitalize="none"
              accessible={true}
              accessibilityLabel="Email input"
              accessibilityHint="Enter your email address"
              //importantForAutofill="email" valor incorreto
            />
          ) : (
            <Text
              style={styles.fieldValue}
              accessible={true}
              accessibilityLabel={`Email address is ${profile.email}`}
            >
              {profile.email}
            </Text>
          )}
        </View>

        <View style={styles.fieldGroup}>
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
              value={profile.phone}
              onChangeText={(text) => handleInputChange("phone", text)}
              keyboardType="phone-pad"
              accessible={true}
              accessibilityLabel="Phone number input"
              accessibilityHint="Enter your phone number"
              //importantForAutofill="tel" valor incorreto
            />
          ) : (
            <Text
              style={styles.fieldValue}
              accessible={true}
              accessibilityLabel={`Phone number is ${profile.phone}`}
            >
              {profile.phone}
            </Text>
          )}
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonsContainer}>
        {isEditing ? (
          <>
            <TouchableOpacity
              style={[styles.button, styles.saveButton]}
              onPress={handleSave}
              accessible={true}
              accessibilityLabel="Save profile changes"
              accessibilityRole="button"
              accessibilityHint="Saves all changes made to your profile"
            >
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() => setIsEditing(false)}
              accessible={true}
              accessibilityLabel="Cancel editing"
              accessibilityRole="button"
              accessibilityHint="Discards all changes made to your profile"
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity
            style={[styles.button, styles.editButton]}
            onPress={() => setIsEditing(true)}
            accessible={true}
            accessibilityLabel="Edit profile"
            accessibilityRole="button"
            accessibilityHint="Opens profile editing mode"
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
    backgroundColor: "#FFFFFF",
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
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#E0E0E0",
    borderRadius: 20,
    minHeight: 44, // Minimum touch target size for accessibility
    justifyContent: "center",
  },
  changePhotoButtonText: {
    color: "#333333",
    fontSize: 14,
    fontWeight: "500",
  },
  fieldsContainer: {
    marginBottom: 30,
  },
  fieldGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#424242", // Dark gray for sufficient contrast
    marginBottom: 6,
  },
  fieldValue: {
    fontSize: 16,
    color: "#212121", // Almost black for best contrast
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  input: {
    fontSize: 16,
    color: "#212121",
    borderWidth: 1,
    borderColor: "#BDBDBD",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#FAFAFA",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    minWidth: 120,
    minHeight: 48, // Minimum touch target size for accessibility
    justifyContent: "center",
    alignItems: "center",
  },
  editButton: {
    backgroundColor: "#1976D2", // Blue
  },
  saveButton: {
    backgroundColor: "#388E3C", // Green
  },
  cancelButton: {
    backgroundColor: "#D32F2F", // Red
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ProfileScreen;
