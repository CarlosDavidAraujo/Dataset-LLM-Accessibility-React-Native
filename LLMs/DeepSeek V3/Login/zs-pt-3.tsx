import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação aqui
    Alert.alert('Login', `Usuário: ${username}, Senha: ${password}`);
  };

  const handleForgotPassword = () => {
    // Lógica para recuperação de senha aqui
    Alert.alert('Esqueceu a senha?', 'Redirecionando para a recuperação de senha...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Campo de Nome de Usuário/E-mail */}
      <Text style={styles.label}>Nome de Usuário/E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome de usuário ou e-mail"
        placeholderTextColor="#999"
        value={username}
        onChangeText={setUsername}
        accessibilityLabel="Campo de nome de usuário ou e-mail"
        accessibilityHint="Digite seu nome de usuário ou endereço de e-mail"
        autoCapitalize="none"
        keyboardType="email-address"
      />

      {/* Campo de Senha */}
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        accessibilityLabel="Campo de senha"
        accessibilityHint="Digite sua senha"
      />

      {/* Botão de Entrar */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        accessibilityLabel="Botão de entrar"
        accessibilityHint="Pressione para fazer login"
        accessible={true}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Botão de Esqueceu a Senha */}
      <TouchableOpacity
        style={styles.forgotPasswordButton}
        onPress={handleForgotPassword}
        accessibilityLabel="Botão de esqueceu a senha"
        accessibilityHint="Pressione para recuperar sua senha"
        accessible={true}
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
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#f9f9f9',
  },
  button: {
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotPasswordButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;