import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    //profilePicture: require("./assets/profile-placeholder.png"),
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleChange = (name, value) => {
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.profilePicture}
          //source={profileData.profilePicture}
          accessibilityLabel="Foto de perfil de John Doe"
        />
        <Text style={styles.profileName} accessibilityRole="header">
          {profileData.firstName} {profileData.lastName}
        </Text>
      </View>

      <View style={styles.profileDetails}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          value={profileData.firstName}
          onChangeText={(text) => handleChange("firstName", text)}
          editable={isEditing}
          accessibilityLabel="Nome"
        />

        <Text style={styles.label}>Sobrenome:</Text>
        <TextInput
          style={styles.input}
          value={profileData.lastName}
          onChangeText={(text) => handleChange("lastName", text)}
          editable={isEditing}
          accessibilityLabel="Sobrenome"
        />

        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          style={styles.input}
          value={profileData.email}
          onChangeText={(text) => handleChange("email", text)}
          editable={isEditing}
          keyboardType="email-address"
          accessibilityLabel="E-mail"
        />

        <Text style={styles.label}>Telefone:</Text>
        <TextInput
          style={styles.input}
          value={profileData.phone}
          onChangeText={(text) => handleChange("phone", text)}
          editable={isEditing}
          keyboardType="phone-pad"
          accessibilityLabel="Telefone"
        />
      </View>

      <View style={styles.buttonContainer}>
        {isEditing ? (
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleEdit}>
            <Text style={styles.buttonText}>Editar</Text>
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
  profileHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  profileDetails: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    fontSize: 16,
    color: "#333",
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
