import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const TelaDeLogin = () => {
  return (
    <View style={styles.container}>
      {/* Título da Tela */}
      <Text style={styles.title}>Acesso ao Sistema</Text>

      {/* Campo de Nome de Usuário */}
      <View style={styles.inputContainer}>
        <Text nativeID="usernameLabel" style={styles.label}>Nome de Usuário</Text>
        <TextInput
          accessibilityLabelledBy="usernameLabel"
          style={styles.input}
          placeholder="Digite seu nome de usuário"
          placeholderTextColor="#AAAAAA"
          autoCapitalize="none"
          autoComplete="username"
          textContentType="username"
        />
      </View>

      {/* Campo de Senha */}
      <View style={styles.inputContainer}>
        <Text nativeID="passwordLabel" style={styles.label}>Senha</Text>
        <TextInput
          accessibilityLabelledBy="passwordLabel"
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#AAAAAA"
          secureTextEntry
          autoCapitalize="none"
          autoComplete="password"
          textContentType="password"
        />
      </View>

      {/* Botão Entrar */}
      <TouchableOpacity style={styles.button} accessibilityLabel="Entrar no sistema">
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Link Esqueceu a senha */}
      <TouchableOpacity style={styles.link} accessibilityLabel="Esqueceu a senha">
        <Text style={styles.linkText}>Esqueceu a senha?</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',  // Contraste alto com fundo branco
    textAlign: 'center',
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#000000',  // Contraste alto com fundo branco
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 8,
    fontSize: 16,
    color: '#000000',  // Contraste alto com fundo claro
  },
  button: {
    backgroundColor: '#007BFF',  // Contraste com fundo branco
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    minWidth: 200,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  link: {
    marginTop: 16,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 16,
    color: '#007BFF',  // Contraste alto com fundo branco
    textDecorationLine: 'underline',
  },
});

export default TelaDeLogin;
