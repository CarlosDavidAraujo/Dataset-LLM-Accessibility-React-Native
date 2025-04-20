import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

const ECommerceSidebar = () => {
  // Menu items data
  const menuItems = [
    { id: 1, label: "Home", icon: "🏠" },
    { id: 2, label: "Promotions", icon: "🎉" },
    { id: 3, label: "My Orders", icon: "📦" },
    { id: 4, label: "My Cart", icon: "🛒" },
    { id: 5, label: "My Account", icon: "👤" },
    { id: 6, label: "Log Out", icon: "🚪" },
  ];

  const handleMenuItemPress = (itemLabel: string) => {
    console.log(`${itemLabel} pressed`);
    // In a real app, you would navigate to the appropriate screen here
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => handleMenuItemPress(item.label)}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityLabel={item.label}
            accessibilityHint={`Navigates to ${item.label} screen`}
          >
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const { width } = Dimensions.get("window");
const SIDEBAR_WIDTH = width * 0.7;
const MIN_TOUCH_TARGET_SIZE = 48;

const styles = StyleSheet.create({
  container: {
    width: SIDEBAR_WIDTH,
    backgroundColor: "#ffffff",
    paddingVertical: 16,
    height: "100%",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    minHeight: MIN_TOUCH_TARGET_SIZE,
  },
  icon: {
    fontSize: 20,
    marginRight: 16,
    color: "#333333", // Dark color for sufficient contrast
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333333", // Dark color for sufficient contrast (4.5:1 ratio on white)
  },
});

export default ECommerceSidebar;
