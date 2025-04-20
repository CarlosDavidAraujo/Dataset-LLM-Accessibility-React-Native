import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const tarefas = [
  { id: "1", texto: "Comprar mantimentos", data: "2023-11-15" },
  { id: "2", texto: "Ligar para o médico", data: "2023-11-10" },
  { id: "3", texto: "Pagar conta de luz", data: "2023-11-05" },
];

const ItemTarefa = ({ texto, data, onToggle }) => (
  <TouchableOpacity
    style={styles.item}
    accessibilityRole="button"
    accessibilityLabel={`Tarefa: ${texto}, Data: ${data}`}
    onPress={onToggle}
  >
    <View style={styles.tarefaContainer}>
      <View style={styles.checkbox} />
      <View>
        <Text style={styles.texto}>{texto}</Text>
        <Text style={styles.data}>{data}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const ListaTarefas = () => {
  const renderItem = ({ item }) => (
    <ItemTarefa texto={item.texto} data={item.data} onToggle={() => {}} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tarefas.sort((a, b) => new Date(b.data) - new Date(a.data))}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tarefaContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "#000",
    marginRight: 10,
  },
  texto: {
    fontSize: 16,
    color: "#000", // Contraste adequado
  },
  data: {
    fontSize: 14,
    color: "#333", // Contraste adequado
  },
});

export default ListaTarefas;
