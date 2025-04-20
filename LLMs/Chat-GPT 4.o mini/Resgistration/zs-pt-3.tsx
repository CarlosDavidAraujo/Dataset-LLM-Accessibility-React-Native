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
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = () => {
    // Aqui você pode adicionar a lógica para submeter os dados
  };

  const handleCancel = () => {
    // Aqui você pode adicionar a lógica para cancelar o registro
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Registrar Conta</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label} accessibilityLabel="Nome">
          Nome
        </Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Digite seu nome"
          placeholderTextColor="#888"
          accessible={true}
          accessibilityLabel="Nome"
          importantForAccessibility="yes"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label} accessibilityLabel="Sobrenome">
          Sobrenome
        </Text>
        <TextInput
          style={styles.input}
          value={surname}
          onChangeText={setSurname}
          placeholder="Digite seu sobrenome"
          placeholderTextColor="#888"
          accessible={true}
          accessibilityLabel="Sobrenome"
          importantForAccessibility="yes"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label} accessibilityLabel="E-mail">
          E-mail
        </Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          placeholderTextColor="#888"
          accessible={true}
          accessibilityLabel="E-mail"
          importantForAccessibility="yes"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label} accessibilityLabel="Senha">
          Senha
        </Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Digite sua senha"
          secureTextEntry
          placeholderTextColor="#888"
          accessible={true}
          accessibilityLabel="Senha"
          importantForAccessibility="yes"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label} accessibilityLabel="Data de nascimento">
          Data de nascimento
        </Text>
        <TextInput
          style={styles.input}
          value={birthDate}
          onChangeText={setBirthDate}
          placeholder="DD/MM/AAAA"
          placeholderTextColor="#888"
          accessible={true}
          accessibilityLabel="Data de nascimento"
          importantForAccessibility="yes"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label} accessibilityLabel="Gênero">
          Gênero
        </Text>
        <TextInput
          style={styles.input}
          value={gender}
          onChangeText={setGender}
          placeholder="Digite seu gênero"
          placeholderTextColor="#888"
          accessible={true}
          accessibilityLabel="Gênero"
          importantForAccessibility="yes"
        />
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[styles.button, styles.submitButton]}
          onPress={handleSubmit}
          accessible={true}
          accessibilityLabel="Enviar"
          importantForAccessibility="yes"
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={handleCancel}
          accessible={true}
          accessibilityLabel="Cancelar"
          importantForAccessibility="yes"
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
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  buttonGroup: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "48%",
    padding: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: "#4CAF50",
  },
  cancelButton: {
    backgroundColor: "#f44336",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});

export default RegistrationScreen;
