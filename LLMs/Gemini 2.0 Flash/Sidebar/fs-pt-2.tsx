import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const MenuLateral = () => {
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
      id: "meusPedidos",
      texto: "Meus Pedidos",
      accessibilityLabel: "Acompanhar meus pedidos",
    },
    {
      id: "meuCarrinho",
      texto: "Meu Carrinho",
      accessibilityLabel: "Visualizar meu carrinho de compras",
    },
    {
      id: "minhaConta",
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
    backgroundColor: "#FFFFFF", // Contraste adequado com o texto
    paddingVertical: 20,
  },
  menuItem: {
    minWidth: 48, // Tamanho mínimo para alvo de toque
    minHeight: 48, // Tamanho mínimo para alvo de toque
    padding: 10,
    justifyContent: "center",
  },
  menuTexto: {
    color: "#000000", // Contraste adequado com o fundo
    fontSize: 16,
  },
});

export default MenuLateral;
