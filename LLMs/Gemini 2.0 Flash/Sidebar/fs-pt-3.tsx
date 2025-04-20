import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SideMenu = () => {
  const menuItems = [
    { label: "Início", accessibilityLabel: "Navegar para a página inicial" },
    { label: "Promoções", accessibilityLabel: "Ver promoções atuais" },
    { label: "Meus Pedidos", accessibilityLabel: "Acompanhar meus pedidos" },
    {
      label: "Meu Carrinho",
      accessibilityLabel: "Visualizar meu carrinho de compras",
    },
    { label: "Minha Conta", accessibilityLabel: "Gerenciar minha conta" },
    { label: "Sair", accessibilityLabel: "Encerrar sessão" },
  ];

  return (
    <View style={styles.menuContainer}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          accessibilityLabel={item.accessibilityLabel}
        >
          <Text style={styles.menuText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: "#FFFFFF", // Contraste adequado com o texto
    padding: 20,
  },
  menuItem: {
    minWidth: 48, // Tamanho mínimo para alvo de toque
    minHeight: 48, // Tamanho mínimo para alvo de toque
    justifyContent: "center",
    padding: 8, // Espaçamento interno para facilitar o toque
  },
  menuText: {
    color: "#000000", // Contraste adequado com o fundo
    fontSize: 16,
  },
});

export default SideMenu;
