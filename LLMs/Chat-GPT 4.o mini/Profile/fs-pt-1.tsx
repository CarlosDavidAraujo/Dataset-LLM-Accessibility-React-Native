import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from "react-native";

const PerfilScreen = () => {
  return (
    <View style={styles.container}>
      {/* Foto de Perfil */}
      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: "https://example.com/foto-de-perfil.jpg" }}
          style={styles.profileImage}
          accessibilityLabel="Foto de perfil do usuário"
        />
      </View>

      {/* Informações Pessoais */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel} accessibilityRole="text">
          Nome
        </Text>
        <Text style={styles.infoText}>João Silva</Text>

        <Text style={styles.infoLabel} accessibilityRole="text">
          Sobrenome
        </Text>
        <Text style={styles.infoText}>Silva</Text>

        <Text style={styles.infoLabel} accessibilityRole="text">
          E-mail
        </Text>
        <Text style={styles.infoText}>joao.silva@email.com</Text>

        <Text style={styles.infoLabel} accessibilityRole="text">
          Telefone
        </Text>
        <Text style={styles.infoText}>+55 11 91234-5678</Text>
      </View>

      {/* Botões */}
      <TouchableOpacity
        style={styles.editButton}
        accessibilityLabel="Editar informações do perfil"
        onPress={() => alert("Abrir tela de edição")}
      >
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.saveButton}
        accessibilityLabel="Salvar informações do perfil"
        onPress={() => alert("Salvar alterações")}
      >
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  profileImageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  infoContainer: {
    marginBottom: 30,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000", // Contraste adequado
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: "#333333", // Contraste adequado
    marginBottom: 12,
  },
  editButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 5,
    minWidth: 150,
    minHeight: 48, // Tamanho mínimo adequado para o alvo de toque
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: "#28A745",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 5,
    minWidth: 150,
    minHeight: 48, // Tamanho mínimo adequado para o alvo de toque
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default PerfilScreen;
