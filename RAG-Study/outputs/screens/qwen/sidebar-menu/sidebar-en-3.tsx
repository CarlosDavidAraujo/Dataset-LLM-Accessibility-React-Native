import { useRouter } from "expo-router";
import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SidebarMenu = () => {
  const router = useRouter();

  const handleNavigate = (screen: string, label: string) => {
    switch (screen) {
      case "home":
        router.push("/home");
        break;
      case "promotions":
        router.push("/promotions");
        break;
      case "orders":
        router.push("/orders");
        break;
      case "cart":
        router.push("/cart");
        break;
      case "account":
        router.push("/account");
        break;
      case "logout":
        Alert.alert("Log Out", "Are you sure you want to log out?", [
          { text: "Cancel", style: "cancel" },
          { text: "Log Out", onPress: () => router.replace("/login") },
        ]);
        break;
      default:
        break;
    }
  };

  const menuItems = [
    { id: "home", label: "Home", screen: "home" },
    { id: "promotions", label: "Promotions", screen: "promotions" },
    { id: "orders", label: "My Orders", screen: "orders" },
    { id: "cart", label: "My Cart", screen: "cart" },
    { id: "account", label: "My Account", screen: "account" },
    { id: "logout", label: "Log Out", screen: "logout" },
  ];

  return (
    <View style={styles.container} accessibilityRole="menu">
      <Text style={styles.title} accessibilityRole="header">
        Main Menu
      </Text>

      {menuItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.menuItem}
          onPress={() => handleNavigate(item.screen, item.label)}
          accessibilityRole={item.id === "logout" ? "button" : "link"}
          accessibilityLabel={item.label}
          accessibilityHint={
            item.id === "logout"
              ? "Logs you out of the application"
              : `Navigates to ${item.label} screen`
          }
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
    borderRightColor: "#e0e0e0",
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
