import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const PerfilScreen = ({ onEditar, onSalvar }) => {
  const perfil = {
    fotoUrl: "https://via.placeholder.com/150", // URL de imagem de exemplo
    nome: "João",
    sobrenome: "Silva",
    email: "joao.silva@exemplo.com",
    telefone: "(11) 99999-9999",
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: perfil.fotoUrl }}
        style={styles.fotoPerfil}
        accessibilityLabel="Foto de perfil do usuário"
      />

      <View style={styles.infoContainer}>
        <Text style={styles.label} nativeID="nomeLabel">
          Nome:
        </Text>
        <Text style={styles.textoInfo} accessibilityLabelledBy="nomeLabel">
          {perfil.nome}
        </Text>

        <Text style={styles.label} nativeID="sobrenomeLabel">
          Sobrenome:
        </Text>
        <Text style={styles.textoInfo} accessibilityLabelledBy="sobrenomeLabel">
          {perfil.sobrenome}
        </Text>

        <Text style={styles.label} nativeID="emailLabel">
          E-mail:
        </Text>
        <Text style={styles.textoInfo} accessibilityLabelledBy="emailLabel">
          {perfil.email}
        </Text>

        <Text style={styles.label} nativeID="telefoneLabel">
          Telefone:
        </Text>
        <Text style={styles.textoInfo} accessibilityLabelledBy="telefoneLabel">
          {perfil.telefone}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.botao} onPress={onEditar}>
          <Text style={styles.botaoTexto}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={onSalvar}>
          <Text style={styles.botaoTexto}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  fotoPerfil: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  textoInfo: {
    fontSize: 16,
    color: "#333333",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  botao: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    minWidth: 44,
    minHeight: 44,
  },
  botaoTexto: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default PerfilScreen;
