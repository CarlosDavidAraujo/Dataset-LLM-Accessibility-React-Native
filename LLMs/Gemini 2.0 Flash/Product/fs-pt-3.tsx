import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductDetailsScreen = () => {
  const product = {
    imageUrl: 'https://exemplo.com/imagem-produto.jpg',
    name: 'Fone de Ouvido Sem Fio',
    description:
      'Experimente um som imersivo com estes fones de ouvido sem fio de alta qualidade. Desfrute de até 20 horas de reprodução e um design confortável.',
    price: 'R$ 199,99',
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} accessibilityLabel={`Imagem do produto ${product.name}`} />

      <Text style={styles.title}>{product.name}</Text>

      <Text style={styles.description}>{product.description}</Text>

      <Text style={styles.price}>{product.price}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} accessibilityLabel="Adicionar ao carrinho">
          <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} accessibilityLabel="Adicionar aos favoritos">
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
  image: {
    width: '100%',
    height: 300,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 16,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#006600',
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    minWidth: 48,
    minHeight: 48,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default ProductDetailsScreen;