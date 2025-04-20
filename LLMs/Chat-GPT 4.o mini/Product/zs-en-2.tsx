import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const ProductDetailScreen = () => {
  // Hardcoded product information
  const product = {
    name: 'Stylish Headphones',
    description: 'High-quality headphones with noise cancellation and premium sound.',
    price: '$199.99',
    imageUrl: 'https://example.com/headphones.jpg',
  };

  return (
    <View style={styles.container}>
      {/* Product Image with alt text for screen readers */}
      <Image
        source={{ uri: product.imageUrl }}
        style={styles.image}
        accessibilityLabel={`Image of ${product.name}`}
        accessible={true}
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
      <Text style={styles.productPrice} accessibilityRole="text">
        {product.price}
      </Text>

      {/* Add to Cart Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Added to Cart')}
        accessible={true}
        accessibilityLabel="Add to Cart"
        accessibilityRole="button"
        accessibilityHint="Adds the product to your shopping cart"
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>

      {/* Add to Favorites Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Added to Favorites')}
        accessible={true}
        accessibilityLabel="Add to Favorites"
        accessibilityRole="button"
        accessibilityHint="Adds the product to your favorites list"
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
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
    textAlign: 'center',
  },
  productDescription: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 16,
    lineHeight: 24,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50, // Ensures good touch target size
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default ProductDetailScreen;
