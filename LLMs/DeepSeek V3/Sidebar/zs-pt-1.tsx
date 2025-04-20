import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
  AccessibilityInfo,
} from "react-native";

const SideMenu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [activeItem, setActiveItem] = useState("Início");

  // Itens do menu
  const menuItems = [
    { id: "home", label: "Início" },
    { id: "promotions", label: "Promoções" },
    { id: "orders", label: "Meus Pedidos" },
    { id: "cart", label: "Meu Carrinho" },
    { id: "account", label: "Minha Conta" },
    { id: "logout", label: "Sair" },
  ];

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
    // Anunciar estado do menu para leitores de tela
    if (Platform.OS === "android") {
      AccessibilityInfo.announceForAccessibility(
        `Menu lateral ${isMenuVisible ? "fechado" : "aberto"}`
      );
    }
  };

  const handleItemPress = (itemId, itemLabel) => {
    setActiveItem(itemLabel);
    // Anunciar seleção para leitores de tela
    AccessibilityInfo.announceForAccessibility(`Selecionado: ${itemLabel}`);
    // Fechar menu após seleção (opcional)
    setIsMenuVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Botão para abrir/fechar menu */}
      <TouchableOpacity
        onPress={toggleMenu}
        accessible={true}
        accessibilityLabel={isMenuVisible ? "Fechar menu" : "Abrir menu"}
        accessibilityRole="button"
        accessibilityHint="Navegação principal do aplicativo"
        style={styles.menuButton}
      >
        <Text style={styles.menuButtonText}>{isMenuVisible ? "✕" : "☰"}</Text>
      </TouchableOpacity>

      {/* Menu lateral */}
      {isMenuVisible && (
        <View
          style={styles.menuContainer}
          accessible={true}
          accessibilityViewIsModal={true}
          accessibilityLabel="Menu de navegação"
        >
          <View style={styles.menuHeader}>
            <Text style={styles.menuTitle}>Menu</Text>
          </View>

          <View style={styles.menuItemsContainer}>
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleItemPress(item.id, item.label)}
                accessible={true}
                accessibilityLabel={item.label}
                accessibilityRole="menuitem"
                accessibilityState={{ selected: activeItem === item.label }}
                style={[
                  styles.menuItem,
                  activeItem === item.label && styles.activeMenuItem,
                ]}
              >
                <Text
                  style={[
                    styles.menuItemText,
                    activeItem === item.label && styles.activeMenuItemText,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

// Estilos com boas práticas de acessibilidade
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: Platform.select({ ios: 40, android: 20 }),
    left: 20,
    zIndex: 100,
  },
  menuButton: {
    width: 48, // Tamanho mínimo recomendado para toque
    height: 48,
    borderRadius: 24,
    backgroundColor: "#6200ee",
    justifyContent: "center",
    alignItems: "center",
  },
  menuButtonText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },
  menuContainer: {
    position: "absolute",
    top: 60,
    left: 0,
    width: Dimensions.get("window").width * 0.7,
    maxWidth: 320,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  menuHeader: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#212121",
  },
  menuItemsContainer: {
    paddingVertical: 8,
  },
  menuItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 48, // Altura mínima para toque acessível
    justifyContent: "center",
  },
  activeMenuItem: {
    backgroundColor: "#f3e5f5",
  },
  menuItemText: {
    fontSize: 16,
    color: "#212121", // Alto contraste com fundo branco
  },
  activeMenuItemText: {
    color: "#6200ee",
    fontWeight: "bold",
  },
});

export default SideMenu;
