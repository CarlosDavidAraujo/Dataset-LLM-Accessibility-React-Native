import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      {/* Nome */}
      <Text style={styles.label} nativeID="nameLabel">
        Nome
      </Text>
      <TextInput
        accessibilityLabelledBy="nameLabel"
        placeholder="Digite seu nome"
        style={styles.input}
        autoComplete="name"
      />

      {/* Sobrenome */}
      <Text style={styles.label} nativeID="surnameLabel">
        Sobrenome
      </Text>
      <TextInput
        accessibilityLabelledBy="surnameLabel"
        placeholder="Digite seu sobrenome"
        style={styles.input}
        autoComplete="family-name"
      />

      {/* Endereço de e-mail */}
      <Text style={styles.label} nativeID="emailLabel">
        Endereço de E-mail
      </Text>
      <TextInput
        accessibilityLabelledBy="emailLabel"
        placeholder="Digite seu e-mail"
        style={styles.input}
        keyboardType="email-address"
        autoComplete="email"
      />

      {/* Senha */}
      <Text style={styles.label} nativeID="passwordLabel">
        Senha
      </Text>
      <TextInput
        accessibilityLabelledBy="passwordLabel"
        placeholder="Digite sua senha"
        style={styles.input}
        secureTextEntry
      />

      {/* Data de nascimento */}
      <Text style={styles.label} nativeID="dobLabel">
        Data de Nascimento
      </Text>
      <TextInput
        accessibilityLabelledBy="dobLabel"
        placeholder="Digite sua data de nascimento"
        style={styles.input}
        keyboardType="numeric"
      />

      {/* Gênero */}
      <Text style={styles.label} nativeID="genderLabel">
        Gênero
      </Text>
      <TextInput
        accessibilityLabelledBy="genderLabel"
        placeholder="Digite seu gênero"
        style={styles.input}
      />

      {/* Botão Enviar */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Enviar dados do formulário"
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      {/* Botão Cancelar */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Cancelar a inscrição"
      >
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  label: {
    color: "#000000",
    fontSize: 16,
    marginVertical: 5,
  },
  input: {
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    minWidth: 150,
    minHeight: 48,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default RegisterScreen;
