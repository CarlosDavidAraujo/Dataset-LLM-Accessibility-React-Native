import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const SideMenu = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuItem}
        accessible={true}
        accessibilityLabel="Início"
        accessibilityHint="Navegue para a página inicial"
      >
        <Text style={styles.menuItemText}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        accessible={true}
        accessibilityLabel="Promoções"
        accessibilityHint="Veja as promoções disponíveis"
      >
        <Text style={styles.menuItemText}>Promoções</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        accessible={true}
        accessibilityLabel="Meus Pedidos"
        accessibilityHint="Acesse a lista de seus pedidos"
      >
        <Text style={styles.menuItemText}>Meus Pedidos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        accessible={true}
        accessibilityLabel="Meu Carrinho"
        accessibilityHint="Visualize o seu carrinho de compras"
      >
        <Text style={styles.menuItemText}>Meu Carrinho</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        accessible={true}
        accessibilityLabel="Minha Conta"
        accessibilityHint="Gerencie sua conta"
      >
        <Text style={styles.menuItemText}>Minha Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        accessible={true}
        accessibilityLabel="Sair"
        accessibilityHint="Saia da sua conta"
      >
        <Text style={styles.menuItemText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333", // Contraste adequado de fundo
    paddingTop: 50,
    paddingLeft: 20,
    width: width * 0.7, // Largura do menu lateral
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#444", // Contraste de fundo dos itens
    borderRadius: 5,
  },
  menuItemText: {
    color: "#FFF", // Contraste suficiente de texto
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SideMenu;
