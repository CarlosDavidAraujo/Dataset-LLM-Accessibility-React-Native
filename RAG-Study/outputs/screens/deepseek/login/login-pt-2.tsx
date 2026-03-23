import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Usuário/E-mail</Text>
      <TextInput
        style={styles.input}
        accessibilityLabel="usuário ou e-mail"
        placeholder="Digite seu usuário ou e-mail"
        keyboardType="email-address"
      />
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        accessibilityLabel="senha"
        placeholder="Digite sua senha"
        secureTextEntry
      />
      <Button title="Entrar" onPress={() => {}} accessibilityLabel="entrar" />
      <Button
        title="Esqueci a Senha"
        onPress={() => {}}
        accessibilityLabel="esqueci a senha"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
