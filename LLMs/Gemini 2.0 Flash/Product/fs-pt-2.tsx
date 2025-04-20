import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductDetailsScreen = () => {
  const product = {
    name: 'Fone de ouvido sem fio',
    description:
      'Experimente áudio imersivo com estes fones de ouvido sem fio de alta qualidade.',
    price: 'R$ 199,99',
    imageUrl:
      'https://m.media-amazon.com/images/I/51n+f7wAz3L._AC_UF894,1000_QL80_.jpg',
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.imageUrl }}
        style={styles.productImage}
        accessibilityLabel={`Imagem do produto ${product.name}`}
      />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="Adicionar ao carrinho"
        >
          <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="Adicionar aos favoritos"
        >
          <Text style={styles.buttonText}>Adicionar aos favoritos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', // Contraste adequado
    marginTop: 16,
  },
  productDescription: {
    fontSize: 16,
    color: '#333', // Contraste adequado
    marginTop: 8,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#006600', // Contraste adequado (verde para preço)
    marginTop: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24,
  },
  button: {
    backgroundColor: '#007AFF', // Cor de fundo com contraste adequado
    paddingVertical: 12,
    paddingHorizontal: 24,
    minWidth: 48, // Tamanho mínimo do alvo de toque
    minHeight: 48, // Tamanho mínimo do alvo de toque
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF', // Contraste adequado
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProductDetailsScreen;