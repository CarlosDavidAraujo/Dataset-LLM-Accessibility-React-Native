import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

const SidebarMenu = () => {
  const menuItems = [
    { id: 1, label: "Home", screen: "Home" },
    { id: 2, label: "Promotions", screen: "Promotions" },
    { id: 3, label: "My Orders", screen: "Orders" },
    { id: 4, label: "My Cart", screen: "Cart" },
    { id: 5, label: "My Account", screen: "Account" },
    { id: 6, label: "Log Out", screen: "Logout" },
  ];

  const handleMenuItemPress = (screen: string) => {
    // In a real app, you would navigate to the respective screen
    console.log(`Navigating to ${screen}`);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => handleMenuItemPress(item.screen)}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityLabel={item.label}
            accessibilityHint={`Navigates to ${item.label} screen`}
          >
            <Text style={styles.menuItemText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 20,
    width: Dimensions.get("window").width * 0.7, // 70% of screen width
  },
  menuItem: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    minHeight: 48, // Minimum touch target size (48x48)
    justifyContent: "center",
  },
  menuItemText: {
    fontSize: 16,
    color: "#333333", // Dark gray for sufficient contrast (4.6:1 on white)
    fontWeight: "500",
  },
});

export default SidebarMenu;
