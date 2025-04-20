import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ProductDetailsScreen = () => {
  const product = {
    name: 'Fone de ouvido sem fio',
    description: 'Experimente a liberdade do áudio sem fio com estes fones de ouvido confortáveis e de alta qualidade.',
    price: 99.99,
    imageUrl: 'https://m.media-amazon.com/images/I/51n+Wf825oL._AC_SL1500_.jpg',
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} accessibilityRole="image" accessibilityLabel={`Imagem do produto: ${product.name}`} />
      <View style={styles.details}>
        <Text style={styles.name} accessibilityRole="header" aria-level="2">{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} accessibilityRole="button" accessibilityLabel="Adicionar ao carrinho" onPress={() => { }}>
            <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} accessibilityRole="button" accessibilityLabel="Adicionar aos favoritos" onPress={() => { }}>
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
    resizeMode: 'cover',
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
    lineHeight: 24,
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
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    minWidth: '40%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProductDetailsScreen;