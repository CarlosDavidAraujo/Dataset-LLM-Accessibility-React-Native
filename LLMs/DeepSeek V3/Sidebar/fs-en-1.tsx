import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SidebarMenu = () => {
  const menuItems = [
    { label: "Home", icon: "🏠", a11yLabel: "Navigate to Home" },
    { label: "Promotions", icon: "🎉", a11yLabel: "View current promotions" },
    { label: "My Orders", icon: "📦", a11yLabel: "View your order history" },
    { label: "My Cart", icon: "🛒", a11yLabel: "View your shopping cart" },
    {
      label: "My Account",
      icon: "👤",
      a11yLabel: "Manage your account settings",
    },
    { label: "Log Out", icon: "🚪", a11yLabel: "Sign out of your account" },
  ];

  return (
    <View style={styles.container} accessibilityRole="menu">
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          accessibilityLabel={item.a11yLabel}
          accessibilityRole="menuitem"
          activeOpacity={0.7}
        >
          <Text style={styles.icon}>{item.icon}</Text>
          <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    paddingVertical: 16,
    width: 250,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    minHeight: 48, // Minimum touch target size
  },
  icon: {
    fontSize: 20,
    marginRight: 16,
    color: "#000000", // High contrast with white background
  },
  label: {
    fontSize: 16,
    color: "#000000", // High contrast with white background
    fontWeight: "500",
  },
});

export default SidebarMenu;
