# 5. Evitar Redundância na Descrição de Conteúdo

**Importante:**

> Leitores de tela como TalkBack e VoiceOver já anunciam o tipo do componente (como “botão” ou “campo de texto”). Portanto:

✅ **Correto (Apenas ícone):**

```jsx
<TouchableOpacity
  accessibilityLabel="Adicionar item"
  accessibilityRole="button"
>
  <Icon name="plus" />
</TouchableOpacity>
```

✅ **Correto (Conteúdo de texto):**

```jsx
// Nenhum accessibilityLabel necessário porque o texto "Enviar" é lido automaticamente.
<TouchableOpacity accessibilityRole="button">
  <Text>Enviar</Text>
</TouchableOpacity>
```

⚠️ **Redundante (mas não incorreto):**

```jsx
<TouchableOpacity accessibilityLabel="Enviar" accessibilityRole="button">
  <Text>Enviar</Text>
</TouchableOpacity>
// Saída: "Enviar, botão" (accessibilityLabel substitui a concatenação automática de texto)
// Isso é redundante quando o rótulo é igual ao texto visível, mas útil para valores personalizados
```

💡 **Opcional - Rótulo Personalizado:**

```jsx
<TouchableOpacity
  accessibilityLabel="Toque para enviar formulário"
  accessibilityRole="button"
>
  <Text>Enviar</Text>
</TouchableOpacity>
// Saída: "Toque para enviar formulário, botão" (Fornece contexto adicional)
// Use accessibilityLabel quando quiser um anúncio diferente do texto visível
```

❌ **Incorreto (Papel Redundante no Rótulo):**

```jsx
<Button title="Confirmar" accessibilityLabel="Botão confirmar envio" />
// Saída: "Botão confirmar envio, botão" (Redundante)
```

Isso evita que o leitor diga “botão botão confirmar envio” ou repita o texto duas vezes.
