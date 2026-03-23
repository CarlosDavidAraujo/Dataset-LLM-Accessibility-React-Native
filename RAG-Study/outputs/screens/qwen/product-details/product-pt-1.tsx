import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

const ProductDetailScreen = () => {
  // Mock de dados do produto
  const product = {
    id: "1",
    name: "Fones de Ouvido Bluetooth Pro",
    description:
      "Fones de ouvido sem fio com cancelamento de ruído ativo, bateria de longa duração e qualidade de áudio premium. Perfeito para viagens e uso diário.",
    price: "R$ 299,90",
    imageUri: "https://placehold.co/300x300/007AFF/FFFFFF?text=Fones+Pro",
    isFavorite: false,
  };

  const [isFavorite, setIsFavorite] = useState(product.isFavorite);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    Alert.alert(
      "Produto adicionado",
      `${product.name} foi adicionado ao seu carrinho`,
      [{ text: "OK" }],
    );
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const increaseQuantity = () => setQuantity((q) => q + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((q) => q - 1);
  };

  return (
    <ScrollView
      style={styles.container}
     // accessibilityRole="main" //valor invalido
      accessible={true}
      accessibilityLabel="Detalhes do produto"
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.imageUri }}
          style={styles.productImage}
          accessibilityRole="image"
          accessibilityLabel={`Imagem do produto: ${product.name}`}
          importantForAccessibility="yes"
        />
      </View>

      <View style={styles.contentContainer}>
        <Text
          style={styles.productName}
          accessibilityRole="header"
          accessibilityLevel={2} //prop inexistente
        >
          {product.name}
        </Text>

        <Text
          style={styles.productPrice}
          accessibilityRole="text"
          accessibilityLabel={`Preço: ${product.price}`}
        >
          {product.price}
        </Text>

        <Text
          style={styles.sectionTitle}
          accessibilityRole="header"
          accessibilityLevel={3} //prop inexistente
        >
          Descrição
        </Text>

        <Text style={styles.productDescription} accessibilityRole="text">
          {product.description}
        </Text>

        <Text
          style={styles.sectionTitle}
          accessibilityRole="header"
          accessibilityLevel={3}
        >
          Quantidade
        </Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={decreaseQuantity}
            style={styles.quantityButton}
            accessibilityRole="button"
            accessibilityLabel="Diminuir quantidade"
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>

          <Text
            style={styles.quantityText}
            accessibilityRole="text"
            accessibilityLabel={`Quantidade selecionada: ${quantity}`}
          >
            {quantity}
          </Text>

          <TouchableOpacity
            onPress={increaseQuantity}
            style={styles.quantityButton}
            accessibilityRole="button"
            accessibilityLabel="Aumentar quantidade"
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleAddToCart}
            style={[styles.button, styles.cartButton]}
            accessibilityRole="button"
            accessibilityLabel="Adicionar ao carrinho"
          >
            <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={toggleFavorite}
            style={[styles.button, styles.favoriteButton]}
            accessibilityRole="button"
            accessibilityState={{ selected: isFavorite }}
            accessibilityLabel={
              isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"
            }
          >
            <Text style={styles.buttonText}>
              {isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  imageContainer: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  productImage: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  contentContainer: {
    padding: 20,
    backgroundColor: "#ffffff",
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333333",
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
    color: "#007AFF",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 8,
    color: "#333333",
  },
  productDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666666",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  quantityButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007AFF",
    borderRadius: 20,
  },
  quantityButtonText: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 20,
    minWidth: 30,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 20,
    gap: 12,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  cartButton: {
    backgroundColor: "#34C759",
  },
  favoriteButton: {
    backgroundColor: "#FF9500",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
});

export default ProductDetailScreen;
