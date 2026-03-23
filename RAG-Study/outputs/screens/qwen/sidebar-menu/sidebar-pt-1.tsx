import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SidebarMenu = () => {
  const menuItems = [
    { id: "home", label: "Início", role: "menuitem" },
    { id: "promotions", label: "Promoções", role: "menuitem" },
    { id: "orders", label: "Meus Pedidos", role: "menuitem" },
    { id: "cart", label: "Meu Carrinho", role: "menuitem" },
    { id: "account", label: "Minha Conta", role: "menuitem" },
    { id: "logout", label: "Sair", role: "menuitem" },
  ];

  const handlePress = (itemId: string) => {
    // Lógica de navegação aqui
    console.log(`Navegando para: ${itemId}`);
  };

  return (
    <ScrollView
      style={styles.container}
      accessibilityRole="menu"
      accessibilityLabel="Menu de navegação"
    >
      <Text
        style={styles.title}
        //accessibilityRole="heading" //o valor correto seria 'header'
        aria-level="1"
      >
        Menu
      </Text>

      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => handlePress(item.id)}
            accessibilityRole={item.role}
            accessibilityLabel={item.label}
            accessibilityState={{ disabled: false }}
            activeOpacity={0.7}
          >
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#333",
  },
  menuContainer: {
    flexDirection: "column",
  },
  menuItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  menuText: {
    fontSize: 18,
    color: "#333",
  },
});

export default SidebarMenu;
