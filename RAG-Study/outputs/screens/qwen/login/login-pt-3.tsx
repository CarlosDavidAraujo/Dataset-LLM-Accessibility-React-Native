import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, AccessibilityInfo } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }
    Alert.alert('Sucesso', 'Login realizado com sucesso!');
  };

  const handleForgotPassword = () => {
    Alert.alert('Recuperação de Senha', 'Instruções enviadas para seu e-mail');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} accessibilityRole="header">
        Entrar na Conta
      </Text>

      <View style={styles.inputGroup}>
        <Text 
          nativeID="emailLabel" 
          style={[styles.label, emailFocus && styles.focusedLabel]}
        >
          E-mail ou nome de usuário
        </Text>
        <TextInput
          style={[styles.input, emailFocus && styles.focusedInput]}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
          accessibilityLabel="Campo de e-mail ou nome de usuário"
          accessibilityLabelledBy="emailLabel"
          accessibilityRole="text"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text 
          nativeID="passwordLabel" 
          style={[styles.label, passwordFocus && styles.focusedLabel]}
        >
          Senha
        </Text>
        <TextInput
          style={[styles.input, passwordFocus && styles.focusedInput]}
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
          secureTextEntry
          accessibilityLabel="Campo de senha"
          accessibilityLabelledBy="passwordLabel"
          accessibilityRole="text"
          textContentType="password"
          autoComplete="password"
        />
      </View>

      <TouchableOpacity
        onPress={handleLogin}
        accessibilityRole="button"
        accessibilityLabel="Botão de entrar"
        accessibilityHint="Faz login na aplicação"
        style={styles.loginButton}
      >
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleForgotPassword}
        accessibilityRole="button"
        accessibilityLabel="Botão de esqueci minha senha"
        accessibilityHint="Abre tela de recuperação de senha"
        style={styles.forgotPasswordButton}
      >
        <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
    color: '#333',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#555',
  },
  focusedLabel: {
    color: '#007AFF',
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  focusedInput: {
    borderColor: '#007AFF',
  },
  loginButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  forgotPasswordButton: {
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 12,
  },
  forgotPasswordText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
