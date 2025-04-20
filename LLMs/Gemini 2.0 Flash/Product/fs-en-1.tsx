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
    name: 'Ergonomic Office Chair',
    description:
      'This ergonomic office chair provides exceptional comfort and support for long hours of work. It features adjustable lumbar support, armrests, and headrest.',
    price: 199.99,
    image: 'https://via.placeholder.com/300x300.png?text=Office+Chair', // Replace with your image URL
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} accessibilityLabel={`Image of ${product.name}`} />

      <View style={styles.detailsContainer}>
        <Text style={styles.name} accessibilityRole="header" aria-level="1">
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
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            accessibilityRole="button"
            accessibilityLabel={`Add ${product.name} to favorites`}
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
    lineHeight: 24,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    color: '#228B22',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    minWidth: 120,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ProductDetailScreen;