Aqui está um exemplo completo de um menu lateral acessível com os itens solicitados, utilizando React Native e TypeScript:

```tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';

const SidebarMenu = () => {
  const handlePress = (screenName: string) => {
    Alert.alert(`Navegando para: ${screenName}`);
  };

  const menuItems = [
    { id: '1', label: 'Início', icon: '🏠' },
    { id: '2', label: 'Promoções', icon: '🎉' },
    { id: '3', label: 'Meus Pedidos', icon: '📦' },
    { id: '4', label: 'Meu Carrinho', icon: '🛒' },
    { id: '5', label: 'Minha Conta', icon: '👤' },
    { id: '6', label: 'Sair', icon: '🚪' },
  ];

  return (
    <SafeAreaView style={styles.container} accessibilityRole="menubar">
      <View style={styles.header}>
        <Text style={styles.title} accessibilityRole="heading" aria-level="1">
          Menu Principal
        </Text>
      </View>
      
      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => handlePress(item.label)}
            accessibilityRole="menuitem"
            accessibilityLabel={item.label}
            accessibilityHint={`Navegar para a tela de ${item.label.toLowerCase()}`}
          >
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRightWidth: 1,
    borderRightColor: '#e0e0e0',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  menuContainer: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  icon: {
    fontSize: 20,
    marginRight: 15,
  },
  menuText: {
    fontSize: 18,
    color: '#333',
  },
});

export default SidebarMenu;
```

### Características de acessibilidade implementadas:

1. **Hierarquia semântica**:
   - `accessibilityRole="menubar"` no container principal
   - `accessibilityRole="menuitem"` em cada item do menu
   - `accessibilityRole="heading"` no título com nível apropriado

2. **Labels descritivas**:
   - `accessibilityLabel` com nome do item
   - `accessibilityHint` explicando a ação

3. **Navegação por teclado**:
   - Componentes touchable recebem foco automaticamente
   - Estrutura linear e previsível

4. **Feedback tátil e auditivo**:
   - Alertas para demonstrar navegação
   - Elementos visualmente distintos

5. **Compatibilidade**:
   - Funciona com leitores de tela (TalkBack/VoiceOver)
   - Contraste adequado entre textos e fundos
   - Tamanho adequado para toque (>=44px)

Para usar este componente em um projeto Expo com navegação, você pode integrá-lo ao Drawer Navigator do React Navigation. O componente é completamente autocontido e não requer props externas.