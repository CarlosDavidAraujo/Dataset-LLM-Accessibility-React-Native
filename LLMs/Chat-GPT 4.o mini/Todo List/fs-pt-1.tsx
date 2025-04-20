import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
} from "react-native";

const tasks = [
  { id: "1", task: "Revisar relatórios", date: "2025-03-27", completed: false },
  { id: "2", task: "Comprar mantimentos", date: "2025-03-26", completed: true },
  { id: "3", task: "Lavar roupa", date: "2025-03-25", completed: false },
];

const TaskListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <FlatList
        data={tasks.sort((a, b) => new Date(b.date) - new Date(a.date))}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <TouchableOpacity
              style={styles.checkBoxContainer}
              onPress={() => console.log(`Tarefa ${item.id} marcada!`)}
            >
              <Text style={styles.checkBox}>{item.completed ? "✓" : "○"}</Text>
            </TouchableOpacity>

            <View style={styles.taskInfo}>
              <Text style={styles.taskText}>{item.task}</Text>
              <Text style={styles.dateText}>{item.date}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 16,
  },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#F8F8F8",
    padding: 12,
    borderRadius: 8,
  },
  checkBoxContainer: {
    minWidth: 40,
    minHeight: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    borderRadius: 4,
    backgroundColor: "#E1E1E1",
  },
  checkBox: {
    fontSize: 24,
    color: "#000000",
  },
  taskInfo: {
    flex: 1,
  },
  taskText: {
    fontSize: 18,
    color: "#000000",
  },
  dateText: {
    fontSize: 14,
    color: "#555555",
  },
});

export default TaskListScreen;
