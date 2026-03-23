import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ProductDetailScreen = () => {
  // Mock product data
  const product = {
    id: "1",
    name: "Premium Wireless Headphones",
    description:
      "Experience crystal-clear sound with our premium wireless headphones. Featuring noise cancellation, 30-hour battery life, and comfortable over-ear design for extended listening sessions.",
    price: "$199.99",
    imageUrl: "https://example.com/headphones.jpg",
    rating: 4.5,
  };

  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = () => {
    Alert.alert(
      "Added to Cart",
      `${product.name} has been added to your cart`,
      [{ text: "OK" }],
    );
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <ScrollView
      style={styles.container}
      // accessibilityRole="main" //valor invalido
      testID="product-detail-screen"
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.imageUrl }}
          style={styles.productImage}
          accessibilityLabel={`Product image of ${product.name}`}
          resizeMode="contain"
        />
      </View>

      <View style={styles.contentContainer}>
        <Text
          style={styles.productName}
          accessibilityRole="header"
          accessible={true}
        >
          {product.name}
        </Text>

        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>
            Rating: {product.rating}/5 stars
          </Text>
        </View>

        <Text style={styles.price} accessibilityRole="text" accessible={true}>
          Price: {product.price}
        </Text>

        <Text
          style={styles.description}
          accessibilityRole="text"
          accessible={true}
        >
          {product.description}
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.cartButton]}
            onPress={handleAddToCart}
            accessibilityRole="button"
            accessibilityLabel="Add item to shopping cart"
            accessibilityHint="Adds this product to your shopping cart"
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.favoriteButton]}
            onPress={toggleFavorite}
            accessibilityRole="button"
            accessibilityLabel={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
            accessibilityHint={
              isFavorite
                ? "Removes this product from your favorites"
                : "Saves this product to your favorites"
            }
            accessibilityState={{ selected: isFavorite }}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>
              {isFavorite ? "Remove Favorite" : "Add Favorite"}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.switchContainer} accessibilityRole="radiogroup">
          <Text style={styles.switchLabel}>Save for later</Text>
          <Switch
            value={false}
            onValueChange={() => {}}
            accessibilityRole="switch"
            accessibilityLabel="Save product for later"
            accessibilityHint="Toggle to save this product for later viewing"
          />
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
    backgroundColor: "#fff",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  productImage: {
    width: "100%",
    height: 300,
    borderRadius: 8,
  },
  contentContainer: {
    padding: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  ratingText: {
    fontSize: 16,
    color: "#666",
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 12,
    color: "#e91e63",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cartButton: {
    backgroundColor: "#2196f3",
  },
  favoriteButton: {
    backgroundColor: "#ff5722",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  switchLabel: {
    fontSize: 16,
    color: "#333",
  },
});

export default ProductDetailScreen;
