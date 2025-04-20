import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

const RegistrationScreen = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthDate: "",
    gender: "",
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
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Cadastro</Text>

        {/* Campo Nome */}
        <View style={styles.inputGroup}>
          <Text nativeID="firstNameLabel" style={styles.label}>
            Nome
          </Text>
          <TextInput
            style={styles.input}
            accessibilityLabelledBy="firstNameLabel"
            accessibilityLabel="Campo para digitar o nome"
            autoComplete="name-given"
            textContentType="givenName"
            placeholder="Digite seu nome"
            placeholderTextColor="#767676"
            value={formData.firstName}
            onChangeText={(text) => handleInputChange("firstName", text)}
          />
        </View>

        {/* Campo Sobrenome */}
        <View style={styles.inputGroup}>
          <Text nativeID="lastNameLabel" style={styles.label}>
            Sobrenome
          </Text>
          <TextInput
            style={styles.input}
            accessibilityLabelledBy="lastNameLabel"
            accessibilityLabel="Campo para digitar o sobrenome"
            autoComplete="name-family"
            textContentType="familyName"
            placeholder="Digite seu sobrenome"
            placeholderTextColor="#767676"
            value={formData.lastName}
            onChangeText={(text) => handleInputChange("lastName", text)}
          />
        </View>

        {/* Campo Email */}
        <View style={styles.inputGroup}>
          <Text nativeID="emailLabel" style={styles.label}>
            Email
          </Text>
          <TextInput
            style={styles.input}
            accessibilityLabelledBy="emailLabel"
            accessibilityLabel="Campo para digitar o endereço de email"
            autoComplete="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            placeholder="Digite seu email"
            placeholderTextColor="#767676"
            value={formData.email}
            onChangeText={(text) => handleInputChange("email", text)}
          />
        </View>

        {/* Campo Senha */}
        <View style={styles.inputGroup}>
          <Text nativeID="passwordLabel" style={styles.label}>
            Senha
          </Text>
          <TextInput
            style={styles.input}
            accessibilityLabelledBy="passwordLabel"
            accessibilityLabel="Campo para digitar a senha"
            autoComplete="password"
            textContentType="password"
            secureTextEntry
            placeholder="Digite sua senha"
            placeholderTextColor="#767676"
            value={formData.password}
            onChangeText={(text) => handleInputChange("password", text)}
          />
        </View>

        {/* Campo Data de Nascimento */}
        <View style={styles.inputGroup}>
          <Text nativeID="birthDateLabel" style={styles.label}>
            Data de Nascimento
          </Text>
          <TextInput
            style={styles.input}
            accessibilityLabelledBy="birthDateLabel"
            accessibilityLabel="Campo para digitar a data de nascimento"
            placeholder="DD/MM/AAAA"
            placeholderTextColor="#767676"
            value={formData.birthDate}
            onChangeText={(text) => handleInputChange("birthDate", text)}
          />
        </View>

        {/* Campo Gênero */}
        <View style={styles.inputGroup}>
          <Text nativeID="genderLabel" style={styles.label}>
            Gênero
          </Text>
          <TextInput
            style={styles.input}
            accessibilityLabelledBy="genderLabel"
            accessibilityLabel="Campo para digitar o gênero"
            placeholder="Digite seu gênero"
            placeholderTextColor="#767676"
            value={formData.gender}
            onChangeText={(text) => handleInputChange("gender", text)}
          />
        </View>

        {/* Botões */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[styles.button, styles.submitButton]}
            onPress={handleSubmit}
            accessibilityRole="button"
            accessibilityLabel="Enviar formulário de cadastro"
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={handleCancel}
            accessibilityRole="button"
            accessibilityLabel="Cancelar cadastro e voltar"
            activeOpacity={0.7}
          >
            <Text style={[styles.buttonText, styles.cancelButtonText]}>
              Cancelar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 24,
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 8,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#767676",
    borderRadius: 4,
    paddingHorizontal: 12,
    fontSize: 16,
    color: "#000000",
    backgroundColor: "#FFFFFF",
  },
  buttonGroup: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    minWidth: 120,
    minHeight: 48,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: "#0066CC",
  },
  cancelButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#0066CC",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  cancelButtonText: {
    color: "#0066CC",
  },
});

export default RegistrationScreen;
