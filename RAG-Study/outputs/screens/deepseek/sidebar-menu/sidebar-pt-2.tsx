import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        //accessibilityRole="heading" valor invalido
        accessible
      >
        Início
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Promotions")}
        accessible
      >
        <Text>Promoções</Text>
      </TouchableOpacity>
    </View>
  );
}

function PromotionsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        //accessibilityRole="heading" valor invalido
        accessible
      >
        Promoções
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Orders")}
        accessible
      >
        <Text>Meus Pedidos</Text>
      </TouchableOpacity>
    </View>
  );
}

function OrdersScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        //accessibilityRole="heading" valor invalido
        accessible
      >
        Meus Pedidos
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Cart")} accessible>
        <Text>Meu Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}

function CartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        //accessibilityRole="heading" valor invalido
        accessible
      >
        Meu Carrinho
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Account")}
        accessible
      >
        <Text>Minha Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

function AccountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        //accessibilityRole="heading" valor invalido
        accessible
      >
        Minha Conta
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Logout")}
        accessible
      >
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

function LogoutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        //accessibilityRole="heading" valor invalido
        accessible
      >
        Sair
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Promotions" component={PromotionsScreen} />
      <Drawer.Screen name="Orders" component={OrdersScreen} />
      <Drawer.Screen name="Cart" component={CartScreen} />
      <Drawer.Screen name="Account" component={AccountScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});
