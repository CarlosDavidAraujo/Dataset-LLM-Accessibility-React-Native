# 1. Estrutura Básica de Projeto com Expo (Expo Router)

O Expo Router usa um sistema de roteamento baseado em arquivos semelhante ao Next.js.

**Estrutura de Diretórios:**

- `app/`: Contém rotas (telas).
  - `(tabs)/`: Grupo de navegação por abas.
    - `_layout.tsx`: Layout da navegação por abas.
    - `index.tsx`: A tela inicial (`/`).
  - `_layout.tsx`: Layout global (pilha de navegação, provedores).
  - `modal.tsx`: Tela modal.
- `components/`: Componentes de UI reutilizáveis.
- `hooks/`: Hooks personalizados (ex: `use-color-scheme`).
- `assets/`: Imagens e fontes.

**Exemplo `app/_layout.tsx`:**

```tsx
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
```

**Exemplo `app/index.tsx`:**

```tsx
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text role="heading" aria-level={1}>
        Bem-vindo ao Expo
      </Text>
      <Link
        href="/details"
        accessibilityRole="link"
        accessibilityLabel="Ir para detalhes"
      >
        Ir para Detalhes
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
```
