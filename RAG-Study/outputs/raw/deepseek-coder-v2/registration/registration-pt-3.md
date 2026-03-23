 Para criar uma tela de registro com todos os campos necessários e garantir que ela seja acessível, vamos seguir as diretrizes fornecidas nos documentos de exemplo de acessibilidade do React Native. Vamos implementar cada componente com rótulos claros e propriedades de acessibilidade apropriadas.

Aqui está o código TypeScript para a tela de registro:

```tsx
import React from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';
import { StyleSheet } from 'react-native-web'; // Importe o estilo correto para web e nativo

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        accessibilityLabel="nome"
        placeholder="Digite seu nome"
      />

      <Text style={styles.label}>Sobrenome</Text>
      <TextInput
        style={styles.input}
        accessibilityLabel="sobrenome"
        placeholder="Digite seu sobrenome"
      />

      <Text style={styles.label}>Endereço de E-mail</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        accessibilityLabel="endereço de e-mail"
        placeholder="Digite seu endereço de e-mail"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        accessibilityLabel="senha"
        placeholder="Digite sua senha"
      />

      <Text style={styles.label}>Data de Nascimento</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        accessibilityLabel="data de nascimento"
        placeholder="DD/MM/AAAA"
      />

      <Text style={styles.label}>Gênero</Text>
      <Picker
        selectedValue="female" // Valor padrão do picker, pode ser ajustado conforme necessário
        style={{ height: 50, width: 150 }}
        accessibilityLabel="gênero"
      >
        <Picker.Item label="Feminino" value="female" />
        <Picker.Item label="Masculino" value="male" />
        <Picker.Item label="Outro" value="other" />
      </Picker>

      <View style={styles.buttonContainer}>
        <Button title="Enviar" onPress={() => alert('Dados enviados')} accessibilityLabel="enviar dados do formulário" />
        <Button title="Cancelar" onPress={() => alert('Operação cancelada')} accessibilityLabel="cancelar operação" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default SignUpScreen;
```

### Explicação do Código

1. **Componentes e Estilos**: Utilizamos `Text`, `TextInput` e `Button` do React Native para criar a interface da tela. Cada `TextInput` tem uma propriedade `accessibilityLabel` que fornece um rótulo descritivo para leitores de tela. O estilo é definido usando `StyleSheet.create`.

2. **Picker**: Utilizamos o componente `Picker` do React Native com acessibilidade configurada através da propriedade `accessibilityLabel`.

3. **Botões**: Cada botão tem uma propriedade `accessibilityLabel` que descreve sua função, facilitando a compreensão para usuários de tecnologias assistivas.

4. **Estilos**: Estilizações são definidas para garantir um layout responsivo e visualmente agradável.

Este código é totalmente auto-contido e pronto para ser testado em dispositivos reais, garantindo que todos os elementos da interface sejam acessíveis por leitores de tela.