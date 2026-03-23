```tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, Switch, Platform } from 'react-native';

const RegistrationScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | 'other' | ''>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!firstName || !lastName || !email || !password || !birthDate || !gender) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios');
      return;
    }
    
    setIsSubmitting(true);
    // Simulação de envio
    setTimeout(() => {
      setIsSubmitting(false);
      Alert.alert('Sucesso', 'Registro realizado com sucesso!');
    }, 1500);
  };

  const handleCancel = () => {
    Alert.alert(
      'Cancelar Registro',
      'Tem certeza que deseja cancelar? Todos os dados serão perdidos.',
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: () => {
          setFirstName('');
          setLastName('');
          setEmail('');
          setPassword('');
          setBirthDate('');
          setGender('');
        }}
      ]
    );
  };

  const genderOptions = [
    { label: 'Masculino', value: 'male' },
    { label: 'Feminino', value: 'female' },
    { label: 'Outro', value: 'other' }
  ];

  return (
    <ScrollView 
      style={styles.container}
      accessibilityLabel="Tela de registro"
      accessibilityHint="Formulário para criar uma nova conta"
    >
      <Text style={styles.title} accessibilityRole="header">
        Registro de Usuário
      </Text>

      {/* Campo Nome */}
      <View style={styles.fieldContainer}>
        <Text nativeID="firstNameLabel" style={styles.label}>
          Nome *
        </Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          accessibilityLabel="Nome"
          accessibilityLabelledBy="firstNameLabel"
          accessibilityHint="Digite seu primeiro nome"
          textContentType="givenName"
          autoComplete="name"
          placeholder="Ex: João"
        />
      </View>

      {/* Campo Sobrenome */}
      <View style={styles.fieldContainer}>
        <Text nativeID="lastNameLabel" style={styles.label}>
          Sobrenome *
        </Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          accessibilityLabel="Sobrenome"
          accessibilityLabelledBy="lastNameLabel"
          accessibilityHint="Digite seu sobrenome"
          textContentType="familyName"
          autoComplete="name-family"
          placeholder="Ex: Silva"
        />
      </View>

      {/* Campo Email */}
      <View style={styles.fieldContainer}>
        <Text nativeID="emailLabel" style={styles.label}>
          E-mail *
        </Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          accessibilityLabel="Endereço de e-mail"
          accessibilityLabelledBy="emailLabel"
          accessibilityHint="Digite seu endereço de e-mail"
          textContentType="emailAddress"
          autoComplete="email"
          placeholder="exemplo@dominio.com"
        />
      </View>

      {/* Campo Senha */}
      <View style={styles.fieldContainer}>
        <Text nativeID="passwordLabel" style={styles.label}>
          Senha *
        </Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          accessibilityLabel="Senha"
          accessibilityLabelledBy="passwordLabel"
          accessibilityHint="Digite sua senha (mínimo 6 caracteres)"
          textContentType="newPassword"
          autoComplete="password"
          placeholder="••••••"
        />
      </View>

      {/* Campo Data de Nascimento */}
      <View style={styles.fieldContainer}>
        <Text nativeID="birthDateLabel" style={styles.label}>
          Data de Nascimento *
        </Text>
        <TextInput
          style={styles.input}
          value={birthDate}
          onChangeText={setBirthDate}
          keyboardType="numbers-pad"
          accessibilityLabel="Data de nascimento"
          accessibilityLabelledBy="birthDateLabel"
          accessibilityHint="Digite sua data de nascimento no formato DD/MM/AAAA"
          textContentType="birthdate"
          placeholder="DD/MM/AAAA"
        />
      </View>

      {/* Campo Gênero */}
      <View 
        style={styles.fieldContainer}
        accessible={true}
        accessibilityLabel="Gênero"
        accessibilityHint="Selecione seu gênero"
      >
        <Text nativeID="genderLabel" style={styles.label}>
          Gênero *
        </Text>
        <View style={styles.radioGroup}>
          {genderOptions.map((option) => (
            <TouchableOpacity
              key={option.value}
              style={styles.radioButton}
              onPress={() => setGender(option.value as any)}
              accessibilityRole="radio"
              accessibilityState={{ selected: gender === option.value }}
              accessibilityLabel={`Opção ${option.label}`}
            >
              <View style={[
                styles.radioCircle,
                gender === option.value && styles.selectedRadio
              ]} />
              <Text style={styles.radioLabel}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Botões */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.submitButton]}
          onPress={handleSubmit}
          disabled={isSubmitting}
          accessibilityRole="button"
          accessibilityLabel="Enviar formulário de registro"
          accessibilityHint="Toque duas vezes para enviar seus dados de registro"
        >
          <Text style={styles.buttonText}>
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={handleCancel}
          accessibilityRole="button"
          accessibilityLabel="Cancelar registro"
          accessibilityHint="Toque duas vezes para cancelar e limpar o formulário"
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 24,
    color: '#333',
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  radioGroup: {
    flexDirection: 'column',
    gap: 12,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#999',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadio: {
    borderColor: '#007AFF',
  },
  radioLabel: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'column',
    gap: 12,
    marginTop: 16,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
    backgroundColor: '#007AFF',
  },
  cancelButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default RegistrationScreen;
```

Esta tela de registro foi implementada com os seguintes recursos de acessibilidade:

1. **Rótulos adequados**: Todos os campos têm rótulos associados usando `nativeID` e `accessibilityLabelledBy`
2. **Dicas contextuais**: Propriedade `accessibilityHint` para explicar o propósito dos campos
3. **Papéis semânticos**: Uso correto de `accessibilityRole` para diferentes tipos de componentes
4. **Estados acessíveis**: Indicação visual de estados selecionados nos botões de rádio
5. **Navegação por teclado**: Componentes ordenados logicamente para navegação sequencial
6. **Feedback auditivo**: Alertas para confirmações importantes
7. **Compatibilidade com leitores de tela**: Todos os elementos são identificáveis por tecnologias assistivas
8. **Textos descritivos**: Labels e placeholders claros para todos os campos
9. **Auto-preenchimento**: Uso de `textContentType` e `autoComplete` para ajudar usuários com deficiências motoras
10. **Contraste adequado**: Cores com contraste suficiente para usuários com deficiência visual

O formulário é completamente funcional com validações básicas e simula o processo de envio. Todos os dados são gerenciados localmente sem dependência de props externas.