import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [profile, setProfile] = React.useState({
    name: "João",
    lastName: "Silva",
    email: "joao.silva@exemplo.com",
    phone: "(11) 99999-9999",
  });

  const handleSave = () => {
    setIsEditing(false);
    // Lógica para salvar no backend
  };

  return (
    <View style={styles.container} accessible={true}>
      {/* Cabeçalho com foto de perfil */}
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: "https://example.com/profile.jpg" }}
          style={styles.profileImage}
          accessibilityLabel="Foto de perfil do usuário"
          accessibilityRole="image"
        />
      </View>

      {/* Campos de informações */}
      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text nativeID="nameLabel" style={styles.label}>
            Nome
          </Text>
          {isEditing ? (
            <TextInput
              value={profile.name}
              onChangeText={(text) => setProfile({ ...profile, name: text })}
              style={styles.input}
              accessibilityLabelledBy="nameLabel"
              accessibilityLabel="Campo para editar nome"
              autoComplete="name"
              textContentType="givenName"
            />
          ) : (
            <Text style={styles.textValue}>{profile.name}</Text>
          )}
        </View>

        <View style={styles.inputGroup}>
          <Text nativeID="lastNameLabel" style={styles.label}>
            Sobrenome
          </Text>
          {isEditing ? (
            <TextInput
              value={profile.lastName}
              onChangeText={(text) =>
                setProfile({ ...profile, lastName: text })
              }
              style={styles.input}
              accessibilityLabelledBy="lastNameLabel"
              accessibilityLabel="Campo para editar sobrenome"
              autoComplete="name-family"
              textContentType="familyName"
            />
          ) : (
            <Text style={styles.textValue}>{profile.lastName}</Text>
          )}
        </View>

        <View style={styles.inputGroup}>
          <Text nativeID="emailLabel" style={styles.label}>
            E-mail
          </Text>
          {isEditing ? (
            <TextInput
              value={profile.email}
              onChangeText={(text) => setProfile({ ...profile, email: text })}
              style={styles.input}
              accessibilityLabelledBy="emailLabel"
              accessibilityLabel="Campo para editar e-mail"
              autoComplete="email"
              textContentType="emailAddress"
              keyboardType="email-address"
            />
          ) : (
            <Text style={styles.textValue}>{profile.email}</Text>
          )}
        </View>

        <View style={styles.inputGroup}>
          <Text nativeID="phoneLabel" style={styles.label}>
            Telefone
          </Text>
          {isEditing ? (
            <TextInput
              value={profile.phone}
              onChangeText={(text) => setProfile({ ...profile, phone: text })}
              style={styles.input}
              accessibilityLabelledBy="phoneLabel"
              accessibilityLabel="Campo para editar telefone"
              autoComplete="tel"
              textContentType="telephoneNumber"
              keyboardType="phone-pad"
            />
          ) : (
            <Text style={styles.textValue}>{profile.phone}</Text>
          )}
        </View>
      </View>

      {/* Botões de ação */}
      <View style={styles.actionsContainer}>
        {!isEditing ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsEditing(true)}
            accessibilityLabel="Editar perfil"
            accessibilityRole="button"
            accessibilityHint="Permite editar as informações do perfil"
          >
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.button, styles.saveButton]}
            onPress={handleSave}
            accessibilityLabel="Salvar alterações do perfil"
            accessibilityRole="button"
            accessibilityHint="Salva as informações editadas do perfil"
          >
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#EEEEEE",
  },
  formContainer: {
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#333333", // Contraste adequado com fundo branco
    marginBottom: 5,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
    color: "#000000", // Texto preto para contraste
    backgroundColor: "#FFFFFF",
  },
  textValue: {
    fontSize: 16,
    color: "#000000", // Texto preto para contraste
    paddingVertical: 12,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#0066CC",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    minWidth: 120, // Garante tamanho mínimo do alvo de toque
    minHeight: 48, // Garante tamanho mínimo do alvo de toque
    justifyContent: "center",
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "#008000",
  },
  buttonText: {
    color: "#FFFFFF", // Texto branco para contraste com fundo colorido
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ProfileScreen;
