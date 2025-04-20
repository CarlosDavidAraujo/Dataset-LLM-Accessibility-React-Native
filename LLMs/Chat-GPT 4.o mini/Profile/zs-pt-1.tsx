import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

const ProfileScreen = () => {
  const [name, setName] = useState("João");
  const [surname, setSurname] = useState("Silva");
  const [email, setEmail] = useState("joao.silva@email.com");
  const [phone, setPhone] = useState("+55 11 98765-4321");

  const handleEdit = () => {
    // Lógica para edição
    console.log("Editando perfil");
  };

  const handleSave = () => {
    // Lógica para salvar as informações
    console.log("Salvando perfil");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: "https://example.com/profile-pic.jpg" }}
          style={styles.profileImage}
          accessibilityLabel="Foto de perfil de João Silva"
        />
        <Text style={styles.profileName} accessibilityRole="header">
          {name} {surname}
        </Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label} accessibilityRole="text">
          Nome:
        </Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Digite seu nome"
          placeholderTextColor="#7f8c8d"
          accessibilityLabel="Campo de nome"
          accessible
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label} accessibilityRole="text">
          Sobrenome:
        </Text>
        <TextInput
          style={styles.input}
          value={surname}
          onChangeText={setSurname}
          placeholder="Digite seu sobrenome"
          placeholderTextColor="#7f8c8d"
          accessibilityLabel="Campo de sobrenome"
          accessible
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label} accessibilityRole="text">
          E-mail:
        </Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#7f8c8d"
          keyboardType="email-address"
          accessibilityLabel="Campo de e-mail"
          accessible
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label} accessibilityRole="text">
          Telefone:
        </Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Digite seu telefone"
          placeholderTextColor="#7f8c8d"
          keyboardType="phone-pad"
          accessibilityLabel="Campo de telefone"
          accessible
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleEdit}
          accessibilityLabel="Editar perfil"
          accessible
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleSave}
          accessibilityLabel="Salvar perfil"
          accessible
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 24,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#34495e",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 8,
    fontSize: 16,
    color: "#2c3e50",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 120,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
});

export default ProfileScreen;
