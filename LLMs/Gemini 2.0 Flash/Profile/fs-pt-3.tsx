import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const PerfilScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "URL_DA_FOTO_DE_PERFIL" }}
        style={styles.profileImage}
        accessibilityLabel="Foto de perfil do usuário"
      />

      <Text style={styles.label} nativeID="nomeLabel">
        Nome:
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="nomeLabel"
        value="Nome do Usuário"
        editable={false}
      />

      <Text style={styles.label} nativeID="sobrenomeLabel">
        Sobrenome:
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="sobrenomeLabel"
        value="Sobrenome do Usuário"
        editable={false}
      />

      <Text style={styles.label} nativeID="emailLabel">
        E-mail:
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="emailLabel"
        value="email@usuario.com"
        editable={false}
      />

      <Text style={styles.label} nativeID="telefoneLabel">
        Telefone:
      </Text>
      <TextInput
        style={styles.input}
        accessibilityLabelledBy="telefoneLabel"
        value="(XX) XXXXX-XXXX"
        editable={false}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF", // Contraste adequado com o texto
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#000000", // Contraste adequado com o fundo
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    fontSize: 16,
    color: "#333333", // Contraste adequado com o fundo
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007AFF", // Cor de fundo com contraste adequado
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    minWidth: 48, // Tamanho mínimo do alvo de toque
    minHeight: 48, // Tamanho mínimo do alvo de toque
  },
  buttonText: {
    color: "#FFFFFF", // Contraste adequado com o fundo do botão
    fontSize: 16,
    textAlign: "center",
  },
});

export default PerfilScreen;
