import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Função para processar login
  };

  const handleForgotPassword = () => {
    // Função para processar recuperação de senha
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Entrar</Text>

      {/* Campo de Nome de Usuário / E-mail */}
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="E-mail ou Nome de Usuário"
        placeholderTextColor="#A1A1A1"
        accessibilityLabel="Campo de nome de usuário ou e-mail"
        accessible={true}
      />

      {/* Campo de Senha */}
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Senha"
        secureTextEntry={true}
        placeholderTextColor="#A1A1A1"
        accessibilityLabel="Campo de senha"
        accessible={true}
      />

      {/* Botão de Login */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        accessible={true}
        accessibilityLabel="Botão de login"
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Botão Esqueceu a Senha */}
      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={handleForgotPassword}
        accessible={true}
        accessibilityLabel="Esqueceu a senha"
        accessibilityRole="link"
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
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F4F4F4',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 12,
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  forgotPassword: {
    marginTop: 12,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#007BFF',
  },
});

export default LoginScreen;
