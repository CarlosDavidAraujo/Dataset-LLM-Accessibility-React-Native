import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Platform,
} from "react-native";

const SideMenu = () => {
  const menuItems = [
    {
      id: 1,
      label: "Início",
      screenReaderHint: "Navegar para a página inicial",
    },
    { id: 2, label: "Promoções", screenReaderHint: "Ver ofertas e promoções" },
    {
      id: 3,
      label: "Meus Pedidos",
      screenReaderHint: "Visualizar histórico de pedidos",
    },
    {
      id: 4,
      label: "Meu Carrinho",
      screenReaderHint: "Ver itens no carrinho de compras",
    },
    {
      id: 5,
      label: "Minha Conta",
      screenReaderHint: "Acessar configurações da conta",
    },
    { id: 6, label: "Sair", screenReaderHint: "Encerrar sessão" },
  ];

  const handleMenuItemPress = (itemId) => {
    // Lógica para navegação seria implementada aqui
    console.log(
      `Navegar para: ${menuItems.find((item) => item.id === itemId).label}`
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menuHeader}>
        <Text style={styles.menuTitle} accessibilityRole="header">
          Menu
        </Text>
      </View>

      <View style={styles.menuItemsContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => handleMenuItemPress(item.id)}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityLabel={item.label}
            accessibilityHint={item.screenReaderHint}
            accessible={true}
            hitSlop={{
              top: 15,
              bottom: 15,
              left: 10,
              right: 10,
            }}
          >
            <Text style={styles.menuItemText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width * 0.8,
    backgroundColor: "#FFFFFF",
  },
  menuHeader: {
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  menuTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333333",
  },
  menuItemsContainer: {
    paddingVertical: 16,
  },
  menuItem: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    minHeight: 48, // Altura mínima para toque acessível
  },
  menuItemText: {
    fontSize: 16,
    color: "#333333", // Cor escura para bom contraste
    lineHeight: 24,
  },
});

export default SideMenu;
