import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  AccessibilityInfo,
  Platform,
} from "react-native";

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "João",
    lastName: "Silva",
    email: "joao.silva@example.com",
    phone: "(11) 98765-4321",
    photo: "https://example.com/profile.jpg",
  });

  const handleEdit = () => {
    setIsEditing(true);
    // Anuncia para leitores de tela que o modo de edição foi ativado
    if (Platform.OS === "android") {
      AccessibilityInfo.announceForAccessibility("Modo de edição ativado");
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    // Anuncia para leitores de tela que as alterações foram salvas
    if (Platform.OS === "android") {
      AccessibilityInfo.announceForAccessibility(
        "Alterações salvas com sucesso"
      );
    }
  };

  const handleChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      accessible={true}
      accessibilityLabel="Tela de perfil do usuário"
    >
      {/* Foto de perfil */}
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: profile.photo }}
          style={styles.avatar}
          accessibilityRole="image"
          accessibilityLabel={`Foto de perfil de ${profile.firstName} ${profile.lastName}`}
        />
      </View>

      {/* Campos do formulário */}
      <View style={styles.formGroup}>
        <Text style={styles.label} accessible={true} accessibilityLabel="Nome">
          Nome
        </Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.firstName}
            onChangeText={(text) => handleChange("firstName", text)}
            accessibilityLabel="Campo para editar o nome"
            accessibilityHint="Digite seu nome"
            accessible={true}
          />
        ) : (
          <Text
            style={styles.text}
            accessibilityLabel={`Nome: ${profile.firstName}`}
            accessible={true}
          >
            {profile.firstName}
          </Text>
        )}
      </View>

      <View style={styles.formGroup}>
        <Text
          style={styles.label}
          accessible={true}
          accessibilityLabel="Sobrenome"
        >
          Sobrenome
        </Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.lastName}
            onChangeText={(text) => handleChange("lastName", text)}
            accessibilityLabel="Campo para editar o sobrenome"
            accessibilityHint="Digite seu sobrenome"
            accessible={true}
          />
        ) : (
          <Text
            style={styles.text}
            accessibilityLabel={`Sobrenome: ${profile.lastName}`}
            accessible={true}
          >
            {profile.lastName}
          </Text>
        )}
      </View>

      <View style={styles.formGroup}>
        <Text
          style={styles.label}
          accessible={true}
          accessibilityLabel="E-mail"
        >
          E-mail
        </Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.email}
            onChangeText={(text) => handleChange("email", text)}
            keyboardType="email-address"
            accessibilityLabel="Campo para editar o e-mail"
            accessibilityHint="Digite seu e-mail"
            accessible={true}
          />
        ) : (
          <Text
            style={styles.text}
            accessibilityLabel={`E-mail: ${profile.email}`}
            accessible={true}
          >
            {profile.email}
          </Text>
        )}
      </View>

      <View style={styles.formGroup}>
        <Text
          style={styles.label}
          accessible={true}
          accessibilityLabel="Telefone"
        >
          Telefone
        </Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.phone}
            onChangeText={(text) => handleChange("phone", text)}
            keyboardType="phone-pad"
            accessibilityLabel="Campo para editar o telefone"
            accessibilityHint="Digite seu número de telefone"
            accessible={true}
          />
        ) : (
          <Text
            style={styles.text}
            accessibilityLabel={`Telefone: ${profile.phone}`}
            accessible={true}
          >
            {profile.phone}
          </Text>
        )}
      </View>

      {/* Botões de ação */}
      <View style={styles.actions}>
        {!isEditing ? (
          <TouchableOpacity
            style={styles.button}
            onPress={handleEdit}
            accessible={true}
            accessibilityLabel="Editar perfil"
            accessibilityHint="Clique para editar suas informações de perfil"
            accessibilityRole="button"
          >
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.button, styles.saveButton]}
            onPress={handleSave}
            accessible={true}
            accessibilityLabel="Salvar alterações"
            accessibilityHint="Clique para salvar as alterações do perfil"
            accessibilityRole="button"
          >
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333", // Cor escura para bom contraste
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: "#444444", // Cor escura para bom contraste
    paddingVertical: 10,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    padding: 12,
    color: "#333333", // Cor escura para bom contraste
    backgroundColor: "#FFFFFF",
  },
  actions: {
    marginTop: 30,
  },
  button: {
    backgroundColor: "#2E7D32", // Verde escuro para bom contraste
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    minWidth: 120, // Largura mínima para toque adequado
    minHeight: 48, // Altura mínima para toque adequado (WCAG recomenda pelo menos 44x44px)
  },
  saveButton: {
    backgroundColor: "#1565C0", // Azul escuro para bom contraste
  },
  buttonText: {
    color: "#FFFFFF", // Texto claro para contraste com fundo escuro
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
