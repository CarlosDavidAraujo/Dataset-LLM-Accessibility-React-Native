import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductDetailScreen = () => {
  // Informações do produto (hardcoded)
  const product = {
    name: 'Camiseta Básica',
    description: 'Uma camiseta básica de algodão, confortável e durável.',
    price: 'R$ 49,90',
    imageUrl: 'https://via.placeholder.com/300x400', // URL da imagem do produto
  };

  return (
    <View style={styles.container}>
      {/* Imagem do produto */}
      <Image
        source={{ uri: product.imageUrl }}
        style={styles.productImage}
        accessibilityLabel={`Imagem do produto: ${product.name}`}
        accessible={true}
      />

      {/* Nome do produto */}
      <Text
        style={styles.productName}
        accessibilityRole="header"
        accessible={true}
      >
        {product.name}
      </Text>

      {/* Descrição do produto */}
      <Text
        style={styles.productDescription}
        accessibilityLabel={`Descrição do produto: ${product.description}`}
        accessible={true}
      >
        {product.description}
      </Text>

      {/* Preço do produto */}
      <Text
        style={styles.productPrice}
        accessibilityLabel={`Preço do produto: ${product.price}`}
        accessible={true}
      >
        {product.price}
      </Text>

      {/* Botão de adicionar ao carrinho */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel="Adicionar ao carrinho"
        accessibilityRole="button"
        accessible={true}
        onPress={() => console.log('Adicionar ao carrinho')}
      >
        <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>

      {/* Botão de adicionar aos favoritos */}
      <TouchableOpacity
        style={[styles.button, styles.favoriteButton]}
        accessibilityLabel="Adicionar aos favoritos"
        accessibilityRole="button"
        accessible={true}
        onPress={() => console.log('Adicionar aos favoritos')}
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
    height: 300,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // Contraste suficiente com o fundo branco
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    color: '#333333', // Contraste suficiente com o fundo branco
    marginBottom: 16,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000', // Contraste suficiente com o fundo branco
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
    minWidth: 200, // Tamanho mínimo para garantir um alvo de toque adequado
    minHeight: 48, // Tamanho mínimo para garantir um alvo de toque adequado
  },
  favoriteButton: {
    backgroundColor: '#6C757D',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;