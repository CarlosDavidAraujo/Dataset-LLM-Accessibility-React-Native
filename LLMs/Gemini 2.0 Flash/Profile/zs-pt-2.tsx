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
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 123-456-7890",
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Lógica para salvar as alterações no perfil
  };

  const handleChange = (name, value) => {
    setProfile({ ...profile, [name]: value });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.profileImage}
          source={{ uri: "https://via.placeholder.com/150" }}
          accessibilityLabel="Foto de perfil de John Doe"
        />
        <Text style={styles.profileName}>
          {profile.firstName} {profile.lastName}
        </Text>
      </View>

      <View style={styles.profileDetails}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={profile.firstName}
          onChangeText={(text) => handleChange("firstName", text)}
          editable={isEditing}
          accessibilityLabel="Nome"
        />

        <Text style={styles.label}>Sobrenome</Text>
        <TextInput
          style={styles.input}
          value={profile.lastName}
          onChangeText={(text) => handleChange("lastName", text)}
          editable={isEditing}
          accessibilityLabel="Sobrenome"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={profile.email}
          onChangeText={(text) => handleChange("email", text)}
          editable={isEditing}
          keyboardType="email-address"
          accessibilityLabel="Email"
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          value={profile.phone}
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
  profileImage: {
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
    padding: 15,
    borderRadius: 5,
    width: "50%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
