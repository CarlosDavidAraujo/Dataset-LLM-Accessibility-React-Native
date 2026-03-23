import React from "react";
import { Button, Image, SafeAreaView, StyleSheet, Text } from "react-native";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

type Props = {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (product: Product) => void;
};

const mockProduct = {
  id: 1,
  name: "Sample Product",
  description: "This is a sample product description.",
  price: 99.99,
  imageUrl: "https://via.placeholder.com/200",
};

const ProductDetailScreen: React.FC<Props> = ({
  product = mockProduct,
  onAddToCart = () => console.log("Add to cart"),
  onToggleFavorite = () => console.log("Toggle favorite"),
}) => {
  return (
    <SafeAreaView
      style={styles.container}
      accessibilityLabel="Product Detail Screen"
    >
      <Image
        source={{ uri: product.imageUrl }}
        style={styles.image}
        accessibilityLabel="Product Image"
      />
      <Text style={styles.name} accessibilityLabel="Product Name">
        {product.name}
      </Text>
      <Text style={styles.description} accessibilityLabel="Product Description">
        {product.description}
      </Text>
      <Text style={styles.price} accessibilityLabel="Product Price">
        ${product.price.toFixed(2)}
      </Text>
      <Button
        title="Add to Cart"
        onPress={() => onAddToCart(product)}
        accessibilityLabel="Add to Cart Button"
      />
      <Button
        title="Toggle Favorite"
        onPress={() => onToggleFavorite(product)}
        accessibilityLabel="Toggle Favorite Button"
      />
    </SafeAreaView>
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
    resizeMode: "contain",
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
    color: "green",
    marginBottom: 20,
  },
});

export default ProductDetailScreen;
