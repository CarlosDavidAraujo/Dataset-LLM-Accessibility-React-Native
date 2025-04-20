import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const RegistroScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>

      <Text nativeID="nomeLabel" style={styles.label}>
        Nome
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="nomeLabel"
        placeholder="Digite seu nome"
        accessibilityLabel="Campo de entrada para o nome"
      />

      <Text nativeID="sobrenomeLabel" style={styles.label}>
        Sobrenome
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="sobrenomeLabel"
        placeholder="Digite seu sobrenome"
        accessibilityLabel="Campo de entrada para o sobrenome"
      />

      <Text nativeID="emailLabel" style={styles.label}>
        Endereço de E-mail
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="emailLabel"
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        accessibilityLabel="Campo de entrada para o endereço de e-mail"
      />

      <Text nativeID="senhaLabel" style={styles.label}>
        Senha
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="senhaLabel"
        placeholder="Digite sua senha"
        secureTextEntry
        accessibilityLabel="Campo de entrada para a senha"
      />

      <Text nativeID="dataNascimentoLabel" style={styles.label}>
        Data de Nascimento
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="dataNascimentoLabel"
        placeholder="DD/MM/AAAA"
        accessibilityLabel="Campo de entrada para a data de nascimento"
      />

      <Text nativeID="generoLabel" style={styles.label}>
        Gênero
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="generoLabel"
        placeholder="Digite seu gênero"
        accessibilityLabel="Campo de entrada para o gênero"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="Enviar dados do formulário"
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="Cancelar registro"
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF", // Contraste adequado com o texto
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000000", // Contraste adequado
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333333", // Contraste adequado
  },
  input: {
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: "#000000", // Contraste adequado
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007AFF", // Contraste adequado
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    minWidth: 48, // Tamanho mínimo para toque
    minHeight: 48, // Tamanho mínimo para toque
  },
  buttonText: {
    color: "#FFFFFF", // Contraste adequado
    fontSize: 16,
  },
});

export default RegistroScreen;
