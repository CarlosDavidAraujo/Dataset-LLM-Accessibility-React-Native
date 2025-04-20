import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import Checkbox from "expo-checkbox"; // Using expo-checkbox for a cross-platform checkbox

const TodoListScreen = () => {
  const [todos, setTodos] = useState([
    {
      id: "1",
      task: "Complete Project Report",
      date: "2023-11-15",
      completed: false,
    },
    { id: "2", task: "Grocery Shopping", date: "2023-11-10", completed: true },
    { id: "3", task: "Schedule Meeting", date: "2023-11-12", completed: false },
  ]);

  const toggleTodoCompletion = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      accessibilityRole="button"
      accessibilityLabel={`Task: ${item.task}, Date: ${item.date}, Completed: ${
        item.completed ? "Yes" : "No"
      }`}
      onPress={() => toggleTodoCompletion(item.id)}
    >
      <View style={styles.itemContent}>
        <Checkbox
          style={styles.checkbox}
          value={item.completed}
          onValueChange={() => toggleTodoCompletion(item.id)}
          accessibilityLabel={`Mark ${item.task} as ${
            item.completed ? "incomplete" : "complete"
          }`}
          accessibilityRole="checkbox"
        />
        <View style={styles.textContainer}>
          <Text style={[styles.task, item.completed && styles.completedTask]}>
            {item.task}
          </Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const sortedTodos = [...todos].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedTodos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        accessibilityLabel="Todo List"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    minHeight: 60, // Enforces minimum touch target size
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 16,
    width: 24, // Enforces minimum touch target size
    height: 24, // Enforces minimum touch target size
  },
  textContainer: {
    flex: 1,
  },
  task: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  date: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
});

export default TodoListScreen;
