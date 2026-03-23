import React, { useState } from "react";
import {
  AccessibilityInfo,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ProductDetailScreen = () => {
  // Mock product data
  const product = {
    id: "1",
    name: "Premium Wireless Headphones",
    description:
      "Experience crystal-clear sound with our premium wireless headphones. Featuring noise cancellation, 30-hour battery life, and comfortable over-ear design for extended listening sessions.",
    price: "$199.99",
    imageUrl: "https://example.com/headphones.jpg",
    rating: 4.5,
    inStock: true,
  };

  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    Alert.alert(
      "Added to Cart",
      `${product.name} (${quantity}) added to your cart`,
      [{ text: "OK" }],
    );

    // Announce to screen readers
    AccessibilityInfo.announceForAccessibility(`${product.name} added to cart`);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    const action = !isFavorite ? "added to" : "removed from";
    AccessibilityInfo.announceForAccessibility(
      `${product.name} ${action} favorites`,
    );
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      //accessibilityRole="main"
      accessibilityLabel="Product details screen"
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.imageUrl }}
          style={styles.image}
          accessibilityRole="image"
          accessibilityLabel={`Image of ${product.name}`}
          importantForAccessibility="yes"
        />
      </View>

      <View style={styles.contentContainer}>
        <Text
          style={styles.title}
          accessibilityRole="header"
          accessibilityLevel={1} //prop inexistente
        >
          {product.name}
        </Text>

        <View style={styles.ratingContainer}>
          <Text style={styles.rating} accessibilityRole="text">
            Rating: {product.rating} stars
          </Text>
        </View>

        <Text
          style={styles.price}
          accessibilityRole="text"
          accessibilityLabel={`Price: ${product.price}`}
        >
          {product.price}
        </Text>

        <Text
          style={styles.description}
          accessibilityRole="text"
          accessibilityLabel="Product description"
        >
          {product.description}
        </Text>

        <View style={styles.quantityContainer}>
          <Text style={styles.quantityLabel} accessibilityRole="text">
            Quantity:
          </Text>

          <View style={styles.quantityControls}>
            <TouchableOpacity
              onPress={decreaseQuantity}
              accessibilityRole="button"
              accessibilityLabel="Decrease quantity"
              accessibilityHint="Decreases item quantity by one"
            >
              <View style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
              </View>
            </TouchableOpacity>

            <Text
              style={styles.quantityValue}
              accessibilityRole="text"
              accessibilityLabel={`Current quantity: ${quantity}`}
            >
              {quantity}
            </Text>

            <TouchableOpacity
              onPress={increaseQuantity}
              accessibilityRole="button"
              accessibilityLabel="Increase quantity"
              accessibilityHint="Increases item quantity by one"
            >
              <View style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={toggleFavorite}
            accessibilityRole="button"
            accessibilityState={{ selected: isFavorite }}
            accessibilityLabel={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
            accessibilityHint="Saves this product to your favorites"
            style={[
              styles.favoriteButton,
              isFavorite && styles.favoritedButton,
            ]}
          >
            <Text style={styles.favoriteButtonText}>
              {isFavorite ? "❤️ Favorited" : "♡ Add to Favorites"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleAddToCart}
            accessibilityRole="button"
            accessibilityLabel="Add to cart"
            accessibilityHint="Adds this product to your shopping cart"
            style={styles.cartButton}
            disabled={!product.inStock}
          >
            <Text style={styles.cartButtonText}>
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    marginBottom: 12,
  },
  rating: {
    fontSize: 16,
    color: "#666",
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#e91e63",
    marginVertical: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 20,
  },
  quantityContainer: {
    marginVertical: 20,
  },
  quantityLabel: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  quantityValue: {
    fontSize: 18,
    marginHorizontal: 20,
    minWidth: 30,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
  favoriteButton: {
    padding: 15,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#e91e63",
    alignItems: "center",
    marginBottom: 15,
  },
  favoritedButton: {
    backgroundColor: "#ffebee",
  },
  favoriteButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#e91e63",
  },
  cartButton: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#2196f3",
    alignItems: "center",
  },
  cartButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});

export default ProductDetailScreen;
