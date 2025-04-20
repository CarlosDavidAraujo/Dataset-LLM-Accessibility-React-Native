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
    name: 'Premium Headphones',
    description:
      'Experience immersive sound with these high-quality headphones. Designed for comfort and superior audio clarity.',
    price: 199.99,
    image: 'https://via.placeholder.com/300', // Replace with your image URL
  };

  return (
    <ScrollView style={styles.container} 
    //accessibilityRole="main" valor invalido para a propriedade
    >
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        accessibilityLabel={`Product image: ${product.name}`}
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.name} accessibilityRole="header" aria-level="2">
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
    marginBottom: 10,
    color: '#555',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007bff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 20,
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