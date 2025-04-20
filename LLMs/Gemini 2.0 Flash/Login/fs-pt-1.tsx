import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Text nativeID="usernameLabel" style={styles.label}>
        Nome de Usuário / E-mail
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
        secureTextEntry={true}
        placeholder="Digite sua senha"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotPasswordButton}>
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
    backgroundColor: '#FFFFFF', // Contraste adequado com o texto
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000', // Contraste adequado
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333333', // Contraste adequado
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    color: '#000000', // Contraste adequado
  },
  button: {
    backgroundColor: '#007AFF', // Cor de fundo com bom contraste
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    minWidth: 48, // Tamanho mínimo para alvo de toque
    minHeight: 48, // Tamanho mínimo para alvo de toque
  },
  buttonText: {
    color: '#FFFFFF', // Contraste adequado com o fundo do botão
    fontSize: 16,
  },
  forgotPasswordButton: {
    marginTop: 10,
    minWidth: 48, // Tamanho mínimo para alvo de toque
    minHeight: 48, // Tamanho mínimo para alvo de toque
    padding: 8, // Adiciona preenchimento para facilitar o toque
    alignSelf: 'center',
  },
  forgotPasswordText: {
    color: '#007AFF', // Cor com bom contraste
    fontSize: 14,
  },
});

export default LoginScreen;