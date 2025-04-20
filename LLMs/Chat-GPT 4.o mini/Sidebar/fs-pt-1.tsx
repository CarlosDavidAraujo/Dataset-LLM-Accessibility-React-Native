import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const MenuLateral = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF", padding: 16 }}>
      <TouchableOpacity
        style={{ minWidth: 48, minHeight: 48, padding: 8, marginBottom: 16 }}
        accessibilityLabel="Ir para Início"
        accessibilityRole="button"
      >
        <Text style={{ color: "#000000", fontSize: 18 }}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ minWidth: 48, minHeight: 48, padding: 8, marginBottom: 16 }}
        accessibilityLabel="Ir para Promoções"
        accessibilityRole="button"
      >
        <Text style={{ color: "#000000", fontSize: 18 }}>Promoções</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ minWidth: 48, minHeight: 48, padding: 8, marginBottom: 16 }}
        accessibilityLabel="Ir para Meus Pedidos"
        accessibilityRole="button"
      >
        <Text style={{ color: "#000000", fontSize: 18 }}>Meus Pedidos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ minWidth: 48, minHeight: 48, padding: 8, marginBottom: 16 }}
        accessibilityLabel="Ir para Meu Carrinho"
        accessibilityRole="button"
      >
        <Text style={{ color: "#000000", fontSize: 18 }}>Meu Carrinho</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ minWidth: 48, minHeight: 48, padding: 8, marginBottom: 16 }}
        accessibilityLabel="Ir para Minha Conta"
        accessibilityRole="button"
      >
        <Text style={{ color: "#000000", fontSize: 18 }}>Minha Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ minWidth: 48, minHeight: 48, padding: 8 }}
        accessibilityLabel="Sair"
        accessibilityRole="button"
      >
        <Text style={{ color: "#FF0000", fontSize: 18 }}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuLateral;
