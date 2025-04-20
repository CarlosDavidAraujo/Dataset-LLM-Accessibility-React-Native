import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

// Componente Menu Lateral
const SideMenu = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.menuItem}
          accessible={true}
          accessibilityLabel="Início"
          accessibilityHint="Vai para a página inicial do e-commerce"
          accessibilityRole="button"
        >
          <Text style={styles.menuItemText}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          accessible={true}
          accessibilityLabel="Promoções"
          accessibilityHint="Veja as promoções disponíveis"
          accessibilityRole="button"
        >
          <Text style={styles.menuItemText}>Promoções</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          accessible={true}
          accessibilityLabel="Meus Pedidos"
          accessibilityHint="Veja o histórico de seus pedidos"
          accessibilityRole="button"
        >
          <Text style={styles.menuItemText}>Meus Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          accessible={true}
          accessibilityLabel="Meu Carrinho"
          accessibilityHint="Acesse seu carrinho de compras"
          accessibilityRole="button"
        >
          <Text style={styles.menuItemText}>Meu Carrinho</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          accessible={true}
          accessibilityLabel="Minha Conta"
          accessibilityHint="Acesse as configurações da sua conta"
          accessibilityRole="button"
        >
          <Text style={styles.menuItemText}>Minha Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          accessible={true}
          accessibilityLabel="Sair"
          accessibilityHint="Finaliza a sessão e desloga"
          accessibilityRole="button"
        >
          <Text style={styles.menuItemText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Estilos com foco em acessibilidade
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  menu: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 20,
    backgroundColor: "#2d3e50", // Contraste adequado
  },
  menuItem: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: "#3b4c64", // Cor de fundo para contraste
    borderRadius: 8,
    alignItems: "flex-start",
    justifyContent: "center",
    minWidth: 200, // Garantir tamanho adequado para alvo de toque
  },
  menuItemText: {
    color: "#fff", // Texto com contraste alto
    fontSize: 18,
    fontWeight: "600", // Tamanho e espessura adequados para legibilidade
  },
});

export default SideMenu;
