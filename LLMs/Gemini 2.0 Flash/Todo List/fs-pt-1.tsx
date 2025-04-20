import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

const tarefas = [
  {
    id: "1",
    tarefa: "Comprar mantimentos",
    data: "2023-11-10",
    concluida: false,
  },
  { id: "2", tarefa: "Pagar contas", data: "2023-11-15", concluida: true },
  {
    id: "3",
    tarefa: "Ligar para o médico",
    data: "2023-11-20",
    concluida: false,
  },
];

const TarefaItem = ({ item, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={() => onPress(item.id)}>
    <TouchableOpacity
      style={styles.checkbox}
      onPress={() => onPress(item.id)}
      accessibilityLabel={`Marcar tarefa ${item.tarefa} como ${
        item.concluida ? "não concluída" : "concluída"
      }`}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: item.concluida }}
    >
      {item.concluida && <View style={styles.checkboxInner} />}
    </TouchableOpacity>
    <View style={styles.tarefaTextoContainer}>
      <Text style={styles.tarefaTexto} accessibilityLabel={item.tarefa}>
        {item.tarefa}
      </Text>
      <Text
        style={styles.dataTexto}
        accessibilityLabel={`Data da tarefa: ${item.data}`}
      >
        {item.data}
      </Text>
    </View>
  </TouchableOpacity>
);

const ListaTarefas = () => {
  const handleTarefaPress = (id) => {
    // Lógica para marcar a tarefa como concluída/não concluída
    console.log(`Tarefa ${id} pressionada`);
  };

  return (
    <FlatList
      data={tarefas.sort((a, b) => new Date(b.data) - new Date(a.data))}
      renderItem={({ item }) => (
        <TarefaItem item={item} onPress={handleTarefaPress} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    minHeight: 48, // Tamanho mínimo para o alvo de toque
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#000",
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 48, // Tamanho mínimo para o alvo de toque
    minHeight: 48, // Tamanho mínimo para o alvo de toque
  },
  checkboxInner: {
    width: 16,
    height: 16,
    backgroundColor: "#000",
  },
  tarefaTextoContainer: {
    flex: 1,
  },
  tarefaTexto: {
    fontSize: 16,
    color: "#000", // Contraste adequado
  },
  dataTexto: {
    fontSize: 14,
    color: "#333", // Contraste adequado
  },
});

export default ListaTarefas;
