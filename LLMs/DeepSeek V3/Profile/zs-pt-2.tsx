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
  const [userData, setUserData] = useState({
    firstName: "João",
    lastName: "Silva",
    email: "joao.silva@exemplo.com",
    phone: "(11) 98765-4321",
  });

  const handleInputChange = (name, value) => {
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Aqui você adicionaria a lógica para salvar no backend
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      accessibilityLabel="Tela de perfil do usuário"
    >
      <View style={styles.profileSection}>
        {/* Foto de perfil com rótulo acessível */}
        <Image
          source={{ uri: "https://example.com/profile.jpg" }}
          style={styles.profileImage}
          accessibilityLabel="Foto de perfil do usuário"
          accessible={true}
          accessibilityRole="image"
        />

        {/* Nome completo como cabeçalho */}
        <Text style={styles.fullName} accessibilityRole="header">
          {`${userData.firstName} ${userData.lastName}`}
        </Text>
      </View>

      <View style={styles.infoSection}>
        {/* Campo Nome */}
        <View style={styles.inputGroup}>
          <Text
            style={styles.label}
            accessibilityLabel="Nome"
            accessible={true}
          >
            Nome
          </Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={userData.firstName}
              onChangeText={(text) => handleInputChange("firstName", text)}
              accessibilityLabel="Campo para editar nome"
              accessibilityHint="Digite seu nome"
              editable={isEditing}
              importantForAccessibility="yes"
            />
          ) : (
            <Text
              style={styles.infoText}
              accessibilityLabel={`Nome: ${userData.firstName}`}
            >
              {userData.firstName}
            </Text>
          )}
        </View>

        {/* Campo Sobrenome */}
        <View style={styles.inputGroup}>
          <Text style={styles.label} accessibilityLabel="Sobrenome">
            Sobrenome
          </Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={userData.lastName}
              onChangeText={(text) => handleInputChange("lastName", text)}
              accessibilityLabel="Campo para editar sobrenome"
              accessibilityHint="Digite seu sobrenome"
              editable={isEditing}
            />
          ) : (
            <Text
              style={styles.infoText}
              accessibilityLabel={`Sobrenome: ${userData.lastName}`}
            >
              {userData.lastName}
            </Text>
          )}
        </View>

        {/* Campo E-mail */}
        <View style={styles.inputGroup}>
          <Text style={styles.label} accessibilityLabel="E-mail">
            E-mail
          </Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={userData.email}
              onChangeText={(text) => handleInputChange("email", text)}
              keyboardType="email-address"
              accessibilityLabel="Campo para editar e-mail"
              accessibilityHint="Digite seu e-mail"
              editable={isEditing}
            />
          ) : (
            <Text
              style={styles.infoText}
              accessibilityLabel={`E-mail: ${userData.email}`}
            >
              {userData.email}
            </Text>
          )}
        </View>

        {/* Campo Telefone */}
        <View style={styles.inputGroup}>
          <Text style={styles.label} accessibilityLabel="Telefone">
            Telefone
          </Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={userData.phone}
              onChangeText={(text) => handleInputChange("phone", text)}
              keyboardType="phone-pad"
              accessibilityLabel="Campo para editar telefone"
              accessibilityHint="Digite seu número de telefone"
              editable={isEditing}
            />
          ) : (
            <Text
              style={styles.infoText}
              accessibilityLabel={`Telefone: ${userData.phone}`}
            >
              {userData.phone}
            </Text>
          )}
        </View>
      </View>

      <View style={styles.buttonGroup}>
        {isEditing ? (
          <TouchableOpacity
            style={[styles.button, styles.saveButton]}
            onPress={handleSave}
            accessibilityLabel="Salvar alterações"
            accessibilityRole="button"
            accessibilityHint="Clique para salvar as alterações do perfil"
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.button, styles.editButton]}
            onPress={() => setIsEditing(true)}
            accessibilityLabel="Editar perfil"
            accessibilityRole="button"
            accessibilityHint="Clique para editar suas informações de perfil"
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Editar</Text>
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
  profileSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  fullName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333", // Alto contraste com fundo branco
    marginBottom: 5,
  },
  infoSection: {
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333", // Alto contraste
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#FFFFFF",
    color: "#333333", // Alto contraste
  },
  infoText: {
    fontSize: 16,
    padding: 12,
    color: "#333333", // Alto contraste
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
  },
  buttonGroup: {
    marginTop: 20,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 48, // Tamanho mínimo para toque acessível
    minWidth: "100%", // Largura adequada
  },
  editButton: {
    backgroundColor: "#2E7D32", // Verde escuro para bom contraste
  },
  saveButton: {
    backgroundColor: "#1565C0", // Azul escuro para bom contraste
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
