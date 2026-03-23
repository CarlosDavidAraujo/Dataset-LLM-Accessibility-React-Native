import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const SignUpScreen: React.FC = () => {
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

      <Text style={styles.label}>Endereço de E-mail</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        accessibilityLabel="endereço de e-mail"
        placeholder="Digite seu endereço de e-mail"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
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
        selectedValue=""
        onValueChange={(itemValue) => console.log(itemValue)}
        accessibilityLabel="gênero"
      >
        <Picker.Item label="Selecione o gênero" value="" />
        <Picker.Item label="Masculino" value="masculino" />
        <Picker.Item label="Feminino" value="feminino" />
        <Picker.Item label="Outro" value="outro" />
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
    justifyContent: "center",
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default SignUpScreen;
