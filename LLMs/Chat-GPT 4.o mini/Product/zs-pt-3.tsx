import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const ProductDetailScreen = () => {
  const product = {
    name: "Tênis Esportivo",
    description:
      "Tênis confortável e moderno, ideal para atividades físicas e uso diário.",
    price: "R$ 299,99",
    imageUrl: "https://via.placeholder.com/400", // Substitua pela URL da imagem do produto
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.imageUrl }}
          style={styles.image}
          accessibilityLabel={`Imagem do produto: ${product.name}`}
        />
      </View>

      <Text
        style={styles.productName}
        accessible={true}
        accessibilityRole="header"
      >
        {product.name}
      </Text>

      <Text style={styles.productDescription} accessible={true}>
        {product.description}
      </Text>

      <Text
        style={styles.productPrice}
        accessible={true}
        accessibilityRole="text"
      >
        {product.price}
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Produto adicionado ao carrinho")}
          accessible={true}
          accessibilityLabel="Adicionar ao carrinho"
          accessibilityRole="button"
          accessibilityHint="Pressione para adicionar este produto ao seu carrinho de compras."
        >
          <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Produto adicionado aos favoritos")}
          accessible={true}
          accessibilityLabel="Adicionar aos favoritos"
          accessibilityRole="button"
          accessibilityHint="Pressione para adicionar este produto aos seus favoritos."
        >
          <Text style={styles.buttonText}>Adicionar aos Favoritos</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    color: "#555",
    marginBottom: 16,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e63946",
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#2a9d8f",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 12,
    minWidth: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProductDetailScreen;
