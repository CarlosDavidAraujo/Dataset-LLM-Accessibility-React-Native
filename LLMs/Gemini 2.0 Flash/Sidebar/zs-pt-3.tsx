import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SidebarMenu = () => {
  const navigation = useNavigation();
  const [menuItems] = useState([
    { title: "Início", route: "Home" },
    { title: "Promoções", route: "Promotions" },
    { title: "Meus Pedidos", route: "Orders" },
    { title: "Meu Carrinho", route: "Cart" },
    { title: "Minha Conta", route: "Account" },
    { title: "Sair", route: "Logout" },
  ]);

  const handleNavigation = (route) => {
    navigation.navigate(route);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menu}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.title}
            style={styles.menuItem}
            onPress={() => handleNavigation(item.route)}
            accessibilityRole="button"
            accessibilityLabel={item.title}
          >
            <Text style={styles.menuItemText}>{item.title}</Text>
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
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  menu: {
    padding: 20,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    minHeight: 48,
    justifyContent: "center",
  },
  menuItemText: {
    fontSize: 18,
    color: "#333",
  },
});

export default SidebarMenu;
