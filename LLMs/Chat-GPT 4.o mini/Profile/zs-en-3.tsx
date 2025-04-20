import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  AccessibilityInfo,
} from "react-native";

const ProfileScreen = () => {
  // Sample initial profile data
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // Implement save functionality here
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: "https://example.com/profile-pic.jpg" }}
          style={styles.profileImage}
          accessible={true}
          accessibilityLabel="Profile picture of John Doe"
        />
        <Text style={styles.headerText}>Profile</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text
          style={styles.label}
          accessible={true}
          accessibilityLabel="First Name"
        >
          First Name
        </Text>
        <TextInput
          style={styles.input}
          value={profileData.firstName}
          editable={isEditing}
          onChangeText={(text) =>
            setProfileData({ ...profileData, firstName: text })
          }
          accessible={true}
          accessibilityLabel="First name input field"
        />

        <Text
          style={styles.label}
          accessible={true}
          accessibilityLabel="Last Name"
        >
          Last Name
        </Text>
        <TextInput
          style={styles.input}
          value={profileData.lastName}
          editable={isEditing}
          onChangeText={(text) =>
            setProfileData({ ...profileData, lastName: text })
          }
          accessible={true}
          accessibilityLabel="Last name input field"
        />

        <Text
          style={styles.label}
          accessible={true}
          accessibilityLabel="Email Address"
        >
          Email
        </Text>
        <TextInput
          style={styles.input}
          value={profileData.email}
          editable={isEditing}
          onChangeText={(text) =>
            setProfileData({ ...profileData, email: text })
          }
          accessible={true}
          accessibilityLabel="Email input field"
        />

        <Text
          style={styles.label}
          accessible={true}
          accessibilityLabel="Phone Number"
        >
          Phone
        </Text>
        <TextInput
          style={styles.input}
          value={profileData.phone}
          editable={isEditing}
          onChangeText={(text) =>
            setProfileData({ ...profileData, phone: text })
          }
          accessible={true}
          accessibilityLabel="Phone input field"
        />
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={handleEdit}
          accessible={true}
          accessibilityLabel="Edit Profile"
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>

        {isEditing && (
          <TouchableOpacity
            style={[styles.button, styles.saveButton]}
            onPress={handleSave}
            accessible={true}
            accessibilityLabel="Save Changes"
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
  },
  infoContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
    fontSize: 16,
    color: "#333",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    minWidth: 100,
    alignItems: "center",
  },
  editButton: {
    backgroundColor: "#4CAF50",
  },
  saveButton: {
    backgroundColor: "#2196F3",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});

export default ProfileScreen;
