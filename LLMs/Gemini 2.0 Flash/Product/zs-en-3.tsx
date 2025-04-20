import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const ProductDetailScreen = () => {
  const product = {
    name: 'Premium Wireless Headphones',
    description:
      'Experience immersive sound with these noise-canceling wireless headphones. Enjoy up to 30 hours of playtime and crystal-clear audio.',
    price: 199.99,
    imageUrl: 'https://via.placeholder.com/300', // Replace with your image URL
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} accessibilityLabel={`Image of ${product.name}`} />

      <View style={styles.detailsContainer}>
        <Text style={styles.name} accessibilityRole="header" aria-level="2">
          {product.name}
        </Text>

        <Text style={styles.description}>
          {product.description}
        </Text>

        <Text style={styles.price}>
          Price: ${product.price.toFixed(2)}
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            accessibilityRole="button"
            accessibilityLabel={`Add ${product.name} to cart`}
            accessible={true}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.favoriteButton]}
            accessibilityRole="button"
            accessibilityLabel={`Add ${product.name} to favorites`}
            accessible={true}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Text style={styles.buttonText}>Add to Favorites</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
    color: '#555',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    color: '#007bff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 120,
  },
  favoriteButton: {
    backgroundColor: '#6c757d',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ProductDetailScreen;