import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

const SidebarMenu = () => {
  const handleNavigation = (route) => {
    // Implement navigation logic here (e.g., React Navigation)
    console.log(`Navigating to: ${route}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => handleNavigation("Home")}
          style={styles.menuItem}
          accessible={true}
          accessibilityLabel="Go to Home"
          accessibilityRole="button"
        >
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleNavigation("Promotions")}
          style={styles.menuItem}
          accessible={true}
          accessibilityLabel="View Promotions"
          accessibilityRole="button"
        >
          <Text style={styles.menuText}>Promotions</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleNavigation("MyOrders")}
          style={styles.menuItem}
          accessible={true}
          accessibilityLabel="View My Orders"
          accessibilityRole="button"
        >
          <Text style={styles.menuText}>My Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleNavigation("MyCart")}
          style={styles.menuItem}
          accessible={true}
          accessibilityLabel="View My Cart"
          accessibilityRole="button"
        >
          <Text style={styles.menuText}>My Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleNavigation("MyAccount")}
          style={styles.menuItem}
          accessible={true}
          accessibilityLabel="Go to My Account"
          accessibilityRole="button"
        >
          <Text style={styles.menuText}>My Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleNavigation("LogOut")}
          style={styles.menuItem}
          accessible={true}
          accessibilityLabel="Log Out"
          accessibilityRole="button"
        >
          <Text style={styles.menuText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8", // High contrast background color
  },
  menuContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  menuItem: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: "#ffffff", // High contrast button background color
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  menuText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333333", // Sufficient contrast text color
  },
});

export default SidebarMenu;
