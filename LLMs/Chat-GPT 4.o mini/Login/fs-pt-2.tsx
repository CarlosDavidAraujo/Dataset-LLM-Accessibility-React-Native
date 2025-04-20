import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Rótulo e campo de entrada de nome de usuário */}
      <Text nativeID="usernameLabel" style={styles.label}>
        Nome de Usuário ou E-mail
      </Text>
      <TextInput
        accessibilityLabelledBy="usernameLabel"
        style={styles.input}
        placeholder="Digite seu nome de usuário ou e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="username"
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
      />

      {/* Botão de login */}
      <TouchableOpacity style={styles.button} accessibilityLabel="Entrar na conta">
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Botão de "Esqueceu a senha?" */}
      <TouchableOpacity style={styles.linkButton} accessibilityLabel="Recuperar senha">
        <Text style={styles.linkText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  label: {
    fontSize: 16,
    color: '#000000', // Contraste adequado
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    minWidth: 200, // Alvo de toque adequado
    minHeight: 48, // Alvo de toque adequado
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  linkButton: {
    alignItems: 'center',
    marginTop: 10,
  },
  linkText: {
    color: '#007BFF', // Contraste adequado
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});

export default LoginScreen;
