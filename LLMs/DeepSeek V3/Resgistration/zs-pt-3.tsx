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
    gender: "unspecified",
  });

  const handleInputChange = (name, value) => {
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
          <Text
            style={styles.label}
            accessible={true}
            accessibilityLabel="Nome"
          >
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
            //accessibilityRequired={true} // propriedade inexistente
          />
        </View>

        {/* Campo Sobrenome */}
        <View style={styles.inputContainer}>
          <Text
            style={styles.label}
            accessible={true}
            accessibilityLabel="Sobrenome"
          >
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
            //accessibilityRequired={true} // propriedade inexistente
          />
        </View>

        {/* Campo Email */}
        <View style={styles.inputContainer}>
          <Text
            style={styles.label}
            accessible={true}
            accessibilityLabel="Endereço de e-mail"
          >
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
            //accessibilityRequired={true} // propriedade inexistente
          />
        </View>

        {/* Campo Senha */}
        <View style={styles.inputContainer}>
          <Text
            style={styles.label}
            accessible={true}
            accessibilityLabel="Senha"
          >
            Senha*
          </Text>
          <TextInput
            style={styles.input}
            value={formData.password}
            onChangeText={(text) => handleInputChange("password", text)}
            placeholder="Digite sua senha"
            placeholderTextColor="#767676"
            secureTextEntry={true}
            accessibilityLabel="Campo para digitar a senha"
            accessibilityHint="Digite sua senha"
            //accessibilityRequired={true} // propriedade inexistente
          />
        </View>

        {/* Campo Data de Nascimento */}
        <View style={styles.inputContainer}>
          <Text
            style={styles.label}
            accessible={true}
            accessibilityLabel="Data de nascimento"
          >
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
            //accessibilityRequired={true} // propriedade inexistente
          />
        </View>

        {/* Campo Gênero */}
        <View style={styles.inputContainer}>
          <Text
            style={styles.label}
            accessible={true}
            accessibilityLabel="Gênero"
          >
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
              <Picker.Item label="Não especificado" value="unspecified" />
              <Picker.Item label="Masculino" value="male" />
              <Picker.Item label="Feminino" value="female" />
              <Picker.Item label="Outro" value="other" />
              <Picker.Item label="Prefiro não dizer" value="preferNotToSay" />
            </Picker>
          </View>
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
            accessibilityHint="Envia os dados do formulário para criar uma nova conta"
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
    color: "#333333",
    backgroundColor: "#FFFFFF",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    minHeight: 48,
    minWidth: 120,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  submitButton: {
    backgroundColor: "#2E7D32",
  },
  cancelButton: {
    backgroundColor: "#C62828",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegistrationScreen;
