import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

// Sample profile data
const initialProfile = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+1234567890",
  profilePic: "https://example.com/profile.jpg",
};

const ProfileScreen = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    // Save profile data (could be an API call here)
  };

  const handleChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <View style={styles.profilePicContainer}>
        <Image
          source={{ uri: profile.profilePic }}
          style={styles.profilePic}
          accessibilityLabel="Profile picture"
        />
      </View>

      {/* Name Fields */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          value={profile.firstName}
          onChangeText={(text) => handleChange("firstName", text)}
          editable={isEditing}
          style={styles.input}
          accessibilityLabel="First Name input"
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          value={profile.lastName}
          onChangeText={(text) => handleChange("lastName", text)}
          editable={isEditing}
          style={styles.input}
          accessibilityLabel="Last Name input"
        />
      </View>

      {/* Email Field */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={profile.email}
          onChangeText={(text) => handleChange("email", text)}
          editable={isEditing}
          style={styles.input}
          accessibilityLabel="Email input"
          keyboardType="email-address"
        />
      </View>

      {/* Phone Field */}
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Phone</Text>
        <TextInput
          value={profile.phone}
          onChangeText={(text) => handleChange("phone", text)}
          editable={isEditing}
          style={styles.input}
          accessibilityLabel="Phone input"
          keyboardType="phone-pad"
        />
      </View>

      {/* Edit / Save Button */}
      <TouchableOpacity
        onPress={() => setIsEditing(!isEditing)}
        style={[styles.button, styles.editButton]}
        accessibilityLabel={isEditing ? "Save changes" : "Edit profile"}
      >
        <Text style={styles.buttonText}>{isEditing ? "Save" : "Edit"}</Text>
      </TouchableOpacity>

      {/* Accessibility Best Practices */}
      <View>
        <Text style={styles.text}>
          Use proper contrast ratios and adequate touch targets for better
          accessibility.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  profilePicContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: "#ddd",
    borderWidth: 2,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 5,
  },
  editButton: {
    backgroundColor: "#007BFF",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  text: {
    fontSize: 14,
    color: "#555",
    marginTop: 20,
  },
});

export default ProfileScreen;
