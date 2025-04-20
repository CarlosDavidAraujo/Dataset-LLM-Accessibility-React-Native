import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Foto de perfil */}
      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: "https://example.com/profile.jpg" }}
          style={styles.profileImage}
          accessibilityLabel="Foto de perfil do usuário"
        />
      </View>

      {/* Nome */}
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value="João Silva"
        editable={false}
        accessibilityLabel="Nome do usuário"
        placeholder="Nome"
      />

      {/* Sobrenome */}
      <Text style={styles.label}>Sobrenome:</Text>
      <TextInput
        style={styles.input}
        value="Silva"
        editable={false}
        accessibilityLabel="Sobrenome do usuário"
        placeholder="Sobrenome"
      />

      {/* E-mail */}
      <Text style={styles.label}>E-mail:</Text>
      <TextInput
        style={styles.input}
        value="joao.silva@email.com"
        editable={false}
        accessibilityLabel="E-mail do usuário"
        placeholder="E-mail"
      />

      {/* Telefone */}
      <Text style={styles.label}>Telefone:</Text>
      <TextInput
        style={styles.input}
        value="1234-5678"
        editable={false}
        accessibilityLabel="Telefone do usuário"
        placeholder="Telefone"
      />

      {/* Botão Editar */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Editar informações do perfil"
      >
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>

      {/* Botão Salvar */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Salvar informações do perfil"
      >
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  profileImageContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 12,
  },
  input: {
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    fontSize: 16,
    color: "#000000",
    backgroundColor: "#F5F5F5",
    marginBottom: 16,
  },
  button: {
    minWidth: 150,
    minHeight: 48,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#007BFF",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
