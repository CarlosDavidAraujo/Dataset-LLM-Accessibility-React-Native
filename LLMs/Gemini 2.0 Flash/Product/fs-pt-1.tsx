import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductDetailsScreen = () => {
  const product = {
    name: 'Fone de Ouvido Sem Fio XYZ',
    description:
      'Desfrute de som de alta qualidade com estes fones de ouvido sem fio confortáveis e elegantes.',
    price: 'R$ 199,99',
    imageUrl:
      'https://exemplo.com/fone-de-ouvido-sem-fio-xyz.jpg',
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.imageUrl }}
        style={styles.image}
        accessibilityLabel={`Imagem do produto ${product.name}`}
      />

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{product.price}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          accessibilityLabel={`Adicionar ${product.name} ao carrinho`}
        >
          <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          accessibilityLabel={`Adicionar ${product.name} aos favoritos`}
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
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // Contraste adequado
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#333333', // Contraste adequado
    marginBottom: 16,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#006600', // Contraste adequado
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#007AFF', // Cor de fundo com contraste adequado
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 48, // Tamanho mínimo do alvo de toque
    minHeight: 48, // Tamanho mínimo do alvo de toque
  },
  buttonText: {
    color: '#FFFFFF', // Contraste adequado
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailsScreen;