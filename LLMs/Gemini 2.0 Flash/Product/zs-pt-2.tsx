import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const ProductDetailsScreen = () => {
  const product = {
    name: 'Camiseta Básica',
    description:
      'Uma camiseta confortável e estilosa para o uso diário. Feita de algodão macio, esta camiseta é perfeita para qualquer ocasião.',
    price: 29.99,
    imageUrl:
      'https://exemplo.com/camiseta-basica.jpg', // Substitua pelo URL da imagem da camiseta
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: product.imageUrl }}
        style={styles.image}
        accessibilityLabel={`Imagem do produto ${product.name}`}
      />
      <View style={styles.details}>
        <Text style={styles.name} accessibilityRole="header">
          {product.name}
        </Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            accessibilityRole="button"
            accessibilityLabel="Adicionar ao carrinho"
          >
            <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            accessibilityRole="button"
            accessibilityLabel="Adicionar aos favoritos"
          >
            <Text style={styles.buttonText}>Adicionar aos favoritos</Text>
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
  details: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    minWidth: '40%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default ProductDetailsScreen;