import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SidebarMenu = () => {
  const menuItems = [
    { label: "Home", a11yLabel: "Navigate to Home" },
    { label: "Promotions", a11yLabel: "View current promotions" },
    { label: "My Orders", a11yLabel: "View your order history" },
    { label: "My Cart", a11yLabel: "View your shopping cart" },
    { label: "My Account", a11yLabel: "Manage your account settings" },
    { label: "Log Out", a11yLabel: "Sign out of your account" },
  ];

  return (
    <View style={styles.container} accessibilityRole="menu">
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          accessibilityRole="menuitem"
          accessibilityLabel={item.a11yLabel}
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
    width: 200,
  },
  menuItem: {
    minHeight: 48, // Minimum touch target size
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: "center",
  },
  menuText: {
    color: "#000000", // High contrast against white background
    fontSize: 16,
    fontWeight: "500",
  },
});

export default SidebarMenu;
