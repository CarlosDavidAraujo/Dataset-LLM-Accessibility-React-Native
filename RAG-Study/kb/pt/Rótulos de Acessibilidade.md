# Rótulos de Acessibilidade

Certifique-se de que todos os elementos interativos tenham rótulos descritivos para leitores de tela.

❌ Incorreto:

```jsx
<TextInput />
```

> Sem rótulo de acessibilidade. Leitores de tela não conseguem identificar o propósito do campo de entrada.

✅ Correto:

```jsx
<View>
  <Text nativeID="usernameLabel">Nome de usuário</Text>
  <TextInput
    accessibilityLabel="nome de usuário"
    accessibilityLabelledBy="usernameLabel"
    autoComplete="username"
    textContentType="username"
  />
</View>
```

> Uma referência a outro elemento via `nativeID` é usada para construir formulários complexos. O valor de `accessibilityLabelledBy` corresponde ao `nativeID` do elemento relacionado. Neste exemplo, o leitor de tela anuncia "Nome de usuário, Caixa de Edição para Nome de usuário" ao focar no TextInput, derivando o nome do texto visível.

❌ Incorreto:

```jsx
<Button title="Enviar" />
```

> O botão tem texto, mas nenhuma informação adicional de acessibilidade para leitores de tela que podem precisar de contexto adicional.

✅ Correto:

```jsx
<Button title="Enviar" accessibilityLabel="Enviar dados do formulário" />
```

> Uma propriedade `accessibilityLabel` fornece um rótulo claro e descritivo para leitores de tela, melhorando a acessibilidade.
