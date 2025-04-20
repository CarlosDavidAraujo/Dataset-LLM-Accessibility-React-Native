import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
  Platform,
} from "react-native";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      {/* Nome */}
      <Text nativeID="nameLabel" style={styles.label}>
        Nome
      </Text>
      <TextInput
        accessibilityLabelledBy="nameLabel"
        style={styles.input}
        placeholder="Digite seu nome"
        placeholderTextColor="#AAAAAA"
        autoCapitalize="words"
      />

      {/* Sobrenome */}
      <Text nativeID="surnameLabel" style={styles.label}>
        Sobrenome
      </Text>
      <TextInput
        accessibilityLabelledBy="surnameLabel"
        style={styles.input}
        placeholder="Digite seu sobrenome"
        placeholderTextColor="#AAAAAA"
        autoCapitalize="words"
      />

      {/* E-mail */}
      <Text nativeID="emailLabel" style={styles.label}>
        E-mail
      </Text>
      <TextInput
        accessibilityLabelledBy="emailLabel"
        style={styles.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor="#AAAAAA"
        keyboardType="email-address"
      />

      {/* Senha */}
      <Text nativeID="passwordLabel" style={styles.label}>
        Senha
      </Text>
      <TextInput
        accessibilityLabelledBy="passwordLabel"
        style={styles.input}
        placeholder="Digite sua senha"
        placeholderTextColor="#AAAAAA"
        secureTextEntry
      />

      {/* Data de nascimento */}
      <Text nativeID="dobLabel" style={styles.label}>
        Data de Nascimento
      </Text>
      <TextInput
        accessibilityLabelledBy="dobLabel"
        style={styles.input}
        placeholder="DD/MM/AAAA"
        placeholderTextColor="#AAAAAA"
        keyboardType="numeric"
      />

      {/* Gênero */}
      <Text nativeID="genderLabel" style={styles.label}>
        Gênero
      </Text>
      <TextInput
        accessibilityLabelledBy="genderLabel"
        style={styles.input}
        placeholder="Informe seu gênero"
        placeholderTextColor="#AAAAAA"
      />

      {/* Botões */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Enviar dados do formulário"
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Cancelar o registro"
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
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 10,
    marginBottom: 16,
    fontSize: 16,
    color: "#000000",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginBottom: 12,
    minWidth: 160,
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default RegistrationScreen;
