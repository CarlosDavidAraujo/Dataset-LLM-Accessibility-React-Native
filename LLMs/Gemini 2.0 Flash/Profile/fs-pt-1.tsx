import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const PerfilScreen = ({ onEditar, onSalvar }) => {
  // Dados do perfil hardcoded
  const perfil = {
    nome: 'João',
    sobrenome: 'Silva',
    email: 'joao.silva@example.com',
    telefone: '(11) 99999-9999',
    fotoUrl: 'https://via.placeholder.com/150', // URL de exemplo
  };

  return (
    <View style={styles.container}>
      {/* Foto de Perfil */}
      <Image
        source={{ uri: perfil.fotoUrl }}
        style={styles.profileImage}
        accessibilityLabel="Foto de perfil do usuário"
      />

      {/* Informações Pessoais */}
      <View style={styles.infoContainer}>
        <Text style={styles.label} nativeID="nomeLabel">Nome:</Text>
        <Text style={styles.info} accessibilityLabelledBy="nomeLabel">{perfil.nome}</Text>

        <Text style={styles.label} nativeID="sobrenomeLabel">Sobrenome:</Text>
        <Text style={styles.info} accessibilityLabelledBy="sobrenomeLabel">{perfil.sobrenome}</Text>

        <Text style={styles.label} nativeID="emailLabel">Email:</Text>
        <Text style={styles.info} accessibilityLabelledBy="emailLabel">{perfil.email}</Text>

        <Text style={styles.label} nativeID="telefoneLabel">Telefone:</Text>
        <Text style={styles.info} accessibilityLabelledBy="telefoneLabel">{perfil.telefone}</Text>
      </View>

      {/* Botões de Ação */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onEditar}>
          <Text style={styles.buttonText} accessibilityLabel="Editar perfil">Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onSalvar}>
          <Text style={styles.buttonText} accessibilityLabel="Salvar alterações do perfil">Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  info: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 48,
    minHeight: 48,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default PerfilScreen;