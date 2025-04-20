import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";

const RegistrationScreen = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = () => {
    // Lógica de envio de formulário
    alert("Formulário enviado");
  };

  const handleCancel = () => {
    // Lógica de cancelamento
    alert("Formulário cancelado");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tela de Registro</Text>

      {/* Nome */}
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        accessibilityLabel="Campo de texto para nome"
        accessibilityHint="Digite seu nome completo"
        accessibilityRole="text"
        autoCapitalize="words"
        accessible={true}
      />

      {/* Sobrenome */}
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={surname}
        onChangeText={setSurname}
        accessibilityLabel="Campo de texto para sobrenome"
        accessibilityHint="Digite seu sobrenome"
        accessibilityRole="text"
        autoCapitalize="words"
        accessible={true}
      />

      {/* E-mail */}
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        accessibilityLabel="Campo de texto para e-mail"
        accessibilityHint="Digite seu endereço de e-mail"
        accessibilityRole="text"
        autoCapitalize="none"
        accessible={true}
      />

      {/* Senha */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        accessibilityLabel="Campo de texto para senha"
        accessibilityHint="Digite uma senha com pelo menos 8 caracteres"
        accessibilityRole="text"
        accessible={true}
      />

      {/* Data de nascimento */}
      <TextInput
        style={styles.input}
        placeholder="Data de nascimento"
        value={dob}
        onChangeText={setDob}
        keyboardType="numeric"
        accessibilityLabel="Campo de texto para data de nascimento"
        accessibilityHint="Digite sua data de nascimento no formato DD/MM/AAAA"
        accessibilityRole="text"
        accessible={true}
      />

      {/* Gênero */}
      <TextInput
        style={styles.input}
        placeholder="Gênero"
        value={gender}
        onChangeText={setGender}
        accessibilityLabel="Campo de texto para gênero"
        accessibilityHint="Digite seu gênero"
        accessibilityRole="text"
        autoCapitalize="words"
        accessible={true}
      />

      {/* Botão Enviar */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        accessible={true}
        accessibilityLabel="Enviar formulário"
        accessibilityRole="button"
        accessibilityHint="Toque para enviar o formulário"
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      {/* Botão Cancelar */}
      <TouchableOpacity
        style={[styles.button, styles.cancelButton]}
        onPress={handleCancel}
        accessible={true}
        accessibilityLabel="Cancelar"
        accessibilityRole="button"
        accessibilityHint="Toque para cancelar o formulário"
      >
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f9",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#333",
  },
  button: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007BFF",
    borderRadius: 5,
    marginVertical: 10,
  },
  cancelButton: {
    backgroundColor: "#FF4444",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default RegistrationScreen;
