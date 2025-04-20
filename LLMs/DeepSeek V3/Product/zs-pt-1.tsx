import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductDetailScreen = () => {
  // Informações do produto hardcoded
  const product = {
    name: 'Smartphone XYZ',
    description: 'Um smartphone avançado com câmera de 48MP, tela AMOLED de 6.5 polegadas e bateria de 5000mAh.',
    price: 'R$ 2.499,99',
    image: 'https://via.placeholder.com/300', // URL de uma imagem de exemplo
  };

  return (
    <View style={styles.container}>
      {/* Imagem do produto com descrição acessível */}
      <Image
        source={{ uri: product.image }}
        style={styles.productImage}
        accessibilityLabel={`Imagem do produto ${product.name}`}
        accessible={true}
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
        Preço: {product.price}
      </Text>

      {/* Botão para adicionar ao carrinho */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel={`Adicionar ${product.name} ao carrinho`}
        accessibilityRole="button"
        accessibilityHint="Toque duas vezes para adicionar este produto ao carrinho"
        onPress={() => console.log('Adicionar ao carrinho')}
      >
        <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>

      {/* Botão para adicionar aos favoritos */}
      <TouchableOpacity
        style={styles.button}
        accessibilityLabel={`Adicionar ${product.name} aos favoritos`}
        accessibilityRole="button"
        accessibilityHint="Toque duas vezes para adicionar este produto aos favoritos"
        onPress={() => console.log('Adicionar aos Favoritos')}
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
    backgroundColor: '#fff',
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
    color: '#000',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
    minWidth: 44, // Tamanho mínimo para garantir acessibilidade de toque
    minHeight: 44, // Tamanho mínimo para garantir acessibilidade de toque
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;