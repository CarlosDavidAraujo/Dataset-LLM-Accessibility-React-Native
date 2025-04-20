import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";

const SidebarMenu = () => {
  const handleNavigation = (screen) => {
    // Placeholder for actual navigation logic
    console.log(`Navigating to: ${screen}`);
  };

  return (
    <View style={styles.sidebar}>
      <Text style={styles.header}>E-Commerce Menu</Text>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleNavigation("Home")}
        accessibilityLabel="Go to Home"
        accessibilityHint="Navigates to the Home screen"
        accessible
      >
        <Text style={styles.menuItemText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleNavigation("Promotions")}
        accessibilityLabel="Go to Promotions"
        accessibilityHint="Navigates to the Promotions page"
        accessible
      >
        <Text style={styles.menuItemText}>Promotions</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleNavigation("MyOrders")}
        accessibilityLabel="Go to My Orders"
        accessibilityHint="Navigates to the Orders page"
        accessible
      >
        <Text style={styles.menuItemText}>My Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleNavigation("MyCart")}
        accessibilityLabel="Go to My Cart"
        accessibilityHint="Navigates to the Cart page"
        accessible
      >
        <Text style={styles.menuItemText}>My Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleNavigation("MyAccount")}
        accessibilityLabel="Go to My Account"
        accessibilityHint="Navigates to the Account settings"
        accessible
      >
        <Text style={styles.menuItemText}>My Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleNavigation("LogOut")}
        accessibilityLabel="Log Out"
        accessibilityHint="Logs out of the account"
        accessible
      >
        <Text style={styles.menuItemText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "#007BFF",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#0056b3",
  },
  menuItemText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
});

export default SidebarMenu;
