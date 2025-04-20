import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";

const TaskListScreen = () => {
  const tasks = [
    {
      id: "1",
      text: "Comprar mantimentos",
      date: "2023-11-15",
      completed: false,
    },
    {
      id: "2",
      text: "Ligar para o médico",
      date: "2023-11-20",
      completed: true,
    },
    {
      id: "3",
      text: "Passear com o cachorro",
      date: "2023-11-18",
      completed: false,
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      accessibilityRole="button"
      accessibilityLabel={`Tarefa: ${item.text}, Concluída: ${
        item.completed ? "Sim" : "Não"
      }, Data: ${item.date}`}
      onPress={() => {}} // Lógica para alternar a conclusão da tarefa
    >
      <View style={styles.itemContent}>
        <View style={styles.checkbox}>
          {item.completed && <View style={styles.checkboxChecked} />}
        </View>
        <View style={styles.taskDetails}>
          <Text style={styles.taskText}>{item.text}</Text>
          <Text style={styles.taskDate}>{item.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks.sort((a, b) => new Date(b.date) - new Date(a.date))}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    minHeight: 48, // Tamanho mínimo de destino de toque
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#000",
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    width: 16,
    height: 16,
    backgroundColor: "#000",
  },
  taskDetails: {
    flex: 1,
  },
  taskText: {
    fontSize: 16,
    color: "#000", // Contraste suficiente
  },
  taskDate: {
    fontSize: 14,
    color: "#555", // Contraste suficiente
  },
});

export default TaskListScreen;
