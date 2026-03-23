Aqui está um componente de menu lateral acessível com os itens solicitados, seguindo as diretrizes de acessibilidade do React Native:

```typescript
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const SidebarMenu = () => {
  const menuItems = [
    { id: 'home', label: 'Início', role: 'menuitem' },
    { id: 'promotions', label: 'Promoções', role: 'menuitem' },
    { id: 'orders', label: 'Meus Pedidos', role: 'menuitem' },
    { id: 'cart', label: 'Meu Carrinho', role: 'menuitem' },
    { id: 'account', label: 'Minha Conta', role: 'menuitem' },
    { id: 'logout', label: 'Sair', role: 'menuitem' },
  ];

  const handlePress = (itemId: string) => {
    // Lógica de navegação aqui
    console.log(`Navegando para: ${itemId}`);
  };

  return (
    <ScrollView 
      style={styles.container}
      accessibilityRole="menu"
      accessibilityLabel="Menu de navegação"
    >
      <Text style={styles.title} accessibilityRole="heading" aria-level="1">
        Menu
      </Text>
      
      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => handlePress(item.id)}
            accessibilityRole={item.role}
            accessibilityLabel={item.label}
            accessibilityState={{ disabled: false }}
            activeOpacity={0.7}
          >
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  menuContainer: {
    flexDirection: 'column',
  },
  menuItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  menuText: {
    fontSize: 18,
    color: '#333',
  },
});

export default SidebarMenu;
```

Características de acessibilidade implementadas:

1. **Papéis semânticos**:
   - `accessibilityRole="menu"` no contêiner principal
   - `accessibilityRole="menuitem"` em cada item
   - `accessibilityRole="heading"` no título

2. **Labels descritivas**:
   - `accessibilityLabel` em cada item com seu nome
   - Label no contêiner do menu para contexto

3. **Navegação por teclado**:
   - Uso de `TouchableOpacity` para interações táteis
   - `activeOpacity` para feedback visual

4. **Hierarquia visual adequada**:
   - Tamanho de fonte diferenciado
   - Espaçamento consistente
   - Cores com contraste adequado

5. **Estrutura semântica**:
   - ScrollView para conteúdo rolável
   - View agrupadora para os itens
   - Text como elementos de leitura

Para usar este componente em um aplicativo com Expo Router, você pode integrá-lo em um layout de drawer ou como parte de uma navegação personalizada. O componente é completamente autocontido e não requer props externas.