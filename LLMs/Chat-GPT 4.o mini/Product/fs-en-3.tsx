import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ProductDetailScreen = () => {
  return (
    <View style={styles.container}>
      {/* Product Name */}
      <Text style={styles.productName}>Stylish Leather Jacket</Text>

      {/* Product Image */}
      <Image
        source={{ uri: "https://example.com/leather-jacket.jpg" }}
        style={styles.productImage}
        accessibilityLabel="Stylish leather jacket with a modern design"
      />

      {/* Product Description */}
      <Text style={styles.productDescription}>
        A high-quality leather jacket that fits perfectly for any casual outing.
      </Text>

      {/* Product Price */}
      <Text style={styles.productPrice}>$199.99</Text>

      {/* Add to Cart Button */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Add Stylish Leather Jacket to cart"
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>

      {/* Add to Favorites Button */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Add Stylish Leather Jacket to favorites"
      >
        <Text style={styles.buttonText}>Add to Favorites</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000", // High contrast for text readability
    marginBottom: 10,
  },
  productImage: {
    width: "100%",
    height: 300,
    marginBottom: 15,
  },
  productDescription: {
    fontSize: 16,
    color: "#333333", // Sufficient contrast with background
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1A1A1A", // Sufficient contrast with background
    marginBottom: 20,
  },
  button: {
    minWidth: 48,
    minHeight: 48,
    padding: 12,
    backgroundColor: "#4CAF50", // High contrast with the background
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductDetailScreen;
