import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const mockProduct = {
  name: "Produto Exemplo",
  description: "Descrição do produto exemplo.",
  price: 199.99,
  image: "https://via.placeholder.com/200",
};

const ProductDetailScreen = () => {
  const product = mockProduct;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name} accessibilityLabel="Nome do Produto">
        {product.name}
      </Text>
      <Text
        style={styles.description}
        accessibilityLabel="Descrição do Produto"
      >
        {product.description}
      </Text>
      <Text style={styles.price} accessibilityLabel="Preço do Produto">
        Preço: ${product.price}
      </Text>
      <Button
        title="Adicionar ao Carrinho"
        onPress={() => alert("Produto adicionado ao carrinho!")}
        accessibilityLabel="Adicionar este produto ao carrinho"
      />
      <Button
        title="Adicionar aos Favoritos"
        onPress={() => alert("Produto adicionado aos favoritos!")}
        accessibilityLabel="Adicionar este produto aos favoritos"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
});

export default ProductDetailScreen;
