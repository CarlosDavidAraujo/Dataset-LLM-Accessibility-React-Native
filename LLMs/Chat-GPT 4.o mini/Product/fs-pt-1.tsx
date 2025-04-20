import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ProductDetailScreen = () => {
  return (
    <View style={styles.container}>
      {/* Nome do produto */}
      <Text style={styles.productName}>Camiseta Estampada - Preta</Text>

      {/* Descrição do produto */}
      <Text style={styles.productDescription}>
        Camiseta de algodão com estampa moderna. Confortável e ideal para o dia
        a dia.
      </Text>

      {/* Preço do produto */}
      <Text style={styles.productPrice}>R$ 59,90</Text>

      {/* Imagem do produto */}
      <Image
        source={{ uri: "https://www.exemplo.com/imagem_produto.jpg" }}
        style={styles.productImage}
        accessibilityLabel="Camiseta estampada preta com manga curta"
      />

      {/* Botões para adicionar ao carrinho e aos favoritos */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="Adicionar ao carrinho"
          onPress={() => console.log("Produto adicionado ao carrinho")}
        >
          <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="Adicionar aos favoritos"
          onPress={() => console.log("Produto adicionado aos favoritos")}
        >
          <Text style={styles.buttonText}>Adicionar aos Favoritos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000", // Preto, com contraste adequado
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    color: "#333333", // Cinza escuro, com contraste adequado
    marginBottom: 16,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF5733", // Cor laranja, com contraste adequado
    marginBottom: 24,
  },
  productImage: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    minWidth: 160,
    minHeight: 48,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default ProductDetailScreen;
