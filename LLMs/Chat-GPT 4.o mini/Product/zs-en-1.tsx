import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  AccessibilityInfo,
} from "react-native";

const ProductDetailScreen = () => {
  const product = {
    name: "Smartphone X",
    description:
      "A high-end smartphone with an amazing display and great camera.",
    price: "$999",
    image: "https://via.placeholder.com/200",
  };

  return (
    <View style={styles.container}>
      {/* Product Image */}
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        accessibilityLabel={`Image of ${product.name}`}
      />

      {/* Product Name */}
      <Text style={styles.productName} accessibilityRole="header">
        {product.name}
      </Text>

      {/* Product Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Product Price */}
      <Text style={styles.price} accessibilityRole="text">
        Price: {product.price}
      </Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        {/* Add to Cart */}
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            AccessibilityInfo.announceForAccessibility("Added to cart")
          }
          accessible
          accessibilityLabel="Add to cart"
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>

        {/* Add to Favorites */}
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            AccessibilityInfo.announceForAccessibility("Added to favorites")
          }
          accessible
          accessibilityLabel="Add to favorites"
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>Add to Favorites</Text>
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
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  productName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000", // High contrast
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 12,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#008000",
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 120, // Ensures touch target size
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default ProductDetailScreen;
