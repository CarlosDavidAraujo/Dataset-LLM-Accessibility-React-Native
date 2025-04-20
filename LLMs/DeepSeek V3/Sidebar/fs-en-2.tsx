import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const EcommerceSidebarMenu = () => {
  const menuItems = [
    { label: "Home", accessibilityLabel: "Navigate to Home page" },
    {
      label: "Promotions",
      accessibilityLabel: "View current promotions and discounts",
    },
    {
      label: "My Orders",
      accessibilityLabel: "View your order history and status",
    },
    {
      label: "My Cart",
      accessibilityLabel: "View items in your shopping cart",
    },
    { label: "My Account", accessibilityLabel: "Access your account settings" },
    { label: "Log Out", accessibilityLabel: "Sign out of your account" },
  ];

  return (
    <View style={styles.container} accessibilityRole="menu">
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          accessibilityLabel={item.accessibilityLabel}
          accessibilityRole="menuitem"
          activeOpacity={0.7}
        >
          <Text style={styles.menuText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    width: 250,
  },
  menuItem: {
    minHeight: 48,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  menuText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default EcommerceSidebarMenu;
