# 10. WCAG 2.2 - Regras Aplicadas a Dispositivos Móveis

Princípios:

- Perceptível
- Operável
- Compreensível
- Robusto

Critérios úteis:

- Alvo mínimo: 48x48dp
- Foco visível
- Feedback do usuário

Exemplo:

```tsx
<TouchableOpacity
  style={{
    borderWidth: 2,
    borderColor: "blue", // foco visível
    minWidth: 48, // tamanho mínimo do alvo
    minHeight: 48,
    justifyContent: "center",
    padding: 10,
  }}
>
  <Text>Ação</Text>
</TouchableOpacity>
```
