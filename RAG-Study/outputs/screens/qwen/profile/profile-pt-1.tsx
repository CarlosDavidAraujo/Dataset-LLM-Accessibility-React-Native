import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'Maria',
    lastName: 'Silva',
    email: 'maria.silva@email.com',
    phone: '(11) 99999-9999',
  });

  const [editedData, setEditedData] = useState(profileData);

  const handleEditPress = () => {
    setIsEditing(true);
  };

  const handleSavePress = () => {
    setProfileData(editedData);
    setIsEditing(false);
    Alert.alert(
      'Perfil atualizado',
      'Suas informações foram salvas com sucesso.',
      [{ text: 'OK' }]
    );
  };

  const handleCancelPress = () => {
    setEditedData(profileData);
    setIsEditing(false);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      accessibilityViewIsModal={true}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        accessibilityLabel="Conteúdo da tela de perfil"
      >
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: 'https://placehold.co/150' }}
            style={styles.profileImage}
            accessibilityLabel="Foto de perfil"
            accessibilityRole="image"
          />
          <Text style={styles.profileName} accessibilityRole="header">
            {profileData.firstName} {profileData.lastName}
          </Text>
        </View>

        <View style={styles.formSection} accessibilityLabel="Informações do perfil">
          <View style={styles.inputGroup}>
            <Text style={styles.label} accessibilityRole="text">Nome</Text>
            <TextInput
              value={isEditing ? editedData.firstName : profileData.firstName}
              onChangeText={(text) =>
                isEditing && setEditedData({ ...editedData, firstName: text })
              }
              editable={isEditing}
              style={[styles.input, isEditing ? styles.inputEditable : null]}
              accessibilityLabel="Campo de nome"
              accessibilityHint="Digite seu primeiro nome"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label} accessibilityRole="text">Sobrenome</Text>
            <TextInput
              value={isEditing ? editedData.lastName : profileData.lastName}
              onChangeText={(text) =>
                isEditing && setEditedData({ ...editedData, lastName: text })
              }
              editable={isEditing}
              style={[styles.input, isEditing ? styles.inputEditable : null]}
              accessibilityLabel="Campo de sobrenome"
              accessibilityHint="Digite seu sobrenome"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label} accessibilityRole="text">E-mail</Text>
            <TextInput
              value={isEditing ? editedData.email : profileData.email}
              onChangeText={(text) =>
                isEditing && setEditedData({ ...editedData, email: text })
              }
              editable={isEditing}
              keyboardType="email-address"
              style={[styles.input, isEditing ? styles.inputEditable : null]}
              accessibilityLabel="Campo de e-mail"
              accessibilityHint="Digite seu endereço de e-mail"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label} accessibilityRole="text">Telefone</Text>
            <TextInput
              value={isEditing ? editedData.phone : profileData.phone}
              onChangeText={(text) =>
                isEditing && setEditedData({ ...editedData, phone: text })
              }
              editable={isEditing}
              keyboardType="phone-pad"
              style={[styles.input, isEditing ? styles.inputEditable : null]}
              accessibilityLabel="Campo de telefone"
              accessibilityHint="Digite seu número de telefone"
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          {!isEditing ? (
            <TouchableOpacity
              onPress={handleEditPress}
              style={styles.editButton}
              accessibilityLabel="Botão editar perfil"
              accessibilityRole="button"
              accessibilityHint="Toque para editar suas informações"
            >
              <Text style={styles.buttonText}>Editar Perfil</Text>
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity
                onPress={handleSavePress}
                style={[styles.saveButton, styles.actionButton]}
                accessibilityLabel="Botão salvar alterações"
                accessibilityRole="button"
                accessibilityHint="Toque para salvar suas alterações"
              >
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleCancelPress}
                style={[styles.cancelButton, styles.actionButton]}
                accessibilityLabel="Botão cancelar edição"
                accessibilityRole="button"
                accessibilityHint="Toque para cancelar a edição"
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
    paddingTop: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#007AFF',
    marginBottom: 15,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  formSection: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    color: '#666',
  },
  inputEditable: {
    backgroundColor: '#fff',
    borderColor: '#007AFF',
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 5,
  },
  editButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
  },
  saveButton: {
    backgroundColor: '#34C759',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen;
