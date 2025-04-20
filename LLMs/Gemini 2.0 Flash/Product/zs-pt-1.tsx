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
    name: 'Tênis de Corrida Ultraleve',
    description:
      'Experimente um conforto e desempenho incomparáveis com nossos tênis de corrida ultraleves. Projetados para velocidade e agilidade, eles são perfeitos para corredores de todos os níveis.',
    price: 99.99,
    image:
      'https://m.media-amazon.com/images/I/719hT7wT1lL._AC_UY695_.jpg',
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: product.image }}
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
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailsScreen;