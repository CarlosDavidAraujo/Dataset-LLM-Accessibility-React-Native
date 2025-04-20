import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ProductDetailScreen = () => {
  const product = {
    name: "Cool T-Shirt",
    description: "A comfortable cotton t-shirt, perfect for all seasons.",
    price: "$29.99",
    image: "https://example.com/tshirt.jpg",
  };

  return (
    <View style={styles.container}>
      {/* Product Image */}
      <Image
        source={{ uri: product.image }}
        style={styles.productImage}
        accessibilityLabel={`Image of ${product.name}`}
      />

      {/* Product Name */}
      <Text style={styles.productName} accessibilityLabel="Product name">
        {product.name}
      </Text>

      {/* Product Description */}
      <Text
        style={styles.productDescription}
        accessibilityLabel="Product description"
      >
        {product.description}
      </Text>

      {/* Product Price */}
      <Text style={styles.productPrice} accessibilityLabel="Product price">
        {product.price}
      </Text>

      {/* Add to Cart Button */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Add to cart"
        onPress={() => console.log("Add to cart pressed")}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>

      {/* Add to Favorites Button */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Add to favorites"
        onPress={() => console.log("Add to favorites pressed")}
      >
        <Text style={styles.buttonText}>Add to Favorites</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  productImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000", // Ensures good contrast with background
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: "#333333", // Good contrast with background
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF5733", // Ensures readability and distinct from other text
    marginBottom: 20,
  },
  button: {
    minWidth: 48, // Minimum touch target width
    minHeight: 48, // Minimum touch target height
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default ProductDetailScreen;
