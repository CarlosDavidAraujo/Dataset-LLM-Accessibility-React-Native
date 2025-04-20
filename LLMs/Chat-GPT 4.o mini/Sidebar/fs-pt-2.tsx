import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const SideMenu = () => {
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.menuItem}
        accessibilityLabel="Ir para a página inicial"
      >
        <Text style={styles.menuText}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        accessibilityLabel="Ver promoções"
      >
        <Text style={styles.menuText}>Promoções</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        accessibilityLabel="Ver meus pedidos"
      >
        <Text style={styles.menuText}>Meus Pedidos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        accessibilityLabel="Ver meu carrinho de compras"
      >
        <Text style={styles.menuText}>Meu Carrinho</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        accessibilityLabel="Ir para a minha conta"
      >
        <Text style={styles.menuText}>Minha Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        accessibilityLabel="Sair da conta"
      >
        <Text style={styles.menuText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    backgroundColor: "#1E1E1E", // Fundo escuro para contrastar com o texto claro
    paddingTop: 50, // Para um bom espaçamento superior
  },
  menuItem: {
    minWidth: 48,
    minHeight: 48,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  menuText: {
    fontSize: 18,
    color: "#FFFFFF", // Texto branco para bom contraste com o fundo escuro
  },
});

export default SideMenu;
