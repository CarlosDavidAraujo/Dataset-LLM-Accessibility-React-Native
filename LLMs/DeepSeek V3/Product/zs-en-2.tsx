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
        accessible
      />

      {/* Product Name */}
      <Text
        style={styles.productName}
        accessibilityRole="header"
        accessible
      >
        {product.name}
      </Text>

      {/* Product Description */}
      <Text
        style={styles.productDescription}
        accessibilityRole="text"
        accessible
      >
        {product.description}
      </Text>

      {/* Product Price */}
      <Text
        style={styles.productPrice}
        accessibilityRole="text"
        accessible
      >
        {product.price}
      </Text>

      {/* Add to Cart Button */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel={`Add ${product.name} to cart`}
        accessibilityRole="button"
        accessible
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>

      {/* Add to Favorites Button */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel={`Add ${product.name} to favorites`}
        accessibilityRole="button"
        accessible
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
    height: 300,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // High contrast for text
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    color: '#333333', // Sufficient contrast for text
    marginBottom: 16,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000', // High contrast for text
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#007AFF', // Sufficient contrast for button background
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
    minWidth: 200, // Adequate touch target size
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // High contrast for button text
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;