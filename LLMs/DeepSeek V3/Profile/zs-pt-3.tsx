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

  const handleSave = () => {
    setIsEditing(false);
    // Aqui você adicionaria a lógica para salvar no backend
  };

  const handleChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      {/* Cabeçalho */}
      <Text style={styles.title} accessibilityRole="header">
        Meu Perfil
      </Text>

      {/* Foto de Perfil */}
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: profile.photo }}
          style={styles.avatar}
          accessibilityLabel={`Foto de perfil de ${profile.firstName} ${profile.lastName}`}
          accessible
          accessibilityRole="image"
        />
        {isEditing && (
          <TouchableOpacity
            style={styles.changePhotoButton}
            activeOpacity={0.7}
            accessibilityLabel="Alterar foto de perfil"
            accessibilityHint="Abre as opções para selecionar uma nova foto"
            accessibilityRole="button"
          >
            <Text style={styles.changePhotoText}>Alterar Foto</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Campos do Formulário */}
      <View style={styles.formGroup}>
        <Text style={styles.label} accessibilityRole="text">
          Nome
        </Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.firstName}
            onChangeText={(text) => handleChange("firstName", text)}
            placeholder="Digite seu nome"
            placeholderTextColor="#777"
            accessibilityLabel="Campo para editar o nome"
            accessibilityHint="Digite seu primeiro nome"
            importantForAutofill="yes"
          />
        ) : (
          <Text style={styles.text} accessibilityRole="text">
            {profile.firstName}
          </Text>
        )}
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label} accessibilityRole="text">
          Sobrenome
        </Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.lastName}
            onChangeText={(text) => handleChange("lastName", text)}
            placeholder="Digite seu sobrenome"
            placeholderTextColor="#777"
            accessibilityLabel="Campo para editar o sobrenome"
            accessibilityHint="Digite seu sobrenome"
            importantForAutofill="yes"
          />
        ) : (
          <Text style={styles.text} accessibilityRole="text">
            {profile.lastName}
          </Text>
        )}
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label} accessibilityRole="text">
          E-mail
        </Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.email}
            onChangeText={(text) => handleChange("email", text)}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#777"
            keyboardType="email-address"
            autoCapitalize="none"
            accessibilityLabel="Campo para editar o e-mail"
            accessibilityHint="Digite seu endereço de e-mail"
            importantForAutofill="yes"
          />
        ) : (
          <Text style={styles.text} accessibilityRole="text">
            {profile.email}
          </Text>
        )}
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label} accessibilityRole="text">
          Telefone
        </Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.phone}
            onChangeText={(text) => handleChange("phone", text)}
            placeholder="Digite seu telefone"
            placeholderTextColor="#777"
            keyboardType="phone-pad"
            accessibilityLabel="Campo para editar o telefone"
            accessibilityHint="Digite seu número de telefone"
            importantForAutofill="yes"
          />
        ) : (
          <Text style={styles.text} accessibilityRole="text">
            {profile.phone}
          </Text>
        )}
      </View>

      {/* Botões de Ação */}
      <View style={styles.buttonsContainer}>
        {isEditing ? (
          <>
            <TouchableOpacity
              style={[styles.button, styles.saveButton]}
              onPress={handleSave}
              activeOpacity={0.7}
              accessibilityLabel="Salvar alterações"
              accessibilityHint="Salva as informações editadas do perfil"
              accessibilityRole="button"
            >
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() => setIsEditing(false)}
              activeOpacity={0.7}
              accessibilityLabel="Cancelar edição"
              accessibilityHint="Descarta as alterações feitas no perfil"
              accessibilityRole="button"
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity
            style={[styles.button, styles.editButton]}
            onPress={() => setIsEditing(true)}
            activeOpacity={0.7}
            accessibilityLabel="Editar perfil"
            accessibilityHint="Permite editar as informações do perfil"
            accessibilityRole="button"
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
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  changePhotoButton: {
    padding: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
  },
  changePhotoText: {
    color: "#333",
    fontSize: 14,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#444",
    marginBottom: 8,
    fontWeight: "600",
  },
  text: {
    fontSize: 16,
    color: "#333",
    paddingVertical: 10,
  },
  input: {
    fontSize: 16,
    color: "#333",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#fff",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    gap: 10,
  },
  button: {
    minWidth: 100,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    // Tamanho mínimo de toque recomendado pela WCAG
    minHeight: 44,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  editButton: {
    backgroundColor: "#007AFF",
  },
  saveButton: {
    backgroundColor: "#34C759",
  },
  cancelButton: {
    backgroundColor: "#FF3B30",
  },
});

export default ProfileScreen;
