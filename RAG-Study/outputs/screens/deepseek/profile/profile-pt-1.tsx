import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const ProfileScreen = () => {
  const navigation = useNavigation<any>();

  // Dados do perfil (mock)
  const profileData = {
    name: "John",
    surname: "Doe",
    email: "john.doe@example.com",
    phone: "+1-202-555-0164",
  };

  // Função para editar perfil (simulada)
  const handleEditProfile = () => {
    navigation.navigate("EditProfile");
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        style={styles.profilePic}
        accessibilityLabel="Foto de perfil do usuário"
      />
      <Text style={styles.text}>Nome: {profileData.name}</Text>
      <Text style={styles.text}>Sobrenome: {profileData.surname}</Text>
      <Text style={styles.text}>Email: {profileData.email}</Text>
      <Text style={styles.text}>Telefone: {profileData.phone}</Text>
      <Button
        title="Editar Perfil"
        onPress={handleEditProfile}
        accessibilityLabel="Botão para editar o perfil do usuário"
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
  profilePic: {
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
