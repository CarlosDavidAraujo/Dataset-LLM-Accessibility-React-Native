import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ECommerceSidebarMenu = () => {
  const menuItems = [
    { label: "Home", accessibilityLabel: "Navigate to the home page" },
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
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
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
    backgroundColor: "#F0F0F0", // Light background for good contrast
    paddingVertical: 20,
  },
  menuItem: {
    minWidth: 48, // Minimum touch target size
    minHeight: 48,
    padding: 12, // Padding for visual spacing and touch target expansion
    justifyContent: "center",
  },
  menuText: {
    color: "#000000", // Dark text for good contrast
    fontSize: 16, // Adequate font size
  },
});

export default ECommerceSidebarMenu;
