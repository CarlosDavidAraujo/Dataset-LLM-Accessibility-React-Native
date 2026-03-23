import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, AccessibilityInfo } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }
    Alert.alert('Sucesso', 'Login realizado com sucesso!');
  };

  const handleForgotPassword = () => {
    Alert.alert('Recuperação de Senha', 'Instruções enviadas para o seu e-mail');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} accessibilityRole="header">
        Login
      </Text>
      
      <View style={styles.inputContainer}>
        <Text nativeID="emailLabel" style={styles.label}>
          E-mail ou nome de usuário
        </Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          accessibilityLabel="Campo de e-mail ou nome de usuário"
          accessibilityLabelledBy="emailLabel"
          accessibilityHint="Digite seu e-mail ou nome de usuário cadastrado"
          autoComplete="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          returnKeyType="next"
          enablesReturnKeyAutomatically={true}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text nativeID="passwordLabel" style={styles.label}>
          Senha
        </Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
            accessibilityLabel="Campo de senha"
            accessibilityLabelledBy="passwordLabel"
            accessibilityHint="Digite sua senha"
            autoComplete="password"
            textContentType="password"
            returnKeyType="done"
            enablesReturnKeyAutomatically={true}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            accessibilityRole="button"
            accessibilityLabel={isPasswordVisible ? "Ocultar senha" : "Mostrar senha"}
            accessibilityHint="Toque para alternar a visibilidade da senha"
            style={styles.toggleButton}
          >
            <Text style={styles.toggleButtonText}>
              {isPasswordVisible ? 'Ocultar' : 'Mostrar'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
        accessibilityRole="button"
        accessibilityLabel="Botão de entrar"
        accessibilityHint="Toque para fazer login na sua conta"
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={handleForgotPassword}
        accessibilityRole="button"
        accessibilityLabel="Botão de esqueci a senha"
        accessibilityHint="Toque para recuperar sua senha"
        accessibilityActions={[
          { name: 'activate', label: 'Recuperar senha' }
        ]}
        onAccessibilityAction={(event) => {
          if (event.nativeEvent.actionName === 'activate') {
            handleForgotPassword();
          }
        }}
      >
        <Text style={styles.forgotButtonText}>Esqueci a Senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  toggleButton: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderLeftWidth: 1,
    borderLeftColor: '#ddd',
  },
  toggleButtonText: {
    color: '#333',
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  forgotButton: {
    marginTop: 20,
    alignItems: 'center',
    padding: 10,
  },
  forgotButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
