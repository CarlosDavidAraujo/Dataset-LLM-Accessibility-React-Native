import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const EcommerceSideMenu = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.menuTitle} accessibilityRole="header">
        Menu
      </Text>

      <TouchableOpacity
        style={styles.menuItem}
        accessibilityLabel="Ir para página inicial"
        accessibilityRole="button"
      >
        <Text style={styles.menuItemText}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        accessibilityLabel="Ver promoções disponíveis"
        accessibilityRole="button"
      >
        <Text style={styles.menuItemText}>Promoções</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        accessibilityLabel="Visualizar meus pedidos"
        accessibilityRole="button"
      >
        <Text style={styles.menuItemText}>Meus Pedidos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        accessibilityLabel="Acessar meu carrinho de compras"
        accessibilityRole="button"
      >
        <Text style={styles.menuItemText}>Meu Carrinho</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        accessibilityLabel="Gerenciar minha conta"
        accessibilityRole="button"
      >
        <Text style={styles.menuItemText}>Minha Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        accessibilityLabel="Sair da minha conta"
        accessibilityRole="button"
      >
        <Text style={[styles.menuItemText, styles.logoutText]}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    width: 250,
    height: "100%",
  },
  menuTitle: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 24,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  menuItem: {
    minHeight: 48, // Tamanho mínimo para alvo de toque
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginBottom: 4,
    borderRadius: 4,
  },
  menuItemText: {
    color: "#000000", // Contraste adequado com fundo branco
    fontSize: 16,
  },
  logoutText: {
    color: "#D32F2F", // Vermelho escuro para contraste adequado
  },
});

export default EcommerceSideMenu;
