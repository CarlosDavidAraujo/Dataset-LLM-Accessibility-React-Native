import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import navigation hook

const { width } = Dimensions.get("window");

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation(); // Get navigation object

  const menuItems = [
    { label: "Home", route: "Home" },
    { label: "Promotions", route: "Promotions" },
    { label: "My Orders", route: "MyOrders" },
    { label: "My Cart", route: "MyCart" },
    { label: "My Account", route: "MyAccount" },
    { label: "Log Out", route: "Logout" },
  ];

  const handleNavigate = (route) => {
    navigation.navigate(route);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (!isOpen) {
    return (
      <TouchableOpacity
        style={styles.openButton}
        onPress={toggleMenu}
        accessibilityRole="button"
        accessibilityLabel="Open Menu"
        accessibilityHint="Opens the sidebar menu"
      >
        <Text style={styles.openButtonText}>Menu</Text>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.overlay}>
      <View style={styles.sidebar}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.label}
            style={styles.menuItem}
            onPress={() => handleNavigate(item.route)}
            accessibilityRole="button"
            accessibilityLabel={item.label}
            accessibilityHint={`Navigates to ${item.label} page`}
          >
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.closeButton}
          onPress={toggleMenu}
          accessibilityRole="button"
          accessibilityLabel="Close Menu"
          accessibilityHint="Closes the sidebar menu"
        >
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  sidebar: {
    width: width * 0.7,
    height: "100%",
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    minHeight: 48,
    justifyContent: "center",
  },
  menuText: {
    fontSize: 18,
    color: "#333",
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 15,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    minHeight: 48,
    justifyContent: "center",
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  openButton: {
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
    alignSelf: "flex-start",
    margin: 10,
    minHeight: 48,
    justifyContent: "center",
  },
  openButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default SidebarMenu;
