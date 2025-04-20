import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const tasks = [
  { id: "1", task: "Comprar leite", date: "2025-03-27", completed: false },
  {
    id: "2",
    task: "Estudar React Native",
    date: "2025-03-26",
    completed: true,
  },
  { id: "3", task: "Limpar a casa", date: "2025-03-25", completed: false },
];

const TaskListScreen = () => {
  const [taskList, setTaskList] = useState(tasks);

  const handleCheckboxChange = (id) => {
    const updatedTasks = taskList.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedTasks);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => handleCheckboxChange(item.id)}
        accessible={true}
        accessibilityLabel={`Marcar tarefa: ${item.task}`}
        accessibilityRole="button"
        accessibilityState={{ checked: item.completed }}
      >
        <Checkbox
          value={item.completed}
          onValueChange={() => handleCheckboxChange(item.id)}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text
          style={styles.taskText}
          accessible={true}
          accessibilityLabel={`Tarefa: ${item.task}`}
        >
          {item.task}
        </Text>
        <Text
          style={styles.dateText}
          accessible={true}
          accessibilityLabel={`Data: ${item.date}`}
        >
          {item.date}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={taskList.sort((a, b) => new Date(b.date) - new Date(a.date))} // Ordenar por data decrescente
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        accessibilityLabel="Lista de tarefas"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#f5f5f5",
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 8,
    elevation: 2, // Sombra para Android
    shadowColor: "#000", // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  checkboxContainer: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: 18,
    color: "#333",
    fontWeight: "600",
  },
  dateText: {
    fontSize: 14,
    color: "#777",
  },
});

export default TaskListScreen;
