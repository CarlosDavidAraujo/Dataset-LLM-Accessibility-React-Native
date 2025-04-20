import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const SideMenu = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuItemText}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuItemText}>Promoções</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuItemText}>Meus Pedidos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuItemText}>Meu Carrinho</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuItemText}>Minha Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuItemText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  menuItem: {
    minWidth: 48,
    minHeight: 48,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  menuItemText: {
    fontSize: 18,
    color: "#000000", // Contraste de texto (preto sobre fundo branco)
    fontWeight: "bold",
  },
});

export default SideMenu;
