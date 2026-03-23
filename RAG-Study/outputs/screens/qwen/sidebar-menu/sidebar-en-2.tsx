import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type MenuItem = {
  id: string;
  label: string;
  accessibilityRole?: string;
  accessibilityHint?: string;
};

const SidebarMenu = () => {
  const handleNavigation = (screen: string) => {
    Alert.alert(`Navigating to ${screen}`);
    // In a real app, you would use navigation.navigate(screen)
  };

  const handleLogout = () => {
    Alert.alert("Logging out", "Are you sure you want to log out?", [
      { text: "Cancel", style: "cancel" },
      { text: "Log Out", onPress: () => console.log("Logged out") },
    ]);
  };

  const menuItems: MenuItem[] = [
    { id: "home", label: "Home", accessibilityRole: "link" },
    { id: "promotions", label: "Promotions", accessibilityRole: "link" },
    { id: "orders", label: "My Orders", accessibilityRole: "link" },
    {
      id: "cart",
      label: "My Cart",
      accessibilityRole: "link",
      accessibilityHint: "View items in your shopping cart",
    },
    { id: "account", label: "My Account", accessibilityRole: "link" },
    {
      id: "logout",
      label: "Log Out",
      accessibilityRole: "button",
      accessibilityHint: "Sign out of your account",
    },
  ];

  return (
    <View style={styles.container} accessibilityRole="menu" accessible={true}>
      <Text style={styles.title} accessibilityRole="header">
        Main Menu
      </Text>

      {menuItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.menuItem}
          onPress={() =>
            item.id === "logout" ? handleLogout() : handleNavigation(item.label)
          }
          accessibilityRole={item.accessibilityRole}
          accessibilityHint={item.accessibilityHint}
          accessibilityState={{ disabled: false }}
          accessible={true}
        >
          <Text style={styles.menuText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRightWidth: 1,
    borderRightColor: "#ddd",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  menuItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  menuText: {
    fontSize: 18,
    color: "#333",
  },
});

export default SidebarMenu;
