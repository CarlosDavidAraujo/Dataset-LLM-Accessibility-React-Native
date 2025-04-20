import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const SidebarMenu = () => {
  return (
    <View style={styles.container}>
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
  container: {
    flex: 1,
    backgroundColor: "#333333", // Dark background for better contrast
    padding: 20,
  },
  menuItem: {
    minWidth: 48,
    minHeight: 48, // Ensures the touch target is large enough
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 8,
    justifyContent: "center",
    borderRadius: 4,
  },
  menuText: {
    fontSize: 16,
    color: "#FFFFFF", // White text for better contrast
  },
});

export default SidebarMenu;
