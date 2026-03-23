import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "João",
    lastName: "Silva",
    email: "joao.silva@example.com",
    phone: "(11) 99999-9999",
  });

  const handleSave = () => {
    setIsEditing(false);
    Alert.alert("Sucesso", "Informações salvas com sucesso!");
  };

  const handleChange = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const handleEditAction = () => {
    setIsEditing(true);
  };

  return (
    <ScrollView
      style={styles.container}
      accessibilityLabel="Tela de perfil do usuário"
      accessibilityHint="Contém informações pessoais e opções para edição"
    >
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: "https://placehold.co/120x120" }}
          style={styles.profileImage}
          accessibilityLabel="Foto de perfil do usuário"
        />
        <Text style={styles.profileName} accessibilityRole="header">
          {profileData.firstName} {profileData.lastName}
        </Text>
      </View>

      <View
        style={styles.formContainer}
        accessibilityLabel="Formulário de informações pessoais"
      >
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={[
              styles.input,
              isEditing ? styles.editableInput : styles.readOnlyInput,
            ]}
            value={profileData.firstName}
            onChangeText={(value) => handleChange("firstName", value)}
            editable={isEditing}
            accessibilityLabel="Campo de nome"
            accessibilityHint={
              isEditing ? "Digite seu nome" : "Nome do usuário"
            }
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Sobrenome</Text>
          <TextInput
            style={[
              styles.input,
              isEditing ? styles.editableInput : styles.readOnlyInput,
            ]}
            value={profileData.lastName}
            onChangeText={(value) => handleChange("lastName", value)}
            editable={isEditing}
            accessibilityLabel="Campo de sobrenome"
            accessibilityHint={
              isEditing ? "Digite seu sobrenome" : "Sobrenome do usuário"
            }
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[
              styles.input,
              isEditing ? styles.editableInput : styles.readOnlyInput,
            ]}
            value={profileData.email}
            onChangeText={(value) => handleChange("email", value)}
            editable={isEditing}
            keyboardType="email-address"
            accessibilityLabel="Campo de email"
            accessibilityHint={
              isEditing ? "Digite seu email" : "Email do usuário"
            }
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Telefone</Text>
          <TextInput
            style={[
              styles.input,
              isEditing ? styles.editableInput : styles.readOnlyInput,
            ]}
            value={profileData.phone}
            onChangeText={(value) => handleChange("phone", value)}
            editable={isEditing}
            keyboardType="phone-pad"
            accessibilityLabel="Campo de telefone"
            accessibilityHint={
              isEditing ? "Digite seu telefone" : "Telefone do usuário"
            }
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        {!isEditing ? (
          <TouchableOpacity
            style={[styles.button, styles.editButton]}
            onPress={handleEditAction}
            accessibilityLabel="Botão editar perfil"
            accessibilityHint="Ativa o modo de edição das informações"
            accessibilityRole="button"
          >
            <Text style={styles.buttonText}>Editar Perfil</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.button, styles.saveButton]}
            onPress={handleSave}
            accessibilityLabel="Botão salvar alterações"
            accessibilityHint="Salva as alterações feitas no perfil"
            accessibilityRole="button"
          >
            <Text style={styles.buttonText}>Salvar Alterações</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 30,
    paddingTop: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#4a90e2",
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  formContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  readOnlyInput: {
    backgroundColor: "#f0f0f0",
    borderColor: "#ddd",
    color: "#666",
  },
  editableInput: {
    backgroundColor: "#fff",
    borderColor: "#4a90e2",
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 200,
  },
  editButton: {
    backgroundColor: "#4a90e2",
  },
  saveButton: {
    backgroundColor: "#34c759",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default ProfileScreen;
