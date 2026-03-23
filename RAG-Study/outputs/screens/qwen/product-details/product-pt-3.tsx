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
  // Mock de dados do produto
  const product = {
    id: "1",
    name: "Fones de Ouvido Bluetooth Premium",
    description:
      "Fones de ouvido sem fio com cancelamento de ruído ativo, bateria de longa duração e qualidade de áudio superior. Confortáveis para uso prolongado.",
    price: "R$ 499,90",
    imageUri: "https://example.com/product-image.jpg",
  };

  const [isFavorite, setIsFavorite] = useState(false);
  const [cartCount, setCartCount] = useState(0);

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
    const message = !isFavorite
      ? `${product.name} adicionado aos favoritos`
      : `${product.name} removido dos favoritos`;

    Alert.alert("Favoritos atualizados", message, [{ text: "OK" }]);
  };

  return (
    <ScrollView
      style={styles.container}
      accessibilityLabel="Detalhes do produto"
      // accessibilityRole="main" //valor invalido
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.imageUri }}
          style={styles.productImage}
          accessibilityLabel={`Imagem do produto: ${product.name}`}
          importantForAccessibility="yes"
          accessibilityIgnoresInvertColors={false}
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
          accessibilityLabel={`Preço: ${product.price}`}
        >
          {product.price}
        </Text>

        <Text
          style={styles.productDescription}
          accessibilityLabel={`Descrição do produto: ${product.description}`}
        >
          {product.description}
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.cartButton]}
            onPress={handleAddToCart}
            accessibilityRole="button"
            accessibilityLabel="Adicionar ao carrinho"
            accessibilityHint="Adiciona este produto ao seu carrinho de compras"
            accessibilityLiveRegion="polite"
          >
            <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              styles.favoriteButton,
              isFavorite && styles.favorited,
            ]}
            onPress={toggleFavorite}
            accessibilityRole="button"
            accessibilityLabel={
              isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"
            }
            accessibilityHint={
              isFavorite
                ? "Remove este produto da sua lista de favoritos"
                : "Salva este produto na sua lista de favoritos"
            }
            accessibilityState={{ selected: isFavorite }}
            accessibilityLiveRegion="polite"
          >
            <Text style={styles.buttonText}>
              {isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
            </Text>
          </TouchableOpacity>
        </View>

        {cartCount > 0 && (
          <Text
            style={styles.cartStatus}
            accessibilityLiveRegion="polite"
            accessibilityLabel={`Você tem ${cartCount} itens no carrinho`}
          >
            Itens no carrinho: {cartCount}
          </Text>
        )}
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
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  productImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  contentContainer: {
    padding: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "600",
    color: "#e53935",
    marginBottom: 16,
  },
  productDescription: {
    fontSize: 16,
    color: "#555555",
    lineHeight: 24,
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  cartButton: {
    backgroundColor: "#1e88e5",
  },
  favoriteButton: {
    backgroundColor: "#757575",
  },
  favorited: {
    backgroundColor: "#ff4081",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  cartStatus: {
    textAlign: "center",
    fontSize: 16,
    color: "#4caf50",
    fontWeight: "500",
  },
});

export default ProductDetailScreen;
