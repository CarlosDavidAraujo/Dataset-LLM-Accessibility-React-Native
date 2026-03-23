import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const RegistrationScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = () => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !birthDate ||
      !gender
    ) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios");
      return;
    }
    Alert.alert("Sucesso", "Registro realizado com sucesso!");
  };

  const handleCancel = () => {
    Alert.alert("Cancelar Registro", "Tem certeza que deseja cancelar?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => console.log("Registro cancelado") },
    ]);
  };

  return (
    <ScrollView
      style={styles.container}
      accessibilityLabel="Formulário de registro"
      accessibilityHint="Preencha todos os campos para se registrar"
    >
      <Text style={styles.title} accessibilityRole="header">
        Registro de Usuário
      </Text>

      {/* Primeiro Nome */}
      <View style={styles.inputGroup}>
        <Text nativeID="firstNameLabel" style={styles.label}>
          Primeiro Nome *
        </Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          accessibilityLabel="Campo de primeiro nome"
          accessibilityLabelledBy="firstNameLabel"
          accessibilityHint="Digite seu primeiro nome"
          textContentType="givenName"
          autoComplete="name"
          placeholder="Ex: João"
        />
      </View>

      {/* Sobrenome */}
      <View style={styles.inputGroup}>
        <Text nativeID="lastNameLabel" style={styles.label}>
          Sobrenome *
        </Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          accessibilityLabel="Campo de sobrenome"
          accessibilityLabelledBy="lastNameLabel"
          accessibilityHint="Digite seu sobrenome"
          textContentType="familyName"
          autoComplete="name"
          placeholder="Ex: Silva"
        />
      </View>

      {/* Email */}
      <View style={styles.inputGroup}>
        <Text nativeID="emailLabel" style={styles.label}>
          Endereço de E-mail *
        </Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          accessibilityLabel="Campo de e-mail"
          accessibilityLabelledBy="emailLabel"
          accessibilityHint="Digite seu endereço de e-mail"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoComplete="email"
          placeholder="exemplo@email.com"
        />
      </View>

      {/* Senha */}
      <View style={styles.inputGroup}>
        <Text nativeID="passwordLabel" style={styles.label}>
          Senha *
        </Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          accessibilityLabel="Campo de senha"
          accessibilityLabelledBy="passwordLabel"
          accessibilityHint="Digite sua senha (mínimo 8 caracteres)"
          textContentType="newPassword"
          autoComplete="password"
          placeholder="••••••••"
        />
      </View>

      {/* Data de Nascimento */}
      <View style={styles.inputGroup}>
        <Text nativeID="birthDateLabel" style={styles.label}>
          Data de Nascimento *
        </Text>
        <TextInput
          style={styles.input}
          value={birthDate}
          onChangeText={setBirthDate}
          accessibilityLabel="Campo de data de nascimento"
          accessibilityLabelledBy="birthDateLabel"
          accessibilityHint="Digite sua data de nascimento no formato DD/MM/AAAA"
          keyboardType="numeric"
          placeholder="DD/MM/AAAA"
          maxLength={10}
        />
      </View>

      {/* Gênero */}
      <View style={styles.inputGroup}>
        <Text nativeID="genderLabel" style={styles.label}>
          Gênero *
        </Text>
        <View style={styles.genderContainer}>
          {["Masculino", "Feminino", "Outro"].map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.radioButton,
                gender === option && styles.selectedRadio,
              ]}
              onPress={() => setGender(option)}
              accessibilityRole="radio"
              accessibilityState={{ selected: gender === option }}
              accessibilityLabel={`Opção de gênero ${option}`}
            >
              <Text style={styles.radioText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Botões */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.submitButton]}
          onPress={handleSubmit}
          accessibilityRole="button"
          accessibilityLabel="Botão enviar"
          accessibilityHint="Toque para enviar seus dados de registro"
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={handleCancel}
          accessibilityRole="button"
          accessibilityLabel="Botão cancelar"
          accessibilityHint="Toque para cancelar o registro"
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
    color: "#333",
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  radioButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  selectedRadio: {
    borderColor: "#007AFF",
    backgroundColor: "#e6f0ff",
  },
  radioText: {
    fontSize: 16,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  button: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 8,
  },
  submitButton: {
    backgroundColor: "#007AFF",
  },
  cancelButton: {
    backgroundColor: "#FF3B30",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default RegistrationScreen;
