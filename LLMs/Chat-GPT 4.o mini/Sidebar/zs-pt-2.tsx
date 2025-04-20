import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  AccessibilityInfo,
} from "react-native";

const SideMenu = () => {
  // Função para garantir que os elementos de toque são grandes o suficiente
  const renderMenuItem = (label, onPress) => (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={onPress}
      accessible={true} // Torna o item acessível para leitores de tela
      accessibilityLabel={label} // Descrição do item para leitores de tela
      accessibilityRole="button" // Define o papel como um botão
      accessibilityHint={`Vai para a seção de ${label.toLowerCase()}.`} // Hint para contexto adicional
    >
      <Text style={styles.menuText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.menu}>
        {renderMenuItem("Início", () => console.log("Navegar para Início"))}
        {renderMenuItem("Promoções", () =>
          console.log("Navegar para Promoções")
        )}
        {renderMenuItem("Meus Pedidos", () =>
          console.log("Navegar para Meus Pedidos")
        )}
        {renderMenuItem("Meu Carrinho", () =>
          console.log("Navegar para Meu Carrinho")
        )}
        {renderMenuItem("Minha Conta", () =>
          console.log("Navegar para Minha Conta")
        )}
        {renderMenuItem("Sair", () => console.log("Deslogar"))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5", // Cor de fundo suave
  },
  menu: {
    paddingTop: 20,
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
  },
  menuText: {
    fontSize: 18,
    color: "#333333", // Contraste adequado para boa legibilidade
    fontWeight: "600",
  },
});

export default SideMenu;
