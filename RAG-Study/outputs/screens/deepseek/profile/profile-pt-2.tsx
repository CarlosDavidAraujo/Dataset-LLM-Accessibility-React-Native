import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const ProfileScreen = () => {
  const navigation = useNavigation<any>();

  // Dados de perfil mockados para exemplo
  const profileData = {
    name: "John",
    surname: "Doe",
    email: "john.doe@example.com",
    phone: "+1-202-555-0164",
  };

  // Função mockada para atualizar perfil (simulação de API call)
  const updateProfile = () => {
    alert("Perfil atualizado com sucesso!");
    navigation.navigate("Home"); // Navega de volta para a tela inicial após atualização
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        style={styles.avatar}
        accessibilityLabel="Foto de perfil do usuário"
      />
      <Text style={styles.text}>Nome: {profileData.name}</Text>
      <Text style={styles.text}>Sobrenome: {profileData.surname}</Text>
      <Text style={styles.text}>Email: {profileData.email}</Text>
      <Text style={styles.text}>Telefone: {profileData.phone}</Text>
      <Button
        title="Editar"
        onPress={() => navigation.navigate("EditProfile", { profileData })}
        accessibilityLabel="Botão para editar informações do perfil"
      />
      <Button
        title="Salvar"
        onPress={updateProfile}
        accessibilityLabel="Botão para salvar as alterações no perfil"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default ProfileScreen;
