import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";

const RegistroTela = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [genero, setGenero] = useState("");

  const lidarComEnvio = () => {
    // Lógica de envio aqui
    console.log({
      nome,
      sobrenome,
      email,
      senha,
      dataNascimento,
      genero,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        accessibilityLabel="Nome"
      />

      <Text style={styles.label}>Sobrenome</Text>
      <TextInput
        style={styles.input}
        value={sobrenome}
        onChangeText={setSobrenome}
        accessibilityLabel="Sobrenome"
      />

      <Text style={styles.label}>Endereço de e-mail</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        accessibilityLabel="Endereço de e-mail"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        accessibilityLabel="Senha"
      />

      <Text style={styles.label}>Data de nascimento</Text>
      <TextInput
        style={styles.input}
        value={dataNascimento}
        onChangeText={setDataNascimento}
        placeholder="DD/MM/AAAA"
        accessibilityLabel="Data de nascimento"
      />

      <Text style={styles.label}>Gênero</Text>
      <TextInput
        style={styles.input}
        value={genero}
        onChangeText={setGenero}
        accessibilityLabel="Gênero"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={lidarComEnvio}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {}}>
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
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#000",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    color: "#000",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    minWidth: 120, // Tamanho mínimo de destino de toque
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default RegistroTela;
