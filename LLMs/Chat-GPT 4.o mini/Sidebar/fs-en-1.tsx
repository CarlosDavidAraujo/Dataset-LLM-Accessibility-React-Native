import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const SidebarMenu = () => {
  return (
    <View style={styles.sidebar}>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Promotions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>My Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>My Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>My Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    paddingLeft: 20,
  },
  menuItem: {
    minWidth: 48, // Ensures minimum touch target size of 48x48
    minHeight: 48, // Minimum touch height for accessibility
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    justifyContent: "center",
  },
  menuText: {
    fontSize: 16,
    color: "#000000", // Ensures sufficient contrast with white background
    fontWeight: "500",
  },
});

export default SidebarMenu;
