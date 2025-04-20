import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const RegistroScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <Text nativeID="nomeLabel" style={styles.label}>
        Nome:
      </Text>
      <TextInput
        accessibilityLabelledBy="nomeLabel"
        placeholder="Digite seu nome"
        style={styles.input}
      />

      <Text nativeID="sobrenomeLabel" style={styles.label}>
        Sobrenome:
      </Text>
      <TextInput
        accessibilityLabelledBy="sobrenomeLabel"
        placeholder="Digite seu sobrenome"
        style={styles.input}
      />

      <Text nativeID="emailLabel" style={styles.label}>
        E-mail:
      </Text>
      <TextInput
        accessibilityLabelledBy="emailLabel"
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        style={styles.input}
      />

      <Text nativeID="senhaLabel" style={styles.label}>
        Senha:
      </Text>
      <TextInput
        accessibilityLabelledBy="senhaLabel"
        placeholder="Digite sua senha"
        secureTextEntry
        style={styles.input}
      />

      <Text nativeID="dataNascimentoLabel" style={styles.label}>
        Data de Nascimento:
      </Text>
      <TextInput
        accessibilityLabelledBy="dataNascimentoLabel"
        placeholder="DD/MM/AAAA"
        style={styles.input}
      />

      <Text nativeID="generoLabel" style={styles.label}>
        Gênero:
      </Text>
      <TextInput
        accessibilityLabelledBy="generoLabel"
        placeholder="Digite seu gênero"
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
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
    color: "#333333", // Contraste adequado
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: "#000000", // Contraste adequado
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007AFF", // Cor com contraste adequado
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    minWidth: 48, // Tamanho mínimo para alvo de toque
    minHeight: 48, // Tamanho mínimo para alvo de toque
  },
  buttonText: {
    color: "#FFFFFF", // Contraste adequado com o fundo do botão
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default RegistroScreen;
