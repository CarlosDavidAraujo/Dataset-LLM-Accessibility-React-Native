import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

const TodoListScreen = () => {
  const [tasks, setTasks] = useState([
    { id: "1", task: "Buy groceries", date: "2025-03-25", completed: false },
    {
      id: "2",
      task: "Complete React Native project",
      date: "2025-03-26",
      completed: false,
    },
    {
      id: "3",
      task: "Attend team meeting",
      date: "2025-03-27",
      completed: true,
    },
  ]);

  // Sort tasks in descending order by date
  const sortedTasks = tasks.sort((a, b) => new Date(b.date) - new Date(a.date));

  const handleToggle = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>
      <FlatList
        data={sortedTasks}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel={`Toggle task ${item.task} completed state`}
              onPress={() => handleToggle(item.id)}
              style={styles.checkboxContainer}
              accessibilityRole="checkbox"
              // accessible={true}
            >
              <Checkbox
                value={item.completed}
                onValueChange={() => handleToggle(item.id)}
                accessibilityLabel={`Task ${item.task} is ${
                  item.completed ? "completed" : "not completed"
                }`}
              />
            </TouchableOpacity>
            <View style={styles.taskDetails}>
              <Text
                style={[
                  styles.taskText,
                  { color: item.completed ? "#8e8e8e" : "#000" }, // Ensure sufficient contrast for text
                ]}
                accessibilityRole="text"
              >
                {item.task}
              </Text>
              <Text style={styles.dateText}>{item.date}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  checkboxContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  taskDetails: {
    flex: 1,
    marginLeft: 10,
  },
  taskText: {
    fontSize: 16,
    fontWeight: "normal",
  },
  dateText: {
    fontSize: 12,
    color: "#888",
  },
});

export default TodoListScreen;
