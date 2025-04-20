import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const RegisterScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#A1A1A1"
        accessibilityLabel="Campo de entrada para o nome"
        accessibilityHint="Digite seu nome completo"
      />

      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        placeholderTextColor="#A1A1A1"
        accessibilityLabel="Campo de entrada para o sobrenome"
        accessibilityHint="Digite seu sobrenome"
      />

      <TextInput
        style={styles.input}
        placeholder="Endereço de e-mail"
        placeholderTextColor="#A1A1A1"
        keyboardType="email-address"
        accessibilityLabel="Campo de entrada para o e-mail"
        accessibilityHint="Digite seu endereço de e-mail"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#A1A1A1"
        secureTextEntry
        accessibilityLabel="Campo de entrada para a senha"
        accessibilityHint="Digite uma senha segura"
      />

      <TextInput
        style={styles.input}
        placeholder="Data de nascimento"
        placeholderTextColor="#A1A1A1"
        keyboardType="numeric"
        accessibilityLabel="Campo de entrada para a data de nascimento"
        accessibilityHint="Digite sua data de nascimento"
      />

      <View style={styles.genderContainer}>
        <Text style={styles.label}>Gênero</Text>
        <TouchableOpacity
          style={styles.radioButton}
          accessibilityLabel="Opção Masculino"
          accessibilityHint="Selecione o gênero masculino"
        >
          <Text style={styles.radioText}>Masculino</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.radioButton}
          accessibilityLabel="Opção Feminino"
          accessibilityHint="Selecione o gênero feminino"
        >
          <Text style={styles.radioText}>Feminino</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}
          accessibilityLabel="Enviar"
          accessibilityHint="Envie os dados para o registro"
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}
          accessibilityLabel="Cancelar"
          accessibilityHint="Cancelar o registro e voltar"
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 16,
    color: "#333", // Contraste de texto adequado
  },
  input: {
    height: 50,
    borderColor: "#CCC",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 10,
    fontSize: 16,
    borderRadius: 8,
    color: "#333",
  },
  genderContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333", // Contraste de texto adequado
    marginBottom: 8,
  },
  radioButton: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
  },
  radioText: {
    fontSize: 16,
    color: "#333", // Contraste de texto adequado
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#0066CC",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default RegisterScreen;
