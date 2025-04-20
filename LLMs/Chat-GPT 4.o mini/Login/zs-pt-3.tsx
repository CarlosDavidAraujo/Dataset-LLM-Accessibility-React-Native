import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica para login
  };

  const handleForgotPassword = () => {
    // Lógica para recuperação de senha
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header} accessibilityRole="header">Bem-vindo ao App</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário ou e-mail"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        accessibilityLabel="Campo de e-mail"
        accessibilityHint="Digite seu nome de usuário ou e-mail"
        importantForAccessibility="yes"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        accessibilityLabel="Campo de senha"
        accessibilityHint="Digite sua senha"
        importantForAccessibility="yes"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        accessible={true}
        accessibilityLabel="Entrar"
        accessibilityHint="Pressione para fazer login"
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={handleForgotPassword}
        accessible={true}
        accessibilityLabel="Esqueceu a senha?"
        accessibilityHint="Pressione para recuperar sua senha"
        accessibilityRole="button"
      >
        <Text style={styles.forgotText}>Esqueceu a senha?</Text>
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
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  forgotButton: {
    paddingTop: 10,
  },
  forgotText: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LoginScreen;
