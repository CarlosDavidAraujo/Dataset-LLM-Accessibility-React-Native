import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";

const ProfileScreen = () => {
  // Estado para armazenar informações do perfil
  const [name, setName] = useState("João");
  const [lastName, setLastName] = useState("Silva");
  const [email, setEmail] = useState("joao.silva@example.com");
  const [phone, setPhone] = useState("(11) 99999-9999");
  const [isEditing, setIsEditing] = useState(false);

  // Função para alternar entre editar e salvar
  const handleEditSave = () => {
    setIsEditing(!isEditing);
  };

  return (
    <View style={styles.container}>
      {/* Foto de perfil */}
      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: "https://example.com/profile.jpg" }}
          style={styles.profileImage}
          accessible={true}
          accessibilityLabel="Foto de perfil de João Silva"
        />
      </View>

      {/* Nome e Sobrenome */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          editable={isEditing}
          accessible={true}
          accessibilityLabel="Digite seu nome"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Sobrenome:</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          editable={isEditing}
          accessible={true}
          accessibilityLabel="Digite seu sobrenome"
        />
      </View>

      {/* E-mail */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          editable={isEditing}
          keyboardType="email-address"
          accessible={true}
          accessibilityLabel="Digite seu e-mail"
        />
      </View>

      {/* Telefone */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Telefone:</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          editable={isEditing}
          keyboardType="phone-pad"
          accessible={true}
          accessibilityLabel="Digite seu telefone"
        />
      </View>

      {/* Botões de ação */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleEditSave}
          style={[
            styles.button,
            isEditing ? styles.saveButton : styles.editButton,
          ]}
          accessible={true}
          accessibilityLabel={isEditing ? "Salvar alterações" : "Editar perfil"}
        >
          <Text style={styles.buttonText}>
            {isEditing ? "Salvar" : "Editar"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  profileImageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#ccc",
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editButton: {
    backgroundColor: "#007BFF",
  },
  saveButton: {
    backgroundColor: "#28a745",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default ProfileScreen;
