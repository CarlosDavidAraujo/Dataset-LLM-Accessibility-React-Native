import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductDetailScreen = () => {
  // Hardcoded product information
  const product = {
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and 20-hour battery life.',
    price: '$199.99',
    imageUrl: 'https://example.com/headphones.jpg',
  };

  return (
    <View style={styles.container}>
      {/* Product Image */}
      <Image
        source={{ uri: product.imageUrl }}
        style={styles.image}
        accessibilityLabel={`Image of ${product.name}`}
      />

      {/* Product Name */}
      <Text style={styles.productName} accessibilityRole="header">
        {product.name}
      </Text>

      {/* Product Description */}
      <Text style={styles.productDescription}>
        {product.description}
      </Text>

      {/* Product Price */}
      <Text style={styles.productPrice}>
        {product.price}
      </Text>

      {/* Add to Cart Button */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel={`Add ${product.name} to cart`}
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>

      {/* Add to Favorites Button */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel={`Add ${product.name} to favorites`}
        accessibilityRole="button"
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
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // High contrast with white background
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    color: '#333333', // High contrast with white background
    marginBottom: 16,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000', // High contrast with white background
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#007AFF',
    minWidth: 48,
    minHeight: 48,
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF', // High contrast with button background
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;