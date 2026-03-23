import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ProductDetailScreen = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Mock de dados do produto
  const product = {
    id: "1",
    name: "Fones de Ouvido Bluetooth Premium",
    description:
      "Fones de ouvido sem fio com cancelamento de ruído ativo, bateria de longa duração e qualidade de som superior. Perfeito para viagens e uso diário.",
    price: "R$ 299,90",
    imageUri: "https://example.com/product-image.jpg",
  };

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
    Alert.alert(
      "Produto adicionado",
      `${product.name} foi adicionado ao seu carrinho`,
      [{ text: "OK" }],
    );
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    Alert.alert(
      isFavorite ? "Removido" : "Adicionado",
      isFavorite
        ? `${product.name} removido dos favoritos`
        : `${product.name} adicionado aos favoritos`,
    );
  };

  return (
    <ScrollView
      style={styles.container}
      // accessibilityRole="main" //valor invalido
      accessibilityLabel="Detalhes do produto"
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.imageUri }}
          style={styles.productImage}
          accessibilityIgnoresInvertColors={false}
          importantForAccessibility="yes"
          accessibilityLabel={`Imagem do produto ${product.name}`}
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

        <Text style={styles.productPrice} accessibilityRole="text">
          Preço: {product.price}
        </Text>

        <Text style={styles.productDescription} accessibilityRole="text">
          {product.description}
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={toggleFavorite}
            style={[styles.button, styles.favoriteButton]}
            accessibilityRole="button"
            accessibilityLabel={
              isFavorite
                ? `Remover ${product.name} dos favoritos`
                : `Adicionar ${product.name} aos favoritos`
            }
            accessibilityState={{ selected: isFavorite }}
            accessibilityHint="Toque duas vezes para adicionar ou remover dos favoritos"
          >
            <Text style={styles.buttonText}>
              {isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleAddToCart}
            style={[styles.button, styles.cartButton]}
            accessibilityRole="button"
            accessibilityLabel={`Adicionar ${product.name} ao carrinho`}
            accessibilityHint="Toque duas vezes para adicionar ao carrinho"
          >
            <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
        </View>

        {cartCount > 0 && (
          <Text
            style={styles.cartStatus}
            accessibilityLiveRegion="polite"
            accessibilityRole="text"
          >
            {cartCount} item(ns) no carrinho
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  productImage: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  contentContainer: {
    padding: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
    color: "#e74c3c",
  },
  productDescription: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 25,
    color: "#555",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
  },
  favoriteButton: {
    backgroundColor: "#3498db",
  },
  cartButton: {
    backgroundColor: "#2ecc71",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  cartStatus: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 16,
    color: "#777",
  },
});

export default ProductDetailScreen;
