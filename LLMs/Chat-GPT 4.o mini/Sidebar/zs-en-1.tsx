import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SidebarMenu = () => {
  const navigation = useNavigation();

  const menuItems = [
    { title: "Home", screen: "Home" },
    { title: "Promotions", screen: "Promotions" },
    { title: "My Orders", screen: "Orders" },
    { title: "My Cart", screen: "Cart" },
    { title: "My Account", screen: "Account" },
    { title: "Log Out", screen: "LogOut" },
  ];

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => handleNavigation(item.screen)}
          accessible={true}
          accessibilityLabel={item.title}
          accessibilityRole="button"
          accessibilityHint={`Navigates to the ${item.title} screen`}
        >
          <Text style={styles.menuText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
    alignItems: "flex-start",
    minWidth: 200, // Ensure adequate touch target size
    height: 60, // Sufficient height for touch targets
  },
  menuText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333", // Ensuring sufficient contrast against the background
  },
});

export default SidebarMenu;
