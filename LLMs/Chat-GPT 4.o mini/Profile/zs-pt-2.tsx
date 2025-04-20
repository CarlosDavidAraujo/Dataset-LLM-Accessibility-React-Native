import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSave = () => {
    // Lógica para salvar as informações
  };

  const handleEdit = () => {
    // Lógica para editar as informações
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Foto de perfil */}
      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: "https://www.example.com/profile.jpg" }}
          style={styles.profileImage}
          accessibilityLabel="Foto de perfil"
        />
      </View>

      {/* Campos de informações pessoais */}
      <View style={styles.inputContainer}>
        <Text
          style={styles.label}
          accessible={true}
          importantForAccessibility="yes"
          accessibilityLabel="Nome"
        >
          Nome
        </Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Digite seu nome"
          accessibilityLabel="Campo para digitar o nome"
          placeholderTextColor="#A9A9A9"
        />

        <Text
          style={styles.label}
          accessible={true}
          importantForAccessibility="yes"
          accessibilityLabel="Sobrenome"
        >
          Sobrenome
        </Text>
        <TextInput
          style={styles.input}
          value={surname}
          onChangeText={setSurname}
          placeholder="Digite seu sobrenome"
          accessibilityLabel="Campo para digitar o sobrenome"
          placeholderTextColor="#A9A9A9"
        />

        <Text
          style={styles.label}
          accessible={true}
          importantForAccessibility="yes"
          accessibilityLabel="E-mail"
        >
          E-mail
        </Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          accessibilityLabel="Campo para digitar o e-mail"
          placeholderTextColor="#A9A9A9"
        />

        <Text
          style={styles.label}
          accessible={true}
          importantForAccessibility="yes"
          accessibilityLabel="Telefone"
        >
          Telefone
        </Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Digite seu telefone"
          keyboardType="phone-pad"
          accessibilityLabel="Campo para digitar o telefone"
          placeholderTextColor="#A9A9A9"
        />
      </View>

      {/* Botões */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleEdit}
          accessible={true}
          accessibilityLabel="Botão para editar informações"
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.saveButton]}
          onPress={handleSave}
          accessible={true}
          accessibilityLabel="Botão para salvar informações"
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  profileImageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#000000",
  },
  inputContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
    fontSize: 16,
    color: "#333333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "48%",
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "#28a745",
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "600",
  },
});

export default ProfileScreen;
