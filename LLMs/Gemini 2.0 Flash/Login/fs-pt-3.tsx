import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Text nativeID="usernameLabel" style={styles.label}>
        Nome de Usuário ou E-mail
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="usernameLabel"
        autoComplete="username"
        textContentType="username"
        placeholder="Digite seu nome de usuário ou e-mail"
      />

      <Text nativeID="passwordLabel" style={styles.label}>
        Senha
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="passwordLabel"
        secureTextEntry
        placeholder="Digite sua senha"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotPassword}>
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
    backgroundColor: '#FFFFFF', // Bom contraste com o texto
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000000', // Bom contraste com o fundo
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: '#000000', // Bom contraste com o fundo
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    color: '#000000', // Bom contraste com o fundo
  },
  button: {
    backgroundColor: '#007AFF', // Bom contraste com o texto
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 44, // Tamanho mínimo para toque
    minHeight: 44, // Tamanho mínimo para toque
  },
  buttonText: {
    color: '#FFFFFF', // Bom contraste com o fundo
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: 16,
    alignItems: 'center',
    minWidth: 44, // Tamanho mínimo para toque
    minHeight: 44, // Tamanho mínimo para toque
  },
  forgotPasswordText: {
    color: '#007AFF', // Bom contraste com o fundo
    fontSize: 16,
  },
});

export default LoginScreen;