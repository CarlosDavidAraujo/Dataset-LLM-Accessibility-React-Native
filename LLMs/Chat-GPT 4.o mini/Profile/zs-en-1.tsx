import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

const ProfileScreen = () => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    // Save updated information logic here
  };

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://example.com/profile.jpg" }} // Replace with actual image URL
          style={styles.profileImage}
          accessible={true}
          accessibilityLabel="User profile picture"
        />
      </View>

      {/* Personal Information */}
      <View style={styles.infoContainer}>
        <Text style={styles.label} accessibilityRole="header">
          Personal Information
        </Text>

        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          editable={isEditing}
          placeholder="First Name"
          placeholderTextColor="#A9A9A9"
          accessible={true}
          accessibilityLabel="First Name"
        />
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          editable={isEditing}
          placeholder="Last Name"
          placeholderTextColor="#A9A9A9"
          accessible={true}
          accessibilityLabel="Last Name"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          editable={isEditing}
          placeholder="Email"
          placeholderTextColor="#A9A9A9"
          keyboardType="email-address"
          accessible={true}
          accessibilityLabel="Email address"
        />
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          editable={isEditing}
          placeholder="Phone"
          placeholderTextColor="#A9A9A9"
          keyboardType="phone-pad"
          accessible={true}
          accessibilityLabel="Phone number"
        />
      </View>

      {/* Edit and Save Buttons */}
      <View style={styles.buttonContainer}>
        {isEditing ? (
          <TouchableOpacity
            style={styles.button}
            onPress={handleSave}
            accessible={true}
            accessibilityLabel="Save updated profile"
            accessibilityHint="Saves changes to your profile information"
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsEditing(true)}
            accessible={true}
            accessibilityLabel="Edit profile"
            accessibilityHint="Allows you to edit your profile information"
          >
            <Text style={styles.buttonText}>Edit</Text>
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
    backgroundColor: "#fff",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  infoContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
    color: "#000",
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    minWidth: 200,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default ProfileScreen;
