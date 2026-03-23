 Para criar uma tela de registro com todos os campos necessários e garantir que ela seja acessível, vamos seguir as diretrizes fornecidas nos documentos de exemplo de acessibilidade do React Native. Vamos implementar cada componente com rótulos claros e propriedades de acessibilidade apropriadas.

Aqui está um exemplo de como você pode estruturar essa tela:

```tsx
import React from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';
import { StyleSheet } from 'react-native-web'; // Certifique-se de importar o estilo correto para web e mobile

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

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        autoComplete="email"
        textContentType="emailAddress"
        accessibilityLabel="email"
        placeholder="Digite seu email"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        autoComplete="password"
        textContentType="password"
        accessibilityLabel="senha"
        placeholder="Digite sua senha"
      />

      <Text style={styles.label}>Data de Nascimento</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        autoComplete="bday"
        textContentType="bday"
        accessibilityLabel="data de nascimento"
        placeholder="DD/MM/AAAA"
      />

      <Text style={styles.label}>Gênero</Text>
      <Picker
        selectedValue="female" // Valor padrão do picker, pode ser ajustado conforme necessário
        onValueChange={(itemValue) => console.log(itemValue)}
        accessibilityLabel="gênero"
      >
        <Picker.Item label="Feminino" value="female" />
        <Picker.Item label="Masculino" value="male" />
        <Picker.Item label="Outro" value="other" />
      </Picker>

      <View style={styles.buttonContainer}>
        <Button title="Enviar" onPress={() => alert('Enviado!')} accessibilityLabel="enviar dados do formulário" />
        <Button title="Cancelar" onPress={() => alert('Cancelado!')} accessibilityLabel="cancelar o processo de registro" />
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
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
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

1. **Componentes e Estilos**: Utilizamos `Text`, `TextInput` e `Button` do React Native para criar a interface. Cada campo de entrada tem uma propriedade `accessibilityLabel` que ajuda os leitores de tela a identificarem o propósito do campo. Os rótulos (`<Text style={styles.label}>`) são usados para descrever cada campo, e os placeholders fornecem um feedback visual sobre o tipo de informação esperada.

2. **Picker**: O componente `Picker` é usado para seleção de gênero. Ele tem uma propriedade `accessibilityLabel` que ajuda a descrever a funcionalidade do picker.

3. **Botões**: Os botões têm propriedades `accessibilityLabel` claras, indicando suas funções para usuários com deficiências visuais ou que utilizam leitores de tela.

4. **Estilos**: Estilização básica é aplicada usando `StyleSheet.create`. Ajustamos os estilos conforme necessário para garantir uma boa aparência em todas as telas, enquanto mantemos a acessibilidade como prioridade.

Este exemplo cobre todos os aspectos essenciais de uma tela de registro, incluindo campos de entrada, seleção e botões, com ênfase na acessibilidade.