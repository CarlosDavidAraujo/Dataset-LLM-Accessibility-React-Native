import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Função de login
    console.log('Login clicado');
  };

  const handleForgotPassword = () => {
    // Função para lidar com a recuperação de senha
    console.log('Esqueceu a senha');
  };

  return (
    <View style={styles.container}>
      {/* Título da tela */}
      <Text style={styles.header}>Login</Text>

      {/* Campo de Nome de Usuário ou E-mail */}
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário ou E-mail"
        placeholderTextColor="#A0A0A0"
        value={username}
        onChangeText={setUsername}
        accessible={true}
        accessibilityLabel="Nome de usuário ou e-mail"
        accessibilityHint="Digite seu nome de usuário ou e-mail"
        textContentType="username"
        autoCapitalize="none"
      />

      {/* Campo de Senha */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#A0A0A0"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        accessible={true}
        accessibilityLabel="Senha"
        accessibilityHint="Digite sua senha"
        textContentType="password"
        autoCapitalize="none"
      />

      {/* Botão de Login */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        accessible={true}
        accessibilityLabel="Entrar"
        accessibilityHint="Clique para fazer login"
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} // Aumenta a área de toque
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Link para Esqueceu a Senha */}
      <TouchableOpacity
        style={styles.forgotPasswordLink}
        onPress={handleForgotPassword}
        accessible={true}
        accessibilityLabel="Esqueceu a senha?"
        accessibilityHint="Clique aqui para recuperar sua senha"
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} // Aumenta a área de toque
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
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333', // Contraste de texto suficiente
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333', // Contraste de texto suficiente
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordLink: {
    marginTop: 10,
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#007BFF', // Contraste de texto suficiente
  },
});

export default LoginScreen;
