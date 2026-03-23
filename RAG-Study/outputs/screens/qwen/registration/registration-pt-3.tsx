import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Switch,
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
  const [gender, setGender] = useState<"male" | "female" | "other" | "">("");
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = () => {
    if (!firstName || !lastName || !email || !password) {
      Alert.alert(
        "Campos obrigatórios",
        "Por favor, preencha todos os campos obrigatórios",
      );
      return;
    }

    Alert.alert(
      "Registro realizado",
      `Bem-vindo, ${firstName}! Seu registro foi concluído com sucesso.`,
    );
  };

  const handleCancel = () => {
    Alert.alert("Cancelar registro", "Tem certeza que deseja cancelar?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => console.log("Registro cancelado") },
    ]);
  };

  const genderOptions = [
    { label: "Masculino", value: "male" },
    { label: "Feminino", value: "female" },
    { label: "Outro", value: "other" },
  ];

  return (
    <ScrollView
      style={styles.container}
      accessibilityLabel="Tela de registro"
      accessibilityHint="Formulário para criar uma nova conta"
    >
      <Text style={styles.title} accessibilityRole="header">
        Registro de Usuário
      </Text>

      <View style={styles.formGroup}>
        <Text nativeID="firstNameLabel" style={styles.label}>
          Nome *
        </Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          accessibilityLabel="Campo de nome"
          accessibilityLabelledBy="firstNameLabel"
          accessibilityHint="Digite seu primeiro nome"
          autoComplete="name"
          textContentType="givenName"
          placeholder="Digite seu nome"
        />
      </View>

      <View style={styles.formGroup}>
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
          autoComplete="name-family"
          textContentType="familyName"
          placeholder="Digite seu sobrenome"
        />
      </View>

      <View style={styles.formGroup}>
        <Text nativeID="emailLabel" style={styles.label}>
          E-mail *
        </Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          accessibilityLabel="Campo de e-mail"
          accessibilityLabelledBy="emailLabel"
          accessibilityHint="Digite seu endereço de e-mail"
          autoComplete="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholder="exemplo@email.com"
        />
      </View>

      <View style={styles.formGroup}>
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
          autoComplete="password"
          textContentType="password"
          placeholder="••••••••"
        />
      </View>

      <View style={styles.formGroup}>
        <Text nativeID="birthDateLabel" style={styles.label}>
          Data de Nascimento
        </Text>
        <TextInput
          style={styles.input}
          value={birthDate}
          onChangeText={setBirthDate}
          accessibilityLabel="Campo de data de nascimento"
          accessibilityLabelledBy="birthDateLabel"
          accessibilityHint="Digite sua data de nascimento no formato DD/MM/AAAA"
          keyboardType="numbers-and-punctuation"
          placeholder="DD/MM/AAAA"
        />
      </View>

      <View style={styles.formGroup}>
        <Text nativeID="genderLabel" style={styles.label}>
          Gênero
        </Text>
        <View
          style={styles.genderContainer}
          accessibilityLabel="Opções de gênero"
          accessibilityLabelledBy="genderLabel"
        >
          {genderOptions.map((option) => (
            <TouchableOpacity
              key={option.value}
              style={styles.genderOption}
              onPress={() => setGender(option.value as any)}
              accessibilityRole="radio"
              accessibilityState={{ selected: gender === option.value }}
              accessibilityLabel={`Selecionar ${option.label}`}
            >
              <View
                style={[
                  styles.radioCircle,
                  gender === option.value && styles.selectedRadio,
                ]}
              />
              <Text style={styles.radioLabel}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.formGroup}>
        <View style={styles.switchContainer}>
          <Text nativeID="newsletterLabel" style={styles.switchLabel}>
            Receber newsletter
          </Text>
          <Switch
            value={newsletter}
            onValueChange={setNewsletter}
            accessibilityLabel="Alternar recebimento de newsletter"
            accessibilityLabelledBy="newsletterLabel"
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.submitButton]}
          onPress={handleSubmit}
          accessibilityRole="button"
          accessibilityLabel="Enviar formulário de registro"
          accessibilityHint="Toque duas vezes para enviar seus dados de registro"
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={handleCancel}
          accessibilityRole="button"
          accessibilityLabel="Cancelar registro"
          accessibilityHint="Toque duas vezes para cancelar o registro"
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
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 24,
    color: "#333",
  },
  formGroup: {
    marginBottom: 16,
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
    justifyContent: "space-around",
  },
  genderOption: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#999",
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRadio: {
    borderColor: "#007AFF",
  },
  radioLabel: {
    fontSize: 16,
    color: "#333",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  switchLabel: {
    fontSize: 16,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
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
