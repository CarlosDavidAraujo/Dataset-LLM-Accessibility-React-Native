import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(true); // Always open for demonstration
  const insets = useSafeAreaInsets();

  const menuItems = [
    { label: "Home", action: () => console.log("Home pressed") },
    { label: "Promotions", action: () => console.log("Promotions pressed") },
    { label: "My Orders", action: () => console.log("My Orders pressed") },
    { label: "My Cart", action: () => console.log("My Cart pressed") },
    { label: "My Account", action: () => console.log("My Account pressed") },
    { label: "Log Out", action: () => console.log("Log Out pressed") },
  ];

  if (!isOpen) {
    return null; // Or return a button to open the sidebar
  }

  return (
    <SafeAreaView
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <View style={styles.menu}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={item.action}
            accessibilityRole="button"
            accessibilityLabel={item.label}
            accessibilityHint={`Navigates to ${item.label}`}
          >
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 250,
    backgroundColor: "#333",
    height: "100%",
    zIndex: 1000,
    paddingTop: Platform.OS === "android" ? 25 : 0, //handle android status bar issue.
  },
  menu: {
    padding: 10,
  },
  menuItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#555",
    minHeight: 48, // Minimum touch target size
  },
  menuText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default SidebarMenu;
