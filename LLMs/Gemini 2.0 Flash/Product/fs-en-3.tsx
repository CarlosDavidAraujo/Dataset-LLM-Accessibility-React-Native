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
      'Experience immersive sound with these noise-canceling wireless headphones. Enjoy up to 30 hours of playtime and crystal-clear audio quality.',
    price: 199.99,
    imageUrl:
      'https://via.placeholder.com/300', // Replace with a real image URL
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: product.imageUrl }}
        style={styles.image}
        accessibilityLabel={`Image of ${product.name}`}
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.name} accessibilityRole="header" aria-level="1">
          {product.name}
        </Text>

        <Text style={styles.description}>
          {product.description}
        </Text>

        <Text style={styles.price}>${product.price.toFixed(2)}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            accessibilityRole="button"
            accessibilityLabel="Add to Cart"
            accessible={true}
            onPress={() => {
              // Handle add to cart logic here
              console.log('Added to cart');
            }}
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            accessibilityRole="button"
            accessibilityLabel="Add to Favorites"
            accessible={true}
            onPress={() => {
              // Handle add to favorites logic here
              console.log('Added to favorites');
            }}
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
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Sufficient contrast
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
    color: '#555', // Sufficient contrast
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    color: '#007AFF', // Sufficient contrast
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    minWidth: 120, // Ensure adequate touch target size
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ProductDetailScreen;