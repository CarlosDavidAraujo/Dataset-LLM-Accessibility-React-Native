import React, { useState } from "react";
import {
  AccessibilityInfo,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [phone, setPhone] = useState("+1 (555) 123-4567");

  const handleSave = () => {
    setIsEditing(false);
    if (AccessibilityInfo) {
      AccessibilityInfo.announceForAccessibility(
        "Profile information saved successfully",
      );
    }
    Alert.alert("Success", "Your profile has been updated");
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <ScrollView
      style={styles.container}
      //accessibilityRole="form" valor invalido
      accessible={true}
      accessibilityLabel="Profile form"
    >
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: "https://placehold.co/100x100" }}
          style={styles.profileImage}
          accessibilityRole="image"
          accessibilityLabel="Profile picture"
          importantForAccessibility="yes"
        />
        <Text style={styles.profileName} accessibilityRole="header">
          {firstName} {lastName}
        </Text>
      </View>

      <View style={styles.formGroup}>
        <Text
          nativeID="firstNameLabel"
          style={styles.label}
          accessibilityRole="text"
        >
          First Name
        </Text>
        <TextInput
          style={[styles.input, !isEditing && styles.disabledInput]}
          value={firstName}
          onChangeText={setFirstName}
          editable={isEditing}
          accessibilityLabel="First name"
          accessibilityLabelledBy="firstNameLabel"
          accessibilityRole="text"
          autoCapitalize="words"
          autoComplete="given-name"
          textContentType="givenName"
        />
      </View>

      <View style={styles.formGroup}>
        <Text
          nativeID="lastNameLabel"
          style={styles.label}
          accessibilityRole="text"
        >
          Last Name
        </Text>
        <TextInput
          style={[styles.input, !isEditing && styles.disabledInput]}
          value={lastName}
          onChangeText={setLastName}
          editable={isEditing}
          accessibilityLabel="Last name"
          accessibilityLabelledBy="lastNameLabel"
          accessibilityRole="text"
          autoCapitalize="words"
          autoComplete="family-name"
          textContentType="familyName"
        />
      </View>

      <View style={styles.formGroup}>
        <Text
          nativeID="emailLabel"
          style={styles.label}
          accessibilityRole="text"
        >
          Email
        </Text>
        <TextInput
          style={[styles.input, !isEditing && styles.disabledInput]}
          value={email}
          onChangeText={setEmail}
          editable={isEditing}
          accessibilityLabel="Email address"
          accessibilityLabelledBy="emailLabel"
          accessibilityRole="text"
          keyboardType="email-address"
          autoComplete="email"
          textContentType="emailAddress"
        />
      </View>

      <View style={styles.formGroup}>
        <Text
          nativeID="phoneLabel"
          style={styles.label}
          accessibilityRole="text"
        >
          Phone Number
        </Text>
        <TextInput
          style={[styles.input, !isEditing && styles.disabledInput]}
          value={phone}
          onChangeText={setPhone}
          editable={isEditing}
          accessibilityLabel="Phone number"
          accessibilityLabelledBy="phoneLabel"
          accessibilityRole="text"
          keyboardType="phone-pad"
          autoComplete="tel"
          textContentType="telephoneNumber"
        />
      </View>

      <View style={styles.buttonContainer}>
        {isEditing ? (
          <>
            <TouchableOpacity
              style={[styles.button, styles.saveButton]}
              onPress={handleSave}
              accessibilityRole="button"
              accessibilityLabel="Save profile changes"
              accessibilityHint="Saves your updated profile information"
            >
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={handleCancel}
              accessibilityRole="button"
              accessibilityLabel="Cancel editing"
              accessibilityHint="Cancels profile editing and reverts changes"
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity
            style={[styles.button, styles.editButton]}
            onPress={handleEdit}
            accessibilityRole="button"
            accessibilityLabel="Edit profile"
            accessibilityHint="Enables editing mode for your profile information"
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
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 24,
    paddingVertical: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "#ddd",
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  disabledInput: {
    backgroundColor: "#f0f0f0",
    color: "#666",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  button: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 4,
  },
  editButton: {
    backgroundColor: "#007AFF",
  },
  saveButton: {
    backgroundColor: "#34C759",
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

export default ProfileScreen;
