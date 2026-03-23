import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SidebarMenu = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        accessibilityLabel="Go to Home"
        accessible={true}
        importantForAccessibility="yes"
      >
        <Text style={styles.item}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Promotions")}
        accessibilityLabel="Go to Promotions"
        accessible={true}
        importantForAccessibility="yes"
      >
        <Text style={styles.item}>Promotions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("MyOrders")}
        accessibilityLabel="Go to My Orders"
        accessible={true}
        importantForAccessibility="yes"
      >
        <Text style={styles.item}>My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("MyCart")}
        accessibilityLabel="Go to My Cart"
        accessible={true}
        importantForAccessibility="yes"
      >
        <Text style={styles.item}>My Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("MyAccount")}
        accessibilityLabel="Go to My Account"
        accessible={true}
        importantForAccessibility="yes"
      >
        <Text style={styles.item}>My Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("LogOut")}
        accessibilityLabel="Log Out"
        accessible={true}
        importantForAccessibility="yes"
      >
        <Text style={styles.item}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  item: {
    fontSize: 18,
    marginVertical: 10,
    color: "black",
    fontWeight: "bold",
  },
});

export default SidebarMenu;
