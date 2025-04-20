import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SidebarMenu = () => {
  const menuItems = [
    { label: "Home", action: () => console.log("Home pressed") },
    { label: "Promotions", action: () => console.log("Promotions pressed") },
    { label: "My Orders", action: () => console.log("My Orders pressed") },
    { label: "My Cart", action: () => console.log("My Cart pressed") },
    { label: "My Account", action: () => console.log("My Account pressed") },
    { label: "Log Out", action: () => console.log("Log Out pressed") },
  ];

  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={item.action}
          accessibilityLabel={item.label} // Accessibility Label
          accessibilityRole="button" // Accessibility role
        >
          <Text style={styles.menuText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F0F0", // Light background
    paddingVertical: 20,
  },
  menuItem: {
    minHeight: 48, // Minimum touch target height
    minWidth: "100%", // Minimum touch target width
    padding: 12, // Padding for visual spacing and touch target increase
    justifyContent: "center",
  },
  menuText: {
    color: "#000000", // Black text for good contrast
    fontSize: 16,
  },
});

export default SidebarMenu;
