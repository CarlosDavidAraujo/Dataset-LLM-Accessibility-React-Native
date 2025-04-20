import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const EcommerceSideMenu = () => {
  const menuItems = [
    { label: "Início", accessibilityLabel: "Ir para a página inicial" },
    { label: "Promoções", accessibilityLabel: "Ver promoções disponíveis" },
    {
      label: "Meus Pedidos",
      accessibilityLabel: "Visualizar meus pedidos anteriores",
    },
    {
      label: "Meu Carrinho",
      accessibilityLabel: "Ver itens no carrinho de compras",
    },
    {
      label: "Minha Conta",
      accessibilityLabel: "Acessar configurações da minha conta",
    },
    { label: "Sair", accessibilityLabel: "Sair da minha conta" },
  ];

  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          accessibilityLabel={item.accessibilityLabel}
          accessibilityRole="button"
        >
          <Text style={styles.menuText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    width: 250,
  },
  menuItem: {
    minHeight: 48, // Tamanho mínimo para alvo de toque
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  menuText: {
    color: "#000000", // Contraste adequado com fundo branco
    fontSize: 16,
    fontWeight: "500",
  },
});

export default EcommerceSideMenu;
