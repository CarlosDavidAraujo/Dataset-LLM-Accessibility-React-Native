import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductDetailScreen = () => {
  // Hardcoded product information
  const product = {
    name: 'Wireless Bluetooth Headphones',
    description: 'High-quality sound with noise cancellation. Comfortable fit for long hours.',
    price: '$99.99',
    imageUrl: 'https://via.placeholder.com/300',
  };

  return (
    <View style={styles.container} accessible={true}>
      {/* Product Image */}
      <Image
        source={{ uri: product.imageUrl }}
        style={styles.image}
        accessibilityLabel={`Image of ${product.name}`}
        accessible={true}
      />

      {/* Product Name */}
      <Text
        style={styles.productName}
        accessibilityRole="header"
        accessible={true}
      >
        {product.name}
      </Text>

      {/* Product Description */}
      <Text
        style={styles.description}
        accessibilityLabel={`Description: ${product.description}`}
        accessible={true}
      >
        {product.description}
      </Text>

      {/* Product Price */}
      <Text
        style={styles.price}
        accessibilityLabel={`Price: ${product.price}`}
        accessible={true}
      >
        {product.price}
      </Text>

      {/* Add to Cart Button */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Add to cart"
        accessibilityRole="button"
        accessible={true}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>

      {/* Add to Favorites Button */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Add to favorites"
        accessibilityRole="button"
        accessible={true}
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
    backgroundColor: '#fff',
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
    color: '#000', // Ensure sufficient contrast
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#333', // Ensure sufficient contrast
    marginBottom: 16,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Ensure sufficient contrast
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
    minWidth: 200, // Adequate touch target size
    minHeight: 48, // Adequate touch target size
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;