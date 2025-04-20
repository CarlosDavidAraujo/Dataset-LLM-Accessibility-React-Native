import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";

const RegistroScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro</Text>

      {/* Rótulo e Campo de Nome */}
      <Text nativeID="nomeLabel" style={styles.rótulo}>
        Nome
      </Text>
      <TextInput
        accessibilityLabelledBy="nomeLabel"
        style={styles.input}
        placeholder="Digite seu nome"
      />

      {/* Rótulo e Campo de Sobrenome */}
      <Text nativeID="sobrenomeLabel" style={styles.rótulo}>
        Sobrenome
      </Text>
      <TextInput
        accessibilityLabelledBy="sobrenomeLabel"
        style={styles.input}
        placeholder="Digite seu sobrenome"
      />

      {/* Rótulo e Campo de E-mail */}
      <Text nativeID="emailLabel" style={styles.rótulo}>
        E-mail
      </Text>
      <TextInput
        accessibilityLabelledBy="emailLabel"
        style={styles.input}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
      />

      {/* Rótulo e Campo de Senha */}
      <Text nativeID="senhaLabel" style={styles.rótulo}>
        Senha
      </Text>
      <TextInput
        accessibilityLabelledBy="senhaLabel"
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
      />

      {/* Rótulo e Campo de Data de Nascimento */}
      <Text nativeID="dataNascimentoLabel" style={styles.rótulo}>
        Data de Nascimento
      </Text>
      <TextInput
        accessibilityLabelledBy="dataNascimentoLabel"
        style={styles.input}
        placeholder="Digite sua data de nascimento"
      />

      {/* Rótulo e Campo de Gênero */}
      <Text nativeID="generoLabel" style={styles.rótulo}>
        Gênero
      </Text>
      <TextInput
        accessibilityLabelledBy="generoLabel"
        style={styles.input}
        placeholder="Digite seu gênero"
      />

      {/* Botões */}
      <TouchableOpacity
        style={styles.botao}
        accessibilityLabel="Enviar dados do formulário"
      >
        <Text style={styles.botaoTexto}>Enviar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        accessibilityLabel="Cancelar registro"
      >
        <Text style={styles.botaoTexto}>Cancelar</Text>
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
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 20,
  },
  rótulo: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 8,
    marginBottom: 16,
  },
  botao: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginBottom: 16,
  },
  botaoTexto: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
  },
});

export default RegistroScreen;
