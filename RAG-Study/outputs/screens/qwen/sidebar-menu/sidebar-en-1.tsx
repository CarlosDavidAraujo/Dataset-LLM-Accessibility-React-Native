import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const SidebarMenu = () => {
  const handleNavigate = (screen: string) => {
    Alert.alert(`Navigating to ${screen}`);
    // Navigation logic would go here
  };

  const handleLogout = () => {
    Alert.alert('Logging out');
    // Logout logic would go here
  };

  const menuItems = [
    { id: 'home', title: 'Home', icon: '🏠' },
    { id: 'promotions', title: 'Promotions', icon: '🏷️' },
    { id: 'orders', title: 'My Orders', icon: '📦' },
    { id: 'cart', title: 'My Cart', icon: '🛒' },
    { id: 'account', title: 'My Account', icon: '👤' },
  ];

  return (
    <View style={styles.container} accessibilityRole="menu">
      <Text style={styles.header} accessibilityRole="header">Main Menu</Text>
      
      {menuItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.menuItem}
          onPress={() => handleNavigate(item.title)}
          accessibilityRole="menuitem"
          accessibilityLabel={`${item.title} navigation item`}
          accessibilityHint={`Navigates to ${item.title} screen`}
        >
          <Text style={styles.icon}>{item.icon}</Text>
          <Text style={styles.menuText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
      
      <TouchableOpacity
        style={[styles.menuItem, styles.logoutButton]}
        onPress={handleLogout}
        accessibilityRole="button"
        accessibilityLabel="Log out button"
        accessibilityHint="Logs you out of the application"
      >
        <Text style={styles.icon}>🚪</Text>
        <Text style={styles.menuText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical: 40,
    paddingHorizontal: 20,
    width: '100%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  logoutButton: {
    marginTop: 'auto',
    backgroundColor: '#ffebee',
  },
  icon: {
    fontSize: 20,
    marginRight: 15,
  },
  menuText: {
    fontSize: 18,
    color: '#333',
  },
});

export default SidebarMenu;
