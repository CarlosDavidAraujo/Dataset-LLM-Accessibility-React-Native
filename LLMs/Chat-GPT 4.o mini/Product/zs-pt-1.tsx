import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";

const ProductDetailScreen = () => {
  const product = {
    name: "Camiseta de Algodão",
    description: "Camiseta confortável de algodão, ideal para o dia a dia.",
    price: "R$ 79,90",
    image: "https://example.com/camiseta.jpg",
  };

  const handleAddToCart = () => {
    console.log("Produto adicionado ao carrinho");
  };

  const handleAddToFavorites = () => {
    console.log("Produto adicionado aos favoritos");
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        accessible={true}
        accessibilityLabel={`Imagem de uma ${product.name}`}
      />

      <Text
        style={styles.productName}
        accessible={true}
        accessibilityLabel={`Nome do produto: ${product.name}`}
      >
        {product.name}
      </Text>

      <Text
        style={styles.productDescription}
        accessible={true}
        accessibilityLabel={`Descrição do produto: ${product.description}`}
      >
        {product.description}
      </Text>

      <Text
        style={styles.productPrice}
        accessible={true}
        accessibilityLabel={`Preço: ${product.price}`}
      >
        {product.price}
      </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleAddToCart}
          accessible={true}
          accessibilityLabel="Adicionar ao carrinho"
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleAddToFavorites}
          accessible={true}
          accessibilityLabel="Adicionar aos Favoritos"
          accessibilityRole="button"
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
    backgroundColor: "#ffffff",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    borderRadius: 8,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    color: "#555555",
    marginBottom: 16,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ff6347",
    marginBottom: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 16,
    borderRadius: 8,
    width: "48%",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});

export default ProductDetailScreen;
