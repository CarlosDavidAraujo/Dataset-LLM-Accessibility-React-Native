import React from "react";
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Define the types for the props
interface ProductDetailProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const mockProduct = {
  name: "Sample Product",
  description: "This is a sample product description.",
  price: 99.99,
  imageUrl: "https://via.placeholder.com/200",
};

const ProductDetailScreen: React.FC<ProductDetailProps> = ({
  name = mockProduct.name,
  description = mockProduct.description,
  price = mockProduct.price,
  imageUrl = mockProduct.imageUrl,
}) => {
  return (
    <SafeAreaView
      style={styles.container}
      accessible={true}
      accessibilityLabel="Product Detail Screen"
    >
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>${price}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Add to Cart"
          onPress={() => alert("Added to cart!")}
          accessibilityLabel="Add to Cart button"
        />
        <Button
          title="Favorite"
          onPress={() => alert("Added to favorites!")}
          accessibilityLabel="Add to Favorites button"
        />
      </View>
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
    width: "100%",
    height: 300,
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
    fontSize: 20,
    color: "green",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});

export default ProductDetailScreen;
