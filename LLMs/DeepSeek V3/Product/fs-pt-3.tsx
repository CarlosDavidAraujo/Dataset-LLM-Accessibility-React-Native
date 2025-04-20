import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductDetailScreen = () => {
  // Informações do produto (hardcoded)
  const product = {
    name: 'Smartphone XYZ',
    description: 'Um smartphone avançado com câmera de alta resolução e bateria de longa duração.',
    price: 'R$ 2.499,99',
    imageUrl: 'https://example.com/smartphone-xyz.jpg',
  };

  return (
    <View style={styles.container}>
      {/* Imagem do produto */}
      <Image
        source={{ uri: product.imageUrl }}
        style={styles.productImage}
        accessibilityLabel={`Imagem do produto ${product.name}`}
      />

      {/* Nome do produto */}
      <Text style={styles.productName}>{product.name}</Text>

      {/* Descrição do produto */}
      <Text style={styles.productDescription}>{product.description}</Text>

      {/* Preço do produto */}
      <Text style={styles.productPrice}>{product.price}</Text>

      {/* Botão para adicionar ao carrinho */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel={`Adicionar ${product.name} ao carrinho`}
      >
        <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>

      {/* Botão para adicionar aos favoritos */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel={`Adicionar ${product.name} aos favoritos`}
      >
        <Text style={styles.buttonText}>Adicionar aos Favoritos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // Texto preto para contraste adequado
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    color: '#333333', // Texto escuro para contraste adequado
    marginBottom: 16,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000', // Texto preto para contraste adequado
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#007BFF',
    minWidth: 48,
    minHeight: 48,
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF', // Texto branco para contraste adequado
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;