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
    { id: "1", label: "Início", role: "menuitem" },
    { id: "2", label: "Promoções", role: "menuitem" },
    { id: "3", label: "Meus Pedidos", role: "menuitem" },
    { id: "4", label: "Meu Carrinho", role: "menuitem" },
    { id: "5", label: "Minha Conta", role: "menuitem" },
    { id: "6", label: "Sair", role: "menuitem" },
  ];

  const handleNavigation = (label: string) => {
    console.log(`Navegando para: ${label}`);
    // Implementar lógica de navegação aqui
  };

  return (
    <ScrollView
      style={styles.container}
      accessibilityRole="menu"
      accessible={true}
      accessibilityLabel="Menu de navegação principal"
    >
      <View style={styles.menuHeader}>
        <Text
          style={styles.headerText}
          // accessibilityRole="heading" //o valor correto seria 'header'
          accessibilityLevel={2}
        >
          Menu Principal
        </Text>
      </View>

      <View style={styles.menuList} accessibilityRole="menubar">
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => handleNavigation(item.label)}
            accessibilityRole={item.role}
            accessibilityLabel={item.label}
            accessibilityState={{ disabled: false }}
            activeOpacity={0.7}
          >
            <Text style={styles.menuItemText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 16,
  },
  menuHeader: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#dee2e6",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#212529",
  },
  menuList: {
    flexDirection: "column",
  },
  menuItem: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
  },
  menuItemText: {
    fontSize: 18,
    color: "#495057",
    fontWeight: "500",
  },
});

export default SidebarMenu;
