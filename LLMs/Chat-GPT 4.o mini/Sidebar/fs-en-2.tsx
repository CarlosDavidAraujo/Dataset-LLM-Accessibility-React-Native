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
    backgroundColor: "#2C3E50", // Dark background for high contrast
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  menuItem: {
    minWidth: 48, // Ensure touch target is large enough
    minHeight: 48, // Ensure touch target is large enough
    padding: 10, // Add padding for comfortable tap
    marginBottom: 15, // Space between items
  },
  menuText: {
    color: "#FFFFFF", // High contrast white text
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SidebarMenu;
