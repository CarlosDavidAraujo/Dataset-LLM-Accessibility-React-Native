# 1. Basic Project Structure with Expo (Expo Router)

Expo Router uses a file-based routing system similar to Next.js.

**Directory Structure:**

- `app/`: Contains routes (screens).
  - `(tabs)/`: Tab navigation group.
    - `_layout.tsx`: Tab navigation layout.
    - `index.tsx`: The initial screen (`/`).
  - `_layout.tsx`: Global layout (navigation stack, providers).
  - `modal.tsx`: Modal screen.
- `components/`: Reusable UI components.
- `hooks/`: Custom hooks (e.g., `use-color-scheme`).
- `assets/`: Images and fonts.

**Example `app/_layout.tsx`:**

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

**Example `app/index.tsx`:**

```tsx
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text role="heading" aria-level={1}>
        Welcome to Expo
      </Text>
      <Link
        href="/details"
        accessibilityRole="link"
        accessibilityLabel="Go to details"
      >
        Go to Details
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
```
