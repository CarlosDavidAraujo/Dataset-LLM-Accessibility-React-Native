import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        accessibilityLabel="nome"
        placeholder="Digite seu nome"
      />

      <Text style={styles.label}>Sobrenome</Text>
      <TextInput
        style={styles.input}
        accessibilityLabel="sobrenome"
        placeholder="Digite seu sobrenome"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        autoComplete="email"
        textContentType="emailAddress"
        accessibilityLabel="email"
        placeholder="Digite seu email"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        autoComplete="password"
        textContentType="password"
        accessibilityLabel="senha"
        placeholder="Digite sua senha"
      />

      <Text style={styles.label}>Data de Nascimento</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        accessibilityLabel="data de nascimento"
        placeholder="DD/MM/AAAA"
      />

      <Text style={styles.label}>Gênero</Text>
      <Picker
        selectedValue="female" // Valor padrão do picker, pode ser ajustado conforme necessário
        onValueChange={(itemValue) => console.log(itemValue)}
        accessibilityLabel="gênero"
      >
        <Picker.Item label="Feminino" value="female" />
        <Picker.Item label="Masculino" value="male" />
        <Picker.Item label="Outro" value="other" />
      </Picker>

      <View style={styles.buttonContainer}>
        <Button
          title="Enviar"
          onPress={() => alert("Enviado!")}
          accessibilityLabel="enviar dados do formulário"
        />
        <Button
          title="Cancelar"
          onPress={() => alert("Cancelado!")}
          accessibilityLabel="cancelar o processo de registro"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default SignUpScreen;
