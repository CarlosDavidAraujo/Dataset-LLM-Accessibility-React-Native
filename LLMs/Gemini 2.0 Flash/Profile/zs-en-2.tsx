import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const ProfileView = () => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [profilePicture, setProfilePicture] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePicture(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    // Implement your save logic here
    setIsEditing(false);
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.profilePictureContainer}
        onPress={pickImage}
        accessibilityRole="button"
        accessibilityLabel="Change profile picture"
      >
        <Image
            source={
              profilePicture
                ? { uri: profilePicture }
                : { uri: "https://via.placeholder.com/150}" }
            }
          style={styles.profilePicture}
        />
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          editable={isEditing}
          accessibilityLabel="First Name"
          accessibilityHint={
            isEditing
              ? "Editable. Double tap to change your first name."
              : "Read only."
          }
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          editable={isEditing}
          accessibilityLabel="Last Name"
          accessibilityHint={
            isEditing
              ? "Editable. Double tap to change your last name."
              : "Read only."
          }
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          editable={isEditing}
          keyboardType="email-address"
          accessibilityLabel="Email Address"
          accessibilityHint={
            isEditing
              ? "Editable. Double tap to change your email address."
              : "Read only."
          }
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          editable={isEditing}
          keyboardType="phone-pad"
          accessibilityLabel="Phone Number"
          accessibilityHint={
            isEditing
              ? "Editable. Double tap to change your phone number."
              : "Read only."
          }
        />
      </View>

      <View style={styles.buttonContainer}>
        {isEditing ? (
          <TouchableOpacity
            style={[styles.button, styles.saveButton]}
            onPress={handleSave}
            accessibilityRole="button"
            accessibilityLabel="Save Changes"
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.button, styles.editButton]}
            onPress={() => setIsEditing(true)}
            accessibilityRole="button"
            accessibilityLabel="Edit Profile"
          >
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  profilePictureContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    minHeight: 44, // Minimum touch target size
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 120, // Minimum touch target size
    alignItems: "center",
    justifyContent: "center",
  },
  editButton: {
    backgroundColor: "#007AFF", // Example primary color
  },
  saveButton: {
    backgroundColor: "#4CD964", // Example success color
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default ProfileView;
