import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Alert,
  AccessibilityInfo,
  findNodeHandle
} from 'react-native';

const LoginScreen = () => {
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
    Alert.alert('Recuperação de Senha', 'Instruções enviadas para seu e-mail');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  // Referências para acessibilidade
  const emailInputRef = React.useRef(null);
  const passwordInputRef = React.useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title} accessibilityRole="header">
        Entrar na sua conta
      </Text>

      {/* Campo de E-mail/Usuário */}
      <View style={styles.inputContainer}>
        <Text 
          nativeID="emailLabel" 
          style={styles.label}
        >
          E-mail ou nome de usuário
        </Text>
        <TextInput
          ref={emailInputRef}
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          accessibilityLabel="Campo de e-mail ou nome de usuário"
          accessibilityLabelledBy="emailLabel"
          accessibilityHint="Digite seu endereço de e-mail ou nome de usuário"
          textContentType="emailAddress"
          autoComplete="email"
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => {
            const nodeHandle = findNodeHandle(passwordInputRef.current);
            if (nodeHandle) AccessibilityInfo.setAccessibilityFocus(nodeHandle);
          }}
        />
      </View>

      {/* Campo de Senha */}
      <View style={styles.inputContainer}>
        <Text 
          nativeID="passwordLabel" 
          style={styles.label}
        >
          Senha
        </Text>
        <View style={styles.passwordContainer}>
          <TextInput
            ref={passwordInputRef}
            style={[styles.input, styles.passwordInput]}
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
            accessibilityLabel="Campo de senha"
            accessibilityLabelledBy="passwordLabel"
            accessibilityHint="Digite sua senha"
            textContentType="password"
            autoComplete="password"
            returnKeyType="done"
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            accessibilityRole="button"
            accessibilityLabel={
              isPasswordVisible ? "Ocultar senha" : "Mostrar senha"
            }
            accessibilityHint="Alterna a visibilidade da senha"
            style={styles.toggleButton}
          >
            <Text style={styles.toggleButtonText}>
              {isPasswordVisible ? 'Ocultar' : 'Mostrar'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Botão de Entrar */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
        accessibilityRole="button"
        accessibilityLabel="Entrar no aplicativo"
        accessibilityHint="Toque para fazer login na sua conta"
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Botão Esqueci a Senha */}
      <TouchableOpacity
        style={styles.forgotPasswordButton}
        onPress={handleForgotPassword}
        accessibilityRole="button"
        accessibilityLabel="Recuperar senha"
        accessibilityHint="Toque para recuperar sua senha"
      >
        <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    marginRight: 10,
  },
  toggleButton: {
    padding: 10,
  },
  toggleButtonText: {
    color: '#007AFF',
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  forgotPasswordButton: {
    padding: 12,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LoginScreen;
