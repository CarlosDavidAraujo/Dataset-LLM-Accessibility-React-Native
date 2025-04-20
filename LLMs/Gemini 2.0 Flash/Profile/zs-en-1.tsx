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

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Logic to save the updated profile information
  };

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

  return (
    <ScrollView style={styles.container} accessibilityLabel="Profile View">
      <TouchableOpacity
        style={styles.profilePictureContainer}
        onPress={pickImage}
        accessibilityRole="button"
        accessibilityLabel="Change profile picture"
        accessible={true}
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
        <Text style={styles.label} accessibilityLabel="First Name">
          First Name
        </Text>
        <TextInput
          style={[
            styles.input,
            isEditing ? styles.editableInput : styles.disabledInput,
          ]}
          value={firstName}
          onChangeText={setFirstName}
          editable={isEditing}
          accessibilityLabel="Enter your first name"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label} accessibilityLabel="Last Name">
          Last Name
        </Text>
        <TextInput
          style={[
            styles.input,
            isEditing ? styles.editableInput : styles.disabledInput,
          ]}
          value={lastName}
          onChangeText={setLastName}
          editable={isEditing}
          accessibilityLabel="Enter your last name"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label} accessibilityLabel="Email">
          Email
        </Text>
        <TextInput
          style={[
            styles.input,
            isEditing ? styles.editableInput : styles.disabledInput,
          ]}
          value={email}
          onChangeText={setEmail}
          editable={isEditing}
          keyboardType="email-address"
          accessibilityLabel="Enter your email address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label} accessibilityLabel="Phone Number">
          Phone
        </Text>
        <TextInput
          style={[
            styles.input,
            isEditing ? styles.editableInput : styles.disabledInput,
          ]}
          value={phone}
          onChangeText={setPhone}
          editable={isEditing}
          keyboardType="phone-pad"
          accessibilityLabel="Enter your phone number"
        />
      </View>

      <View style={styles.buttonContainer}>
        {isEditing ? (
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleSave}
            accessibilityRole="button"
            accessibilityLabel="Save profile changes"
            //minWidth={Platform.OS === "ios" ? 0 : 44}
            //minHeight={Platform.OS === "ios" ? 0 : 44}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.editButton}
            onPress={handleEdit}
            accessibilityRole="button"
            accessibilityLabel="Edit profile information"
            // minWidth={Platform.OS === "ios" ? 0 : 44}
            // minHeight={Platform.OS === "ios" ? 0 : 44}
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
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: "#333",
  },
  editableInput: {
    backgroundColor: "#f0f0f0",
  },
  disabledInput: {
    backgroundColor: "#fff",
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  editButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    minWidth: 100,
  },
  saveButton: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 5,
    minWidth: 100,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default ProfileView;
