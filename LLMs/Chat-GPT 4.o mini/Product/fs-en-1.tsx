import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductDetailScreen = () => {
  const product = {
    name: 'Wireless Headphones',
    description: 'High-quality over-ear wireless headphones with noise cancellation.',
    price: '$199.99',
    imageUrl: 'https://example.com/headphones.jpg', // hardcoded image URL
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
      <Text style={styles.productName}>
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
        accessibilityLabel="Add item to cart"
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>

      {/* Add to Favorites Button */}
      <TouchableOpacity 
        style={styles.button}
        accessibilityLabel="Add item to favorites"
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>Add to Favorites</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',  // High contrast with white background
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    color: '#333333',  // Sufficient contrast with the white background
    marginBottom: 16,
  },
  productPrice: {
    fontSize: 20,
    color: '#FF5722',  // High contrast color for price
    fontWeight: 'bold',
    marginBottom: 24,
  },
  button: {
    minWidth: 48,
    minHeight: 48,
    padding: 12,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',  // White text for good contrast
  },
});

export default ProductDetailScreen;
