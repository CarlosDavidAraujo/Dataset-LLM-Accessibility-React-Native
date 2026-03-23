import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SidebarMenu: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        accessibilityLabel="Go to Home"
        accessible={true}
        accessibilityRole="button"
      >
        <Text style={styles.item}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Promotions")}
        accessibilityLabel="Go to Promotions"
        accessible={true}
        accessibilityRole="button"
      >
        <Text style={styles.item}>Promotions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("MyOrders")}
        accessibilityLabel="Go to My Orders"
        accessible={true}
        accessibilityRole="button"
      >
        <Text style={styles.item}>My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("MyCart")}
        accessibilityLabel="Go to My Cart"
        accessible={true}
        accessibilityRole="button"
      >
        <Text style={styles.item}>My Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("MyAccount")}
        accessibilityLabel="Go to My Account"
        accessible={true}
        accessibilityRole="button"
      >
        <Text style={styles.item}>My Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("LogOut")}
        accessibilityLabel="Log Out"
        accessible={true}
        accessibilityRole="button"
      >
        <Text style={styles.item}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  item: {
    fontSize: 18,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default SidebarMenu;
