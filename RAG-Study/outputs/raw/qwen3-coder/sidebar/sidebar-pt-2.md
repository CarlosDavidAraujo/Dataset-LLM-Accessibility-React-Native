Aqui está um exemplo completo de um menu lateral acessível com React Native e Expo:

```typescript
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const SidebarMenu = () => {
  const menuItems = [
    { id: '1', label: 'Início', role: 'menuitem' },
    { id: '2', label: 'Promoções', role: 'menuitem' },
    { id: '3', label: 'Meus Pedidos', role: 'menuitem' },
    { id: '4', label: 'Meu Carrinho', role: 'menuitem' },
    { id: '5', label: 'Minha Conta', role: 'menuitem' },
    { id: '6', label: 'Sair', role: 'menuitem' },
  ];

  const handleNavigation = (label: string) => {
    console.log(`Navegando para: ${label}`);
    // Implementar lógica de navegação aqui
  };

  return (
    <ScrollView 
      style={styles.container}
      accessibilityRole="menu"
      accessible={true}
      accessibilityLabel="Menu de navegação principal"
    >
      <View style={styles.menuHeader}>
        <Text style={styles.headerText} accessibilityRole="heading" accessibilityLevel={2}>
          Menu Principal
        </Text>
      </View>
      
      <View style={styles.menuList} accessibilityRole="menubar">
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => handleNavigation(item.label)}
            accessibilityRole={item.role}
            accessibilityLabel={item.label}
            accessibilityState={{ disabled: false }}
            activeOpacity={0.7}
          >
            <Text style={styles.menuItemText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  menuHeader: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
  },
  menuList: {
    flexDirection: 'column',
  },
  menuItem: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  menuItemText: {
    fontSize: 18,
    color: '#495057',
    fontWeight: '500',
  },
});

export default SidebarMenu;
```

### Características de acessibilidade implementadas:

1. **Roles semânticos**:
   - `accessibilityRole="menu"` no container principal
   - `accessibilityRole="menubar"` no grupo de itens
   - `accessibilityRole="menuitem"` em cada item
   - `accessibilityRole="heading"` no título

2. **Labels descritivas**:
   - `accessibilityLabel` em cada item para leitores de tela
   - Labels claras e concisas

3. **Navegação por teclado**:
   - Uso de `TouchableOpacity` para interações táteis
   - Feedback visual com `activeOpacity`

4. **Estrutura semântica**:
   - Hierarquia clara com cabeçalho e lista de itens
   - Separação visual com bordas

5. **Estados acessíveis**:
   - `accessibilityState` indicando que itens não estão desabilitados

6. **Scroll acessível**:
   - Container `ScrollView` com roles apropriados

7. **Contraste adequado**:
   - Cores com contraste suficiente para boa legibilidade
   - Tipografia legível

Este componente pode ser usado diretamente em um `Drawer` do Expo Router ou como parte de um layout personalizado. Todos os dados são mockados internamente para facilitar testes imediatos.