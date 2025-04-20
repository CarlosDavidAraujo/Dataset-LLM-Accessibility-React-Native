import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Rótulo e campo de entrada de nome de usuário */}
      <Text nativeID="usernameLabel" style={styles.label}>
        Nome de Usuário
      </Text>
      <TextInput
        accessibilityLabelledBy="usernameLabel"
        style={styles.input}
        placeholder="Digite seu nome de usuário"
        textContentType="username"
        autoComplete="username"
      />

      {/* Rótulo e campo de entrada de senha */}
      <Text nativeID="passwordLabel" style={styles.label}>
        Senha
      </Text>
      <TextInput
        accessibilityLabelledBy="passwordLabel"
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        textContentType="password"
        autoComplete="password"
      />

      {/* Botão "Entrar" */}
      <TouchableOpacity style={styles.button} accessible={true} accessibilityLabel="Entrar no sistema" >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Botão "Esqueceu a senha?" */}
      <TouchableOpacity style={styles.linkButton} accessible={true} accessibilityLabel="Recuperar senha">
        <Text style={styles.linkText}>Esqueceu a senha?</Text>
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
    backgroundColor: '#FFFFFF',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    padding: 12,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    fontSize: 16,
    color: '#000000',
  },
  button: {
    minWidth: 200,
    minHeight: 48,
    padding: 12,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkButton: {
    marginTop: 16,
  },
  linkText: {
    color: '#007BFF',
    fontSize: 14,
  },
});

export default LoginScreen;
