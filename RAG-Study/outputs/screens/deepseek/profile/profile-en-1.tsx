import React from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

const ProfileScreen = () => {
  // Mock data for demonstration purposes
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        style={styles.profilePicture}
        accessibilityLabel="Profile Picture"
      />
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        value={user.firstName}
        onChangeText={(text) => console.log(text)} // Implement actual change handler
        accessibilityLabel="First Name"
        accessibilityHint="Editable field to enter your first name."
      />
      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        value={user.lastName}
        onChangeText={(text) => console.log(text)} // Implement actual change handler
        accessibilityLabel="Last Name"
        accessibilityHint="Editable field to enter your last name."
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={user.email}
        onChangeText={(text) => console.log(text)} // Implement actual change handler
        accessibilityLabel="Email"
        accessibilityHint="Editable field to enter your email address."
      />
      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        value={user.phone}
        onChangeText={(text) => console.log(text)} // Implement actual change handler
        accessibilityLabel="Phone"
        accessibilityHint="Editable field to enter your phone number."
      />
      <Button
        title="Edit"
        onPress={() => alert("Editing profile")}
        accessibilityLabel="Edit Profile"
      />
      <Button
        title="Save"
        onPress={() => alert("Saving changes")}
        accessibilityLabel="Save Changes"
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
