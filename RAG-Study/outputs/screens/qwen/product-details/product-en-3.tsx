import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  AccessibilityInfo,
} from "react-native";

const ProductDetailScreen = () => {
  // Mock product data
  const product = {
    id: "1",
    name: "Premium Wireless Headphones",
    description:
      "Experience crystal-clear sound with our premium wireless headphones. Featuring noise cancellation, 30-hour battery life, and comfortable over-ear design for extended listening sessions.",
    price: 199.99,
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

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    AccessibilityInfo.announceForAccessibility(
      `Item ${!isFavorite ? "added to" : "removed from"} favorites`,
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
      accessibilityLabel="Product details screen"
      //accessibilityRole="main" //valor invalido
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.imageUrl }}
          style={styles.productImage}
          accessibilityLabel={`Image of ${product.name}`}
          importantForAccessibility="yes"
        />
      </View>

      <View style={styles.contentContainer}>
        <Text
          style={styles.productName}
          accessibilityRole="header"
          accessible={true}
        >
          {product.name}
        </Text>

        <View style={styles.ratingContainer}>
          <Text style={styles.rating} accessibilityRole="text">
            ★★★★★ ({product.rating})
          </Text>
        </View>

        <Text
          style={styles.price}
          accessibilityRole="text"
          accessibilityLabel={`Price: $${product.price.toFixed(2)}`}
        >
          ${product.price.toFixed(2)}
        </Text>

        <Text
          style={styles.description}
          accessibilityRole="text"
          accessible={true}
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
              style={styles.quantityButton}
              accessibilityLabel="Decrease quantity"
              accessibilityRole="button"
            >
              <Text style={styles.quantityButtonText}>-</Text>
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
              style={styles.quantityButton}
              accessibilityLabel="Increase quantity"
              accessibilityRole="button"
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleAddToCart}
            style={[styles.button, styles.addToCartButton]}
            accessibilityLabel={`Add ${product.name} to cart`}
            accessibilityRole="button"
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleToggleFavorite}
            style={[
              styles.button,
              styles.favoriteButton,
              isFavorite && styles.favorited,
            ]}
            accessibilityLabel={
              isFavorite
                ? `Remove ${product.name} from favorites`
                : `Add ${product.name} to favorites`
            }
            accessibilityRole="button"
            accessibilityState={{ selected: isFavorite }}
          >
            <Text style={styles.buttonText}>
              {isFavorite ? "★ Favorited" : "☆ Add to Favorites"}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.stockContainer} accessibilityRole="text">
          <Text style={product.inStock ? styles.inStock : styles.outOfStock}>
            {product.inStock ? "✓ In Stock" : "✗ Out of Stock"}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  imageContainer: {
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  productImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  contentContainer: {
    padding: 16,
    backgroundColor: "#fff",
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  ratingContainer: {
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    color: "#666",
  },
  price: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 12,
    color: "#e74c3c",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  quantityLabel: {
    fontSize: 18,
    marginRight: 16,
    color: "#333",
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: "#ddd",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  quantityValue: {
    fontSize: 18,
    marginHorizontal: 16,
    minWidth: 30,
    textAlign: "center",
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "column",
    gap: 12,
    marginTop: 10,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  addToCartButton: {
    backgroundColor: "#3498db",
  },
  favoriteButton: {
    backgroundColor: "#95a5a6",
  },
  favorited: {
    backgroundColor: "#f39c12",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  stockContainer: {
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  inStock: {
    fontSize: 16,
    color: "#27ae60",
    fontWeight: "bold",
  },
  outOfStock: {
    fontSize: 16,
    color: "#e74c3c",
    fontWeight: "bold",
  },
});

export default ProductDetailScreen;
