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
import { Picker } from "@react-native-picker/picker";

const RegistrationScreen = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthDate: "",
    gender: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
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
        <View style={styles.formContainer}>
          <Text style={styles.title}>Cadastro</Text>

          {/* Campo Nome */}
          <View style={styles.inputGroup}>
            <Text style={styles.label} accessibilityRole="text">
              Nome*
            </Text>
            <TextInput
              style={styles.input}
              value={formData.firstName}
              onChangeText={(text) => handleInputChange("firstName", text)}
              placeholder="Digite seu nome"
              placeholderTextColor="#767676"
              accessibilityLabel="Campo para digitar o nome"
              accessibilityHint="Digite seu primeiro nome"
              //accessibilityRequired propriedade inexistente
            />
          </View>

          {/* Campo Sobrenome */}
          <View style={styles.inputGroup}>
            <Text style={styles.label} accessibilityRole="text">
              Sobrenome*
            </Text>
            <TextInput
              style={styles.input}
              value={formData.lastName}
              onChangeText={(text) => handleInputChange("lastName", text)}
              placeholder="Digite seu sobrenome"
              placeholderTextColor="#767676"
              accessibilityLabel="Campo para digitar o sobrenome"
              accessibilityHint="Digite seu sobrenome"
              //accessibilityRequired
            />
          </View>

          {/* Campo Email */}
          <View style={styles.inputGroup}>
            <Text style={styles.label} accessibilityRole="text">
              E-mail*
            </Text>
            <TextInput
              style={styles.input}
              value={formData.email}
              onChangeText={(text) => handleInputChange("email", text)}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#767676"
              keyboardType="email-address"
              autoCapitalize="none"
              accessibilityLabel="Campo para digitar o e-mail"
              accessibilityHint="Digite seu endereço de e-mail"
              // accessibilityRequired
            />
          </View>

          {/* Campo Senha */}
          <View style={styles.inputGroup}>
            <Text style={styles.label} accessibilityRole="text">
              Senha*
            </Text>
            <TextInput
              style={styles.input}
              value={formData.password}
              onChangeText={(text) => handleInputChange("password", text)}
              placeholder="Digite sua senha"
              placeholderTextColor="#767676"
              secureTextEntry
              accessibilityLabel="Campo para digitar a senha"
              accessibilityHint="Digite uma senha segura"
              // accessibilityRequired
            />
          </View>

          {/* Campo Data de Nascimento */}
          <View style={styles.inputGroup}>
            <Text style={styles.label} accessibilityRole="text">
              Data de Nascimento*
            </Text>
            <TextInput
              style={styles.input}
              value={formData.birthDate}
              onChangeText={(text) => handleInputChange("birthDate", text)}
              placeholder="DD/MM/AAAA"
              placeholderTextColor="#767676"
              keyboardType="numeric"
              accessibilityLabel="Campo para digitar a data de nascimento"
              accessibilityHint="Digite sua data de nascimento no formato dia mês ano"
              // accessibilityRequired
            />
          </View>

          {/* Campo Gênero */}
          <View style={styles.inputGroup}>
            <Text style={styles.label} accessibilityRole="text">
              Gênero
            </Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={formData.gender}
                onValueChange={(itemValue) =>
                  handleInputChange("gender", itemValue)
                }
                style={styles.picker}
                accessibilityLabel="Seletor de gênero"
                accessibilityHint="Selecione seu gênero"
              >
                <Picker.Item label="Selecione..." value="" />
                <Picker.Item label="Masculino" value="male" />
                <Picker.Item label="Feminino" value="female" />
                <Picker.Item label="Outro" value="other" />
                <Picker.Item
                  label="Prefiro não informar"
                  value="preferNotToSay"
                />
              </Picker>
            </View>
          </View>

          {/* Botões */}
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={[styles.button, styles.submitButton]}
              onPress={handleSubmit}
              activeOpacity={0.7}
              accessibilityRole="button"
              accessibilityLabel="Enviar formulário de cadastro"
              accessibilityHint="Pressione para enviar suas informações de cadastro"
            >
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={handleCancel}
              activeOpacity={0.7}
              accessibilityRole="button"
              accessibilityLabel="Cancelar cadastro"
              accessibilityHint="Pressione para cancelar o cadastro e voltar à tela anterior"
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
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
    flexGrow: 1,
    paddingBottom: 20,
  },
  formContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 30,
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#333333",
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
    color: "#333333",
    backgroundColor: "#FFFFFF",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    overflow: "hidden",
  },
  picker: {
    height: 50,
    width: "100%",
    color: "#333333",
    backgroundColor: "#FFFFFF",
  },
  buttonGroup: {
    marginTop: 10,
  },
  button: {
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    minWidth: "100%",
  },
  submitButton: {
    backgroundColor: "#1E90FF",
  },
  cancelButton: {
    backgroundColor: "#FF4500",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RegistrationScreen;
