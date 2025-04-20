import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  AccessibilityInfo,
} from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de login aqui
    console.log('Login com nome de usuário:', username, 'e senha:', password);
  };

  const handleForgotPassword = () => {
    // Lógica de senha esquecida aqui
    console.log('Senha esquecida');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fazer login</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome de usuário/E-mail"
        value={username}
        onChangeText={setUsername}
        accessibilityLabel="Nome de usuário ou e-mail"
        accessibilityHint="Digite seu nome de usuário ou e-mail"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        accessibilityLabel="Senha"
        accessibilityHint="Digite sua senha"
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword}>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    minWidth: 200, // Largura mínima para garantir alvos de toque adequados
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    minWidth: 200, // Largura mínima para garantir alvos de toque adequados
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  forgotPasswordText: {
    marginTop: 10,
    textAlign: 'center',
    color: 'blue',
    minWidth: 200, // Largura mínima para garantir alvos de toque adequados
  },
});

export default LoginScreen;