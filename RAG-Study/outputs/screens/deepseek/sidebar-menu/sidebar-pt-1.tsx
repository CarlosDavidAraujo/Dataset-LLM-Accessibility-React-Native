import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SideMenu = () => {
  const handleMenuItemPress = (menuItem: string) => {
    console.log(`Pressed ${menuItem}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleMenuItemPress("Início")}
        accessibilityRole="link"
        accessibilityLabel="Início"
        style={styles.menuItem}
      >
        <Text style={styles.menuItemText}>Início</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleMenuItemPress("Promoções")}
        accessibilityRole="link"
        accessibilityLabel="Promoções"
        style={styles.menuItem}
      >
        <Text style={styles.menuItemText}>Promoções</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleMenuItemPress("Meus Pedidos")}
        accessibilityRole="link"
        accessibilityLabel="Meus Pedidos"
        style={styles.menuItem}
      >
        <Text style={styles.menuItemText}>Meus Pedidos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleMenuItemPress("Meu Carrinho")}
        accessibilityRole="link"
        accessibilityLabel="Meu Carrinho"
        style={styles.menuItem}
      >
        <Text style={styles.menuItemText}>Meu Carrinho</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleMenuItemPress("Minha Conta")}
        accessibilityRole="link"
        accessibilityLabel="Minha Conta"
        style={styles.menuItem}
      >
        <Text style={styles.menuItemText}>Minha Conta</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleMenuItemPress("Sair")}
        accessibilityRole="link"
        accessibilityLabel="Sair"
        style={styles.menuItem}
      >
        <Text style={styles.menuItemText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  menuItem: {
    paddingVertical: 15,
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SideMenu;
