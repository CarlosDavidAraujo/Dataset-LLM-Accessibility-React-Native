import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";

const SidebarMenu = () => {
  const menuItems = [
    { id: 1, label: "Home", screen: "Home" },
    { id: 2, label: "Promotions", screen: "Promotions" },
    { id: 3, label: "My Orders", screen: "Orders" },
    { id: 4, label: "My Cart", screen: "Cart" },
    { id: 5, label: "My Account", screen: "Account" },
    { id: 6, label: "Log Out", screen: "Logout" },
  ];

  // Function to handle menu item press
  const handleMenuItemPress = (screen) => {
    // In a real app, you would navigate to the respective screen
    console.log(`Navigating to ${screen}`);
  };

  return (
    <View style={styles.container} accessibilityRole="menu">
      <Text style={styles.menuTitle} accessibilityRole="header">
        Menu
      </Text>
      <View style={styles.menuItemsContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => handleMenuItemPress(item.screen)}
            activeOpacity={0.7}
            accessibilityLabel={item.label}
            accessibilityRole="menuitem"
            accessibilityHint={`Navigates to ${item.label} screen`}
            // Minimum touch target size (44x44) recommended by WCAG
            hitSlop={{
              top: 10,
              bottom: 10,
              left: 10,
              right: 10,
            }}
          >
            <Text style={styles.menuItemText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.7,
    backgroundColor: "#ffffff",
    paddingVertical: 24,
    paddingHorizontal: 16,
    flex: 1,
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000", // High contrast black on white
    marginBottom: 32,
    paddingHorizontal: 8,
  },
  menuItemsContainer: {
    flex: 1,
  },
  menuItem: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 8,
    borderRadius: 8,
    minHeight: 44, // Minimum touch target height
    justifyContent: "center",
  },
  menuItemText: {
    fontSize: 18,
    color: "#333333", // Dark gray for sufficient contrast (4.6:1 on white)
    fontWeight: Platform.OS === "ios" ? "500" : "normal",
  },
});

export default SidebarMenu;
