import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importe useNavigation

const { width } = Dimensions.get("window");

const Sidebar = () => {
  const navigation = useNavigation(); // Use o hook useNavigation

  const menuItems = [
    { label: "Início", route: "Home" },
    { label: "Promoções", route: "Promotions" },
    { label: "Meus Pedidos", route: "MyOrders" },
    { label: "Meu Carrinho", route: "Cart" },
    { label: "Minha Conta", route: "Account" },
    { label: "Sair", route: "Logout" },
  ];

  const handleNavigation = (route) => {
    navigation.navigate(route);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menu}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.label}
            style={styles.menuItem}
            onPress={() => handleNavigation(item.route)}
            accessibilityRole="button"
            accessibilityLabel={item.label}
          >
            <Text style={styles.menuItemText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: width * 0.75, // 75% da largura da tela
  },
  menu: {
    padding: 20,
  },
  menuItem: {
    paddingVertical: 15,
    minHeight: 48, // Tamanho mínimo para alvo de toque acessível
    justifyContent: "center",
  },
  menuItemText: {
    fontSize: 18,
    color: "#333", // Contraste adequado
  },
});

export default Sidebar;
