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
  };

  const handleChange = (name, value) => {
    setProfile({ ...profile, [name]: value });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://via.placeholder.com/150",
          }}
          accessibilityLabel="Foto de perfil de John Doe"
        />
        <Text style={styles.name}>
          {profile.firstName} {profile.lastName}
        </Text>
      </View>

      <View style={styles.profileDetails}>
        <Text style={styles.label}>Nome:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.firstName}
            onChangeText={(text) => handleChange("firstName", text)}
            accessibilityLabel="Nome"
          />
        ) : (
          <Text style={styles.text}>{profile.firstName}</Text>
        )}

        <Text style={styles.label}>Sobrenome:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.lastName}
            onChangeText={(text) => handleChange("lastName", text)}
            accessibilityLabel="Sobrenome"
          />
        ) : (
          <Text style={styles.text}>{profile.lastName}</Text>
        )}

        <Text style={styles.label}>E-mail:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.email}
            onChangeText={(text) => handleChange("email", text)}
            keyboardType="email-address"
            accessibilityLabel="E-mail"
          />
        ) : (
          <Text style={styles.text}>{profile.email}</Text>
        )}

        <Text style={styles.label}>Telefone:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.phone}
            onChangeText={(text) => handleChange("phone", text)}
            keyboardType="phone-pad"
            accessibilityLabel="Telefone"
          />
        ) : (
          <Text style={styles.text}>{profile.phone}</Text>
        )}

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
  name: {
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
  },
  text: {
    fontSize: 16,
    color: "#333",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
