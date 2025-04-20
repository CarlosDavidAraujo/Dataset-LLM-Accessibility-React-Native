import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';

const ProductDetailScreen = () => {
  const product = {
    name: 'Premium Wireless Headphones',
    description:
      'Experience immersive sound with these high-quality wireless headphones. Featuring noise cancellation, long battery life, and comfortable ear cushions.',
    price: 149.99,
    imageUrl: 'https://via.placeholder.com/300', // Replace with a real image URL
  };

  const getButtonStyle = (baseStyle) => {
    if (Platform.OS === 'ios') {
      return { ...baseStyle, minWidth: 44, minHeight: 44 };
    }
    return baseStyle;
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} accessibilityLabel={product.name} />

      <View style={styles.content}>
        <Text style={styles.name} accessibilityRole="header" aria-level="2">
          {product.name}
        </Text>

        <Text style={styles.description}>
          {product.description}
        </Text>

        <Text style={styles.price}>
          ${product.price.toFixed(2)}
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={getButtonStyle(styles.button)}
            accessibilityRole="button"
            accessibilityLabel={`Add ${product.name} to cart`}
            accessible={true}
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={getButtonStyle(styles.favoriteButton)}
            accessibilityRole="button"
            accessibilityLabel={`Add ${product.name} to favorites`}
            accessible={true}
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
  content: {
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
    fontSize: 20,
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
    minWidth: 150, // Ensure minimum touch target size
    alignItems: 'center',
    justifyContent: 'center',
  },
  favoriteButton: {
    backgroundColor: '#6c757d',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProductDetailScreen;