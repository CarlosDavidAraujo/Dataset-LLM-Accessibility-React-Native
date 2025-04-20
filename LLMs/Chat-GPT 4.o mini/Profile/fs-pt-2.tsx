import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const PerfilScreen = () => {
  return (
    <View style={styles.container}>
      {/* Foto de perfil */}
      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: "https://example.com/profile.jpg" }}
          style={styles.profileImage}
          accessibilityLabel="Foto de perfil do usuário"
        />
      </View>

      {/* Informações Pessoais */}
      <View style={styles.infoContainer}>
        <Text style={styles.sectionTitle}>Informações Pessoais</Text>

        <Text style={styles.label} accessibilityLabel="Nome">
          Nome
        </Text>
        <TextInput
          style={styles.input}
          defaultValue="João Silva"
          accessibilityLabel="Nome do usuário"
          editable={false} // Não permite edição
        />

        <Text style={styles.label} accessibilityLabel="Sobrenome">
          Sobrenome
        </Text>
        <TextInput
          style={styles.input}
          defaultValue="Silva"
          accessibilityLabel="Sobrenome do usuário"
          editable={false} // Não permite edição
        />

        <Text style={styles.label} accessibilityLabel="Email">
          E-mail
        </Text>
        <TextInput
          style={styles.input}
          defaultValue="joao.silva@example.com"
          accessibilityLabel="E-mail do usuário"
          editable={false} // Não permite edição
        />

        <Text style={styles.label} accessibilityLabel="Telefone">
          Telefone
        </Text>
        <TextInput
          style={styles.input}
          defaultValue="(11) 98765-4321"
          accessibilityLabel="Número de telefone do usuário"
          editable={false} // Não permite edição
        />
      </View>

      {/* Botões de Editar e Salvar */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="Editar perfil"
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="Salvar alterações"
          onPress={() => alert("Salvo!")}
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  profileImageContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  infoContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    marginBottom: 12,
    color: "#000000",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    minWidth: 120,
    height: 48,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PerfilScreen;
