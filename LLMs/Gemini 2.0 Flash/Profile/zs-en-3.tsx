import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from "react-native";

const ProfileView = () => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // Implement save logic here
    console.log("Saving profile:", { firstName, lastName, email, phone });
    setIsEditing(false);
    Alert.alert("Profile Updated", "Your profile has been updated.");
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <ScrollView style={styles.container} accessibilityLabel="Profile View">
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }} // Replace with actual profile picture URL
          style={styles.profileImage}
          accessibilityLabel="Profile Picture"
        />
      </View>

      <View style={styles.form}>
        <Text style={styles.label} accessibilityRole="text">
          First Name:
        </Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          editable={isEditing}
          accessibilityLabel="First Name"
          accessibilityHint={isEditing ? "Editable field" : "Read only field"}
        />

        <Text style={styles.label} accessibilityRole="text">
          Last Name:
        </Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          editable={isEditing}
          accessibilityLabel="Last Name"
          accessibilityHint={isEditing ? "Editable field" : "Read only field"}
        />

        <Text style={styles.label} accessibilityRole="text">
          Email:
        </Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          editable={isEditing}
          accessibilityLabel="Email Address"
          accessibilityHint={isEditing ? "Editable field" : "Read only field"}
        />

        <Text style={styles.label} accessibilityRole="text">
          Phone:
        </Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          editable={isEditing}
          accessibilityLabel="Phone Number"
          accessibilityHint={isEditing ? "Editable field" : "Read only field"}
        />

        {isEditing ? (
          <TouchableOpacity
            style={styles.button}
            onPress={handleSave}
            accessibilityRole="button"
            accessibilityLabel="Save Profile"
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={handleEdit}
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
    backgroundColor: "#fff",
    padding: 20,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  form: {
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    minHeight: 44, // Minimum touch target size
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    minHeight: 44, // Minimum touch target size
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProfileView;
