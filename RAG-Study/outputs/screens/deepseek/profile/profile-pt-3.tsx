// ProfileScreen.tsx
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, Image, StyleSheet, TextInput, View } from "react-native";

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [name, setName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [phone, setPhone] = useState("123-456-7890");

  const handleSave = () => {
    // Lógica para salvar as informações
    console.log("Salvando...", name, lastName, email, phone);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        style={styles.avatar}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        accessibilityLabel="Nome"
        accessibilityHint="Digite seu nome."
      />
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={lastName}
        onChangeText={setLastName}
        accessibilityLabel="Sobrenome"
        accessibilityHint="Digite seu sobrenome."
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        accessibilityLabel="E-mail"
        accessibilityHint="Digite seu e-mail."
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        accessibilityLabel="Telefone"
        accessibilityHint="Digite seu telefone."
      />
      <Button
        title="Editar"
        onPress={() => navigation.navigate("EditProfile")}
      />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default ProfileScreen;
