import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SidebarMenu = () => {
  const menuItems = [
    { label: "Home", accessibilityLabel: "Navigate to the Home page" },
    { label: "Promotions", accessibilityLabel: "View current promotions" },
    { label: "My Orders", accessibilityLabel: "View your order history" },
    {
      label: "My Cart",
      accessibilityLabel: "View items in your shopping cart",
    },
    { label: "My Account", accessibilityLabel: "Manage your account settings" },
    { label: "Log Out", accessibilityLabel: "Log out of your account" },
  ];

  return (
    <View style={styles.container}>
      {menuItems.map((item) => (
        <TouchableOpacity
          key={item.label}
          style={styles.menuItem}
          accessibilityLabel={item.accessibilityLabel}
        >
          <Text style={styles.menuText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF", // White background for good contrast
    padding: 16,
  },
  menuItem: {
    minWidth: 48, // Minimum touch target width
    minHeight: 48, // Minimum touch target height
    padding: 12, // Padding for visual spacing and larger touch target
    marginBottom: 8, // Space between menu items
    justifyContent: "center",
  },
  menuText: {
    color: "#000000", // Black text for good contrast
    fontSize: 16,
  },
});

export default SidebarMenu;
