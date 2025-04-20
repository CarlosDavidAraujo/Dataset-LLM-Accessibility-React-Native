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
  Dimensions,
} from "react-native";

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    profilePicture: "https://example.com/profile.jpg",
  });

  const handleInputChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically send the updated data to your backend
    AccessibilityInfo.announceForAccessibility("Profile saved successfully");
  };

  const windowWidth = Dimensions.get("window").width;
  const minTouchTargetSize = 48; // Minimum recommended touch target size

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
            style={[styles.changePhotoButton, { width: windowWidth * 0.4 }]}
            onPress={() => console.log("Change photo pressed")}
            accessible={true}
            accessibilityLabel="Change profile picture"
            accessibilityHint="Opens options to change your profile photo"
            accessibilityRole="button"
          >
            <Text style={styles.changePhotoButtonText}>Change Photo</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Personal Information */}
      <View style={styles.infoContainer}>
        <View style={styles.fieldContainer}>
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
            />
          ) : (
            <Text
              style={styles.value}
              accessible={true}
              accessibilityLabel={`First name is ${profile.firstName}`}
            >
              {profile.firstName}
            </Text>
          )}
        </View>

        <View style={styles.fieldContainer}>
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
              style={styles.value}
              accessible={true}
              accessibilityLabel={`Last name is ${profile.lastName}`}
            >
              {profile.lastName}
            </Text>
          )}
        </View>

        <View style={styles.fieldContainer}>
          <Text
            style={styles.label}
            accessible={true}
            accessibilityLabel="Email"
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
            />
          ) : (
            <Text
              style={styles.value}
              accessible={true}
              accessibilityLabel={`Email is ${profile.email}`}
            >
              {profile.email}
            </Text>
          )}
        </View>

        <View style={styles.fieldContainer}>
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
            />
          ) : (
            <Text
              style={styles.value}
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
        {!isEditing ? (
          <TouchableOpacity
            style={[
              styles.button,
              { minHeight: minTouchTargetSize, minWidth: minTouchTargetSize },
            ]}
            onPress={() => setIsEditing(true)}
            accessible={true}
            accessibilityLabel="Edit profile"
            accessibilityHint="Allows you to edit your profile information"
            accessibilityRole="button"
          >
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity
              style={[
                styles.button,
                styles.saveButton,
                { minHeight: minTouchTargetSize, minWidth: minTouchTargetSize },
              ]}
              onPress={handleSave}
              accessible={true}
              accessibilityLabel="Save profile changes"
              accessibilityRole="button"
            >
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                styles.cancelButton,
                { minHeight: minTouchTargetSize, minWidth: minTouchTargetSize },
              ]}
              onPress={() => setIsEditing(false)}
              accessible={true}
              accessibilityLabel="Cancel editing"
              accessibilityHint="Discards all changes made to your profile"
              accessibilityRole="button"
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </>
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
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
  changePhotoButton: {
    backgroundColor: "#E0E0E0",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  changePhotoButtonText: {
    color: "#333333",
    fontSize: 16,
    fontWeight: "500",
  },
  infoContainer: {
    marginBottom: 30,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#424242", // Dark gray for sufficient contrast (4.5:1 on white)
    marginBottom: 5,
    fontWeight: "600",
  },
  value: {
    fontSize: 18,
    color: "#212121", // Very dark gray for high contrast (15:1 on white)
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  input: {
    fontSize: 18,
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
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "#1976D2", // Blue with sufficient contrast
  },
  cancelButton: {
    backgroundColor: "#E0E0E0",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ProfileScreen;
