import React from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

const ProfileScreen = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://example.com/profile-pic.jpg" }} // Replace with actual image URI
        style={styles.profilePic}
        accessibilityLabel="Profile Picture"
      />
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="Enter first name"
        accessibilityLabel="First Name Edit Box"
        accessibilityLabelledBy="firstNameLabel"
      />
      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
        placeholder="Enter last name"
        accessibilityLabel="Last Name Edit Box"
        accessibilityLabelledBy="lastNameLabel"
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter email"
        keyboardType="email-address"
        accessibilityLabel="Email Edit Box"
        accessibilityLabelledBy="emailLabel"
      />
      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        accessibilityLabel="Phone Edit Box"
        accessibilityLabelledBy="phoneLabel"
      />
      <Button
        title="Save"
        onPress={() => console.log("Saving profile...")}
        accessibilityLabel="Save Profile Button"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
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
