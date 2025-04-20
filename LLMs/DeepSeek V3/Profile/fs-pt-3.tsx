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
    phone: "(11) 98765-4321",
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

      {/* Campos do formulário */}
      <View style={styles.formContainer}>
        {/* Campo Nome */}
        <Text nativeID="nameLabel" style={styles.label}>
          Nome
        </Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.name}
            onChangeText={(text) => setProfile({ ...profile, name: text })}
            accessibilityLabelledBy="nameLabel"
            accessibilityLabel="Campo para editar o nome"
            autoComplete="name"
            textContentType="givenName"
          />
        ) : (
          <Text style={styles.textValue}>{profile.name}</Text>
        )}

        {/* Campo Sobrenome */}
        <Text nativeID="lastNameLabel" style={styles.label}>
          Sobrenome
        </Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.lastName}
            onChangeText={(text) => setProfile({ ...profile, lastName: text })}
            accessibilityLabelledBy="lastNameLabel"
            accessibilityLabel="Campo para editar o sobrenome"
            autoComplete="name-family"
            textContentType="familyName"
          />
        ) : (
          <Text style={styles.textValue}>{profile.lastName}</Text>
        )}

        {/* Campo E-mail */}
        <Text nativeID="emailLabel" style={styles.label}>
          E-mail
        </Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.email}
            onChangeText={(text) => setProfile({ ...profile, email: text })}
            accessibilityLabelledBy="emailLabel"
            accessibilityLabel="Campo para editar o e-mail"
            autoComplete="email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
        ) : (
          <Text style={styles.textValue}>{profile.email}</Text>
        )}

        {/* Campo Telefone */}
        <Text nativeID="phoneLabel" style={styles.label}>
          Telefone
        </Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={profile.phone}
            onChangeText={(text) => setProfile({ ...profile, phone: text })}
            accessibilityLabelledBy="phoneLabel"
            accessibilityLabel="Campo para editar o telefone"
            autoComplete="tel"
            textContentType="telephoneNumber"
            keyboardType="phone-pad"
          />
        ) : (
          <Text style={styles.textValue}>{profile.phone}</Text>
        )}
      </View>

      {/* Botões de ação */}
      <View style={styles.actionsContainer}>
        {isEditing ? (
          <TouchableOpacity
            style={styles.button}
            onPress={handleSave}
            accessibilityLabel="Salvar alterações do perfil"
            accessibilityRole="button"
          >
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsEditing(true)}
            accessibilityLabel="Editar informações do perfil"
            accessibilityRole="button"
          >
            <Text style={styles.buttonText}>Editar</Text>
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
    padding: 16,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 24,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#003366", // Cor de fallback
  },
  formContainer: {
    marginBottom: 24,
  },
  label: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  textValue: {
    color: "#333333", // Contraste suficiente com fundo branco
    fontSize: 16,
    marginBottom: 16,
    minHeight: 24, // Garante espaço mesmo sem valor
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    color: "#000000", // Texto preto para melhor contraste
    backgroundColor: "#FFFFFF",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#003366",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    minWidth: 120, // Garante tamanho mínimo para toque
    minHeight: 48, // Garante tamanho mínimo para toque
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
