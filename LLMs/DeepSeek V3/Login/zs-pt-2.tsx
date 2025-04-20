import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de login aqui
    Alert.alert('Login', `Usuário: ${username}, Senha: ${password}`);
  };

  const handleForgotPassword = () => {
    // Lógica para "Esqueceu a senha?" aqui
    Alert.alert('Esqueceu a senha?', 'Redefinir senha.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Campo de nome de usuário/e-mail */}
      <Text style={styles.label}>Nome de usuário/E-mail</Text>
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

      {/* Campo de senha */}
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
        accessibilityLabel="Botão de Entrar"
        accessibilityHint="Pressione para fazer login"
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Botão de Esqueceu a senha? */}
      <TouchableOpacity
        style={styles.forgotPasswordButton}
        onPress={handleForgotPassword}
        accessibilityLabel="Esqueceu a senha?"
        accessibilityHint="Pressione para redefinir sua senha"
        accessibilityRole="button"
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
  },
  button: {
    backgroundColor: '#007AFF',
    height: 50,
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
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;