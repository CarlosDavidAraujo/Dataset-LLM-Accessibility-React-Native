import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const ProfileView = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/150" }} // Replace with actual profile picture URL
        style={styles.profileImage}
        accessibilityLabel="User profile picture"
      />

      <Text nativeID="firstNameLabel" style={styles.label}>
        First Name
      </Text>
      <TextInput
        accessibilityLabelledBy="firstNameLabel"
        style={styles.input}
        value="John" // Replace with user's actual first name
        editable={false}
      />

      <Text nativeID="lastNameLabel" style={styles.label}>
        Last Name
      </Text>
      <TextInput
        accessibilityLabelledBy="lastNameLabel"
        style={styles.input}
        value="Doe" // Replace with user's actual last name
        editable={false}
      />

      <Text nativeID="emailLabel" style={styles.label}>
        Email
      </Text>
      <TextInput
        accessibilityLabelledBy="emailLabel"
        style={styles.input}
        value="john.doe@example.com" // Replace with user's actual email
        editable={false}
      />

      <Text nativeID="phoneLabel" style={styles.label}>
        Phone
      </Text>
      <TextInput
        accessibilityLabelledBy="phoneLabel"
        style={styles.input}
        value="123-456-7890" // Replace with user's actual phone number
        editable={false}
      />

      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Edit profile information"
      >
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Save profile changes"
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF", // Ensure good contrast with text
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#000000", // Good contrast
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    padding: 10,
    marginTop: 5,
    color: "#000000", // Good contrast
  },
  button: {
    backgroundColor: "#007AFF", // Use a color with good contrast
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    minWidth: 48, // Minimum touch target size
    minHeight: 48, // Minimum touch target size
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF", // Good contrast with button background
    fontSize: 18,
  },
});

export default ProfileView;
