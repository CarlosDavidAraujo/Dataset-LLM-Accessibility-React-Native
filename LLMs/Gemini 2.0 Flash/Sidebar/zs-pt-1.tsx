import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
} from "react-native";

const SidebarMenu = () => {
  const menuItems = [
    { label: "Início", route: "Home" },
    { label: "Promoções", route: "Promotions" },
    { label: "Meus Pedidos", route: "MyOrders" },
    { label: "Meu Carrinho", route: "Cart" },
    { label: "Minha Conta", route: "Account" },
    { label: "Sair", route: "Logout" },
  ];

  const handleMenuItemPress = (route) => {
    // Implemente a lógica de navegação aqui
    console.log(`Navegar para ${route}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.label}
            style={styles.menuItem}
            onPress={() => handleMenuItemPress(item.route)}
            accessibilityRole="button"
            accessibilityLabel={item.label}
            accessibilityHint={`Navegar para ${item.label}`}
          >
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  container: {
    padding: 20,
  },
  menuItem: {
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#ffffff",
  },
  menuText: {
    fontSize: 18,
    color: "#333333",
    fontWeight: "500",
  },
});

export default SidebarMenu;
