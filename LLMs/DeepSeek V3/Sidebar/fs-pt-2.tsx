import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const EcommerceSideMenu = () => {
  return (
    <View style={styles.container} accessibilityRole="menu">
      <Text style={styles.menuTitle} accessibilityRole="header">
        Menu
      </Text>

      <TouchableOpacity
        style={styles.menuItem}
        accessibilityLabel="Ir para página inicial"
        accessibilityRole="menuitem"
      >
        <Text style={styles.menuItemText}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        accessibilityLabel="Ver promoções disponíveis"
        accessibilityRole="menuitem"
      >
        <Text style={styles.menuItemText}>Promoções</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        accessibilityLabel="Visualizar seus pedidos anteriores"
        accessibilityRole="menuitem"
      >
        <Text style={styles.menuItemText}>Meus Pedidos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        accessibilityLabel="Acessar seu carrinho de compras"
        accessibilityRole="menuitem"
      >
        <Text style={styles.menuItemText}>Meu Carrinho</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        accessibilityLabel="Gerenciar sua conta"
        accessibilityRole="menuitem"
      >
        <Text style={styles.menuItemText}>Minha Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        accessibilityLabel="Sair da sua conta"
        accessibilityRole="menuitem"
      >
        <Text style={styles.menuItemText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width: 250,
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  menuTitle: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  menuItem: {
    minHeight: 48,
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 4,
    borderRadius: 4,
  },
  menuItemText: {
    color: "#000000",
    fontSize: 16,
  },
  // Estilo para o item quando está ativo/focado
  activeMenuItem: {
    backgroundColor: "#003366",
  },
  activeMenuItemText: {
    color: "#FFFFFF",
  },
});

export default EcommerceSideMenu;
