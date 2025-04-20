import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductDetailScreen = () => {
  // Informações do produto (hardcoded)
  const product = {
    name: 'Camiseta Premium',
    description: 'Camiseta de algodão 100% premium, disponível em várias cores.',
    price: 'R$ 79,90',
    imageUrl: 'https://via.placeholder.com/300', // URL da imagem do produto
  };

  return (
    <View style={styles.container}>
      {/* Imagem do produto */}
      <Image
        source={{ uri: product.imageUrl }}
        style={styles.productImage}
        accessible={true}
        accessibilityLabel={`Imagem do produto: ${product.name}`}
      />

      {/* Nome do produto */}
      <Text
        style={styles.productName}
        accessibilityRole="header"
      >
        {product.name}
      </Text>

      {/* Descrição do produto */}
      <Text
        style={styles.productDescription}
        accessibilityRole="text"
      >
        {product.description}
      </Text>

      {/* Preço do produto */}
      <Text
        style={styles.productPrice}
        accessibilityRole="text"
      >
        {product.price}
      </Text>

      {/* Botão para adicionar ao carrinho */}
      <TouchableOpacity
        style={styles.button}
        accessible={true}
        accessibilityLabel="Adicionar ao carrinho"
        accessibilityHint="Adiciona o produto ao carrinho de compras"
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>

      {/* Botão para adicionar aos favoritos */}
      <TouchableOpacity
        style={[styles.button, styles.favoriteButton]}
        accessible={true}
        accessibilityLabel="Adicionar aos favoritos"
        accessibilityHint="Adiciona o produto à lista de favoritos"
        accessibilityRole="button"
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
    resizeMode: 'contain',
    marginBottom: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // Preto para contraste suficiente
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    color: '#333333', // Cinza escuro para contraste suficiente
    marginBottom: 16,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000', // Preto para contraste suficiente
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
    minWidth: 200, // Tamanho mínimo para garantir área de toque adequada
    minHeight: 48, // Tamanho mínimo para garantir área de toque adequada
  },
  favoriteButton: {
    backgroundColor: '#6C757D',
  },
  buttonText: {
    color: '#FFFFFF', // Branco para contraste suficiente
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;