import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";

const CadastroScreen = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [genero, setGenero] = useState("");

  const handleCadastro = () => {
    // Lógica de cadastro aqui
  };

  const handleCancelar = () => {
    // Lógica de cancelamento aqui
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        accessibilityLabel="Nome"
        accessibilityHint="Digite seu nome"
      />

      <Text style={styles.label}>Sobrenome:</Text>
      <TextInput
        style={styles.input}
        value={sobrenome}
        onChangeText={setSobrenome}
        accessibilityLabel="Sobrenome"
        accessibilityHint="Digite seu sobrenome"
      />

      <Text style={styles.label}>E-mail:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        accessibilityLabel="E-mail"
        accessibilityHint="Digite seu endereço de e-mail"
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        accessibilityLabel="Senha"
        accessibilityHint="Digite sua senha"
      />

      <Text style={styles.label}>Data de Nascimento:</Text>
      <TextInput
        style={styles.input}
        value={dataNascimento}
        onChangeText={setDataNascimento}
        placeholder="DD/MM/AAAA"
        accessibilityLabel="Data de Nascimento"
        accessibilityHint="Digite sua data de nascimento no formato DD/MM/AAAA"
      />

      <Text style={styles.label}>Gênero:</Text>
      <TextInput
        style={styles.input}
        value={genero}
        onChangeText={setGenero}
        accessibilityLabel="Gênero"
        accessibilityHint="Digite seu gênero"
      />

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleCancelar}>
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000", // Contraste suficiente
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333", // Contraste suficiente
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: "#000", // Contraste suficiente
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
    minWidth: 44, // Tamanho mínimo de alvo de toque
    minHeight: 44, // Tamanho mínimo de alvo de toque
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default CadastroScreen;
