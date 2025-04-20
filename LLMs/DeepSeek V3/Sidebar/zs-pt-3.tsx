import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const SideMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Itens do menu
  const menuItems = [
    { label: "Início", icon: "home", screen: "Home" },
    { label: "Promoções", icon: "local-offer", screen: "Promotions" },
    { label: "Meus Pedidos", icon: "list-alt", screen: "Orders" },
    { label: "Meu Carrinho", icon: "shopping-cart", screen: "Cart" },
    { label: "Minha Conta", icon: "account-circle", screen: "Account" },
    { label: "Sair", icon: "exit-to-app", screen: "Logout" },
  ];

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  const handleItemPress = (screen) => {
    console.log(`Navegar para: ${screen}`);
    setIsVisible(false);
  };

  if (!isVisible)
    return (
      <TouchableOpacity
        style={styles.menuButton}
        onPress={toggleMenu}
        accessible={true}
        accessibilityLabel="Abrir menu"
        accessibilityHint="Mostra as opções de navegação do aplicativo"
      >
        <MaterialIcons name="menu" size={32} color="#333" />
      </TouchableOpacity>
    );

  return (
    <SafeAreaView style={styles.container}>
      {/* Overlay para fechar o menu */}
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={toggleMenu}
        accessible={false}
      />

      <View style={styles.menuContainer}>
        {/* Botão de fechar */}
        <TouchableOpacity
          style={styles.closeButton}
          onPress={toggleMenu}
          accessible={true}
          accessibilityLabel="Fechar menu"
          accessibilityRole="button"
        >
          <MaterialIcons name="close" size={32} color="#333" />
        </TouchableOpacity>

        {/* Itens do menu */}
        <View style={styles.menuItemsContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => handleItemPress(item.screen)}
              accessible={true}
              accessibilityLabel={item.label}
              accessibilityRole="menuitem"
              accessibilityHint={`Navegar para ${item.label}`}
            >
              <MaterialIcons
                name={item.icon}
                size={24}
                color="#333"
                style={styles.icon}
              />
              <Text style={styles.menuItemText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

// Estilos otimizados para acessibilidade
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  menuContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: Dimensions.get("window").width * 0.8,
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  menuButton: {
    position: "absolute",
    top: Platform.OS === "ios" ? 50 : 20,
    left: 20,
    zIndex: 10,
    padding: 12,
  },
  closeButton: {
    padding: 16,
    alignSelf: "flex-end",
  },
  menuItemsContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginVertical: 4,
    borderRadius: 4,
    minHeight: 48, // Altura mínima para toque acessível
  },
  menuItemText: {
    fontSize: 18,
    color: "#333", // Contraste suficiente (> 4.5:1 em fundo branco)
    marginLeft: 16,
    fontWeight: "500",
  },
  icon: {
    width: 24,
    textAlign: "center",
  },
});

export default SideMenu;
