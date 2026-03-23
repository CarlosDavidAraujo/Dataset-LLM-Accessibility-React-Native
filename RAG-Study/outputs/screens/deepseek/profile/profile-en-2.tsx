import React from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

const ProfileScreen = () => {
  // Mock data for profile information
  const [firstName, setFirstName] = React.useState("John");
  const [lastName, setLastName] = React.useState("Doe");
  const [email, setEmail] = React.useState("john.doe@example.com");
  const [phone, setPhone] = React.useState("123-456-7890");

  // Mock function for saving profile information (would be replaced with actual save logic)
  const handleSave = () => {
    console.log("Profile saved:", { firstName, lastName, email, phone });
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/150" }} // Placeholder image
        style={styles.profilePicture}
        accessibilityLabel="Profile Picture"
      />
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        accessibilityLabel="First Name"
        accessibilityHint="Editable field for the user's first name."
      />
      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
        accessibilityLabel="Last Name"
        accessibilityHint="Editable field for the user's last name."
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        accessibilityLabel="Email"
        accessibilityHint="Editable field for the user's email address."
      />
      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        accessibilityLabel="Phone"
        accessibilityHint="Editable field for the user's phone number."
      />
      <Button
        title="Save Changes"
        onPress={handleSave}
        accessibilityLabel="Save Profile"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default ProfileScreen;
