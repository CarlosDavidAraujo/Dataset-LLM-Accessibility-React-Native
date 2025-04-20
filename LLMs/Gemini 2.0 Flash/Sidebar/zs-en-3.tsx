import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
} from 'react-native';

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(true); // Assume it's open for this example

  const menuItems = [
    { label: 'Home', action: () => console.log('Home pressed') },
    { label: 'Promotions', action: () => console.log('Promotions pressed') },
    { label: 'My Orders', action: () => console.log('My Orders pressed') },
    { label: 'My Cart', action: () => console.log('My Cart pressed') },
    { label: 'My Account', action: () => console.log('My Account pressed') },
    { label: 'Log Out', action: () => console.log('Log Out pressed') },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      {isOpen && (
        <View style={styles.sidebar}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={item.action}
              accessibilityRole="button"
              accessibilityLabel={item.label}
              accessible={true}
              accessibilityHint={`Navigates to ${item.label} page.`}
            >
              <Text style={styles.menuText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  sidebar: {
    backgroundColor: '#333',
    width: 250,
    paddingTop: Platform.OS === 'android' ? 25 : 0, // Adjust padding for Android status bar
  },
  menuItem: {
    padding: 16,
    minHeight: 48, // Minimum touch target size
    justifyContent: 'center',
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    // Ensure sufficient contrast. Example: Contrast ratio of at least 4.5:1
  },
});

export default SidebarMenu;