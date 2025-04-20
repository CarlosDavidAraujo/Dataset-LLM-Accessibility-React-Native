import React from "react";
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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Cadastro</Text>

        {/* Campo Nome */}
        <View style={styles.inputGroup}>
          <Text nativeID="firstNameLabel" style={styles.label}>
            Nome*
          </Text>
          <TextInput
            style={styles.input}
            accessibilityLabelledBy="firstNameLabel"
            accessibilityLabel="Campo para digitar o nome"
            placeholder="Digite seu nome"
            value={formData.firstName}
            onChangeText={(text) => handleInputChange("firstName", text)}
            autoComplete="name"
            textContentType="givenName"
          />
        </View>

        {/* Campo Sobrenome */}
        <View style={styles.inputGroup}>
          <Text nativeID="lastNameLabel" style={styles.label}>
            Sobrenome*
          </Text>
          <TextInput
            style={styles.input}
            accessibilityLabelledBy="lastNameLabel"
            accessibilityLabel="Campo para digitar o sobrenome"
            placeholder="Digite seu sobrenome"
            value={formData.lastName}
            onChangeText={(text) => handleInputChange("lastName", text)}
            autoComplete="name-family"
            textContentType="familyName"
          />
        </View>

        {/* Campo Email */}
        <View style={styles.inputGroup}>
          <Text nativeID="emailLabel" style={styles.label}>
            Email*
          </Text>
          <TextInput
            style={styles.input}
            accessibilityLabelledBy="emailLabel"
            accessibilityLabel="Campo para digitar o email"
            placeholder="Digite seu email"
            value={formData.email}
            onChangeText={(text) => handleInputChange("email", text)}
            keyboardType="email-address"
            autoComplete="email"
            textContentType="emailAddress"
          />
        </View>

        {/* Campo Senha */}
        <View style={styles.inputGroup}>
          <Text nativeID="passwordLabel" style={styles.label}>
            Senha*
          </Text>
          <TextInput
            style={styles.input}
            accessibilityLabelledBy="passwordLabel"
            accessibilityLabel="Campo para digitar a senha"
            placeholder="Digite sua senha"
            value={formData.password}
            onChangeText={(text) => handleInputChange("password", text)}
            secureTextEntry
            autoComplete="password"
            textContentType="password"
          />
        </View>

        {/* Campo Data de Nascimento */}
        <View style={styles.inputGroup}>
          <Text nativeID="birthDateLabel" style={styles.label}>
            Data de Nascimento*
          </Text>
          <TextInput
            style={styles.input}
            accessibilityLabelledBy="birthDateLabel"
            accessibilityLabel="Campo para digitar a data de nascimento"
            placeholder="DD/MM/AAAA"
            value={formData.birthDate}
            onChangeText={(text) => handleInputChange("birthDate", text)}
            keyboardType="numeric"
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
            placeholder="Digite seu gênero (opcional)"
            value={formData.gender}
            onChangeText={(text) => handleInputChange("gender", text)}
          />
        </View>

        {/* Botões */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[styles.button, styles.submitButton]}
            accessibilityLabel="Enviar dados do formulário de registro"
            accessibilityRole="button"
          >
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            accessibilityLabel="Cancelar registro e voltar"
            accessibilityRole="button"
          >
            <Text style={[styles.buttonText, styles.cancelButtonText]}>
              Cancelar
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.requiredText}>* Campos obrigatórios</Text>
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
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    color: "#000000",
    backgroundColor: "#FFFFFF",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginBottom: 16,
  },
  button: {
    minWidth: 120,
    minHeight: 48,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  submitButton: {
    backgroundColor: "#003366",
  },
  cancelButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#003366",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  cancelButtonText: {
    color: "#003366",
  },
  requiredText: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
  },
});

export default RegistrationScreen;
