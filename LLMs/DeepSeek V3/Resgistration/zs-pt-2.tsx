import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const RegistrationScreen = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthDate: "",
    gender: "",
  });

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Lógica de envio do formulário
  };

  const handleCancel = () => {
    // Lógica de cancelamento
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Cadastro</Text>

        {/* Campo Nome */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome *</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#767676"
            value={formData.firstName}
            onChangeText={(text) => handleChange("firstName", text)}
            accessibilityLabel="Campo para digitar o nome"
            accessibilityHint="Digite seu primeiro nome"
            //accessibilityRequired={true} propriedade inexistente
          />
        </View>

        {/* Campo Sobrenome */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Sobrenome *</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu sobrenome"
            placeholderTextColor="#767676"
            value={formData.lastName}
            onChangeText={(text) => handleChange("lastName", text)}
            accessibilityLabel="Campo para digitar o sobrenome"
            accessibilityHint="Digite seu sobrenome"
            //accessibilityRequired={true} propriedade inexistente
          />
        </View>

        {/* Campo Email */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email *</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            placeholderTextColor="#767676"
            keyboardType="email-address"
            autoCapitalize="none"
            value={formData.email}
            onChangeText={(text) => handleChange("email", text)}
            accessibilityLabel="Campo para digitar o email"
            accessibilityHint="Digite seu endereço de email"
            //accessibilityRequired={true} propriedade inexistente
          />
        </View>

        {/* Campo Senha */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha *</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#767676"
            secureTextEntry={true}
            value={formData.password}
            onChangeText={(text) => handleChange("password", text)}
            accessibilityLabel="Campo para digitar a senha"
            accessibilityHint="Digite uma senha segura"
            //accessibilityRequired={true} propriedade inexistente
          />
        </View>

        {/* Campo Data de Nascimento */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Data de Nascimento *</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/AAAA"
            placeholderTextColor="#767676"
            value={formData.birthDate}
            onChangeText={(text) => handleChange("birthDate", text)}
            accessibilityLabel="Campo para digitar a data de nascimento"
            accessibilityHint="Digite sua data de nascimento no formato dia, mês e ano"
            //accessibilityRequired={true} propriedade inexistente
          />
        </View>

        {/* Campo Gênero */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Gênero</Text>
          <TextInput
            style={styles.input}
            placeholder="Selecione seu gênero"
            placeholderTextColor="#767676"
            value={formData.gender}
            onChangeText={(text) => handleChange("gender", text)}
            accessibilityLabel="Campo para selecionar o gênero"
            accessibilityHint="Selecione seu gênero"
          />
        </View>

        {/* Botões */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={handleCancel}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityLabel="Cancelar cadastro"
            accessibilityHint="Cancela o processo de cadastro e volta para a tela anterior"
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.submitButton]}
            onPress={handleSubmit}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityLabel="Enviar cadastro"
            accessibilityHint="Envia os dados do formulário para concluir o cadastro"
          >
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 30,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#444444", // Contraste suficiente (> 4.5:1 em fundo branco)
    marginBottom: 8,
    fontWeight: "500",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333333", // Contraste suficiente
    backgroundColor: "#FFFFFF",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    minHeight: 48, // Altura mínima para toque acessível
    minWidth: 120, // Largura mínima para toque acessível
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: "#2E7D32", // Verde com bom contraste
  },
  cancelButton: {
    backgroundColor: "#C62828", // Vermelho com bom contraste
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegistrationScreen;
