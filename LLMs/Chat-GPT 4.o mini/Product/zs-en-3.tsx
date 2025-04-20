import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";

const ProductDetailScreen = () => {
  const product = {
    name: "Smartphone",
    description: "Latest model with a stunning display and fast performance.",
    price: "$699",
    image: "https://example.com/smartphone.jpg", // Replace with an actual image URL
  };

  return (
    <View style={styles.container}>
      {/* Product Image */}
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        accessibilityLabel={`Image of ${product.name}`}
        accessible={true}
      />

      {/* Product Name */}
      <Text
        style={styles.productName}
        accessibilityRole="header"
        accessible={true}
        accessibilityLabel={`Product Name: ${product.name}`}
      >
        {product.name}
      </Text>

      {/* Product Description */}
      <Text
        style={styles.productDescription}
        accessibilityLabel={`Description: ${product.description}`}
        accessible={true}
      >
        {product.description}
      </Text>

      {/* Product Price */}
      <Text
        style={styles.productPrice}
        accessibilityLabel={`Price: ${product.price}`}
        accessible={true}
      >
        {product.price}
      </Text>

      {/* Add to Cart Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Added to cart")}
        accessible={true}
        accessibilityLabel="Add to cart"
        accessibilityHint="Adds the product to your shopping cart."
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>

      {/* Add to Favorites Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Added to favorites")}
        accessible={true}
        accessibilityLabel="Add to favorites"
        accessibilityHint="Adds the product to your favorites list."
      >
        <Text style={styles.buttonText}>Add to Favorites</Text>
      </TouchableOpacity>
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
    height: 300,
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
    color: "#666666",
    marginBottom: 16,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF6347",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 200,
    height: 50,
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "600",
  },
});

export default ProductDetailScreen;
