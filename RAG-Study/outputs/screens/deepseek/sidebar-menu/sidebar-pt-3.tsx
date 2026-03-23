import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Drawer = createDrawerNavigator();

const ScreenContainer = ({ title }: { title: string }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const HomeScreen = () => <ScreenContainer title="Início" />;
const PromotionsScreen = () => <ScreenContainer title="Promoções" />;
const OrdersScreen = () => <ScreenContainer title="Meus Pedidos" />;
const CartScreen = () => <ScreenContainer title="Meu Carrinho" />;
const AccountScreen = () => <ScreenContainer title="Minha Conta" />;
const LogoutScreen = () => <ScreenContainer title="Sair" />;

const MenuLateral = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#f4511e" },
        headerTintColor: "#fff",
      }}
    >
      <Drawer.Screen
        name="index"
        component={HomeScreen}
        options={{
          title: "Início",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="promotions"
        component={PromotionsScreen}
        options={{
          title: "Promoções",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="gift-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="orders"
        component={OrdersScreen}
        options={{
          title: "Meus Pedidos",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="cart"
        component={CartScreen}
        options={{
          title: "Meu Carrinho",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="account"
        component={AccountScreen}
        options={{
          title: "Minha Conta",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="logout"
        component={LogoutScreen}
        options={{
          title: "Sair",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="log-out-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default MenuLateral;
