import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const MenuLateralAcessivel = () => {
  const menuItens = [
    {
      id: "inicio",
      texto: "Início",
      accessibilityLabel: "Navegar para a página inicial",
    },
    {
      id: "promocoes",
      texto: "Promoções",
      accessibilityLabel: "Ver promoções atuais",
    },
    {
      id: "pedidos",
      texto: "Meus Pedidos",
      accessibilityLabel: "Acompanhar meus pedidos",
    },
    {
      id: "carrinho",
      texto: "Meu Carrinho",
      accessibilityLabel: "Visualizar meu carrinho de compras",
    },
    {
      id: "conta",
      texto: "Minha Conta",
      accessibilityLabel: "Gerenciar minha conta",
    },
    { id: "sair", texto: "Sair", accessibilityLabel: "Encerrar sessão" },
  ];

  return (
    <View style={styles.menuContainer}>
      {menuItens.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.menuItem}
          accessibilityLabel={item.accessibilityLabel}
        >
          <Text style={styles.menuTexto}>{item.texto}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: "#F0F0F0", // Cor de fundo com contraste adequado
    padding: 10,
  },
  menuItem: {
    minHeight: 48, // Tamanho mínimo para alvo de toque
    justifyContent: "center",
    padding: 10,
  },
  menuTexto: {
    color: "#333333", // Cor do texto com contraste adequado
    fontSize: 16,
  },
});

export default MenuLateralAcessivel;
