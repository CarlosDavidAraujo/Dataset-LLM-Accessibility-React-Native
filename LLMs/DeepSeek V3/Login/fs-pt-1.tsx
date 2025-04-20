import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Campo de Nome de Usuário/E-mail */}
      <Text nativeID="usernameLabel" style={styles.label}>
        Nome de Usuário/E-mail
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="usernameLabel"
        autoComplete="username"
        textContentType="username"
        placeholder="Digite seu nome de usuário ou e-mail"
        placeholderTextColor="#666"
      />

      {/* Campo de Senha */}
      <Text nativeID="passwordLabel" style={styles.label}>
        Senha
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="passwordLabel"
        autoComplete="password"
        textContentType="password"
        placeholder="Digite sua senha"
        placeholderTextColor="#666"
        secureTextEntry
      />

      {/* Botão de Entrar */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Entrar na conta"
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Botão de Esqueceu a Senha */}
      <TouchableOpacity
        style={styles.forgotPasswordButton}
        accessibilityLabel="Recuperar senha"
      >
        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  label: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
    color: '#000000',
    backgroundColor: '#FFFFFF',
  },
  button: {
    minWidth: 48,
    minHeight: 48,
    backgroundColor: '#003366',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  forgotPasswordButton: {
    minWidth: 48,
    minHeight: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#003366',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;