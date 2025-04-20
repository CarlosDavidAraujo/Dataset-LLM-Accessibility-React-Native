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
    name: "Maria",
    lastName: "Silva",
    email: "maria.silva@exemplo.com",
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
          accessibilityLabel="Foto de perfil de Maria Silva"
          accessibilityRole="image"
        />
      </View>

      {/* Campos de perfil */}
      <View style={styles.profileFields}>
        {/* Nome */}
        <View style={styles.fieldContainer}>
          <Text nativeID="nameLabel" style={styles.label}>
            Nome
          </Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={profile.name}
              onChangeText={(text) => setProfile({ ...profile, name: text })}
              accessibilityLabelledBy="nameLabel"
              accessibilityLabel="Campo para editar nome"
              autoComplete="name"
              textContentType="name"
            />
          ) : (
            <Text style={styles.text}>{profile.name}</Text>
          )}
        </View>

        {/* Sobrenome */}
        <View style={styles.fieldContainer}>
          <Text nativeID="lastNameLabel" style={styles.label}>
            Sobrenome
          </Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={profile.lastName}
              onChangeText={(text) =>
                setProfile({ ...profile, lastName: text })
              }
              accessibilityLabelledBy="lastNameLabel"
              accessibilityLabel="Campo para editar sobrenome"
              autoComplete="name-family"
              textContentType="familyName"
            />
          ) : (
            <Text style={styles.text}>{profile.lastName}</Text>
          )}
        </View>

        {/* E-mail */}
        <View style={styles.fieldContainer}>
          <Text nativeID="emailLabel" style={styles.label}>
            E-mail
          </Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={profile.email}
              onChangeText={(text) => setProfile({ ...profile, email: text })}
              accessibilityLabelledBy="emailLabel"
              accessibilityLabel="Campo para editar e-mail"
              autoComplete="email"
              textContentType="emailAddress"
              keyboardType="email-address"
            />
          ) : (
            <Text style={styles.text}>{profile.email}</Text>
          )}
        </View>

        {/* Telefone */}
        <View style={styles.fieldContainer}>
          <Text nativeID="phoneLabel" style={styles.label}>
            Telefone
          </Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={profile.phone}
              onChangeText={(text) => setProfile({ ...profile, phone: text })}
              accessibilityLabelledBy="phoneLabel"
              accessibilityLabel="Campo para editar telefone"
              autoComplete="tel"
              textContentType="telephoneNumber"
              keyboardType="phone-pad"
            />
          ) : (
            <Text style={styles.text}>{profile.phone}</Text>
          )}
        </View>
      </View>

      {/* Botões de ação */}
      <View style={styles.actions}>
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
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#003366",
  },
  profileFields: {
    marginBottom: 24,
  },
  fieldContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: "#003366", // Azul escuro com bom contraste
    fontWeight: "bold",
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    color: "#000000", // Preto com excelente contraste
  },
  input: {
    fontSize: 16,
    color: "#000000",
    borderWidth: 1,
    borderColor: "#AAAAAA",
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#FFFFFF",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#003366",
    minWidth: 120,
    minHeight: 48,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 4,
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
