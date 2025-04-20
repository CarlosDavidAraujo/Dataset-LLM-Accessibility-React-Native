import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import Checkbox from "expo-checkbox"; // For checkbox functionality

const TodoListScreen = () => {
  const [todos, setTodos] = useState([
    { id: "1", task: "Complete Project", date: "2023-11-15", completed: false },
    { id: "2", task: "Buy Groceries", date: "2023-11-10", completed: true },
    { id: "3", task: "Call Doctor", date: "2023-11-12", completed: false },
    { id: "4", task: "Study for Exam", date: "2023-11-18", completed: false },
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
          accessibilityLabel={
            item.completed ? "Mark task as incomplete" : "Mark task as complete"
          }
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

  const sortedTodos = todos
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <View style={styles.container} accessibilityLabel="Todo List Screen">
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
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    minHeight: 60, // Ensure adequate touch target size
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 15,
    height: 24, // Ensure adequate touch target size
    width: 24, // Ensure adequate touch target size
  },
  textContainer: {
    flex: 1,
  },
  task: {
    fontSize: 18,
    color: "#333", // Sufficient contrast
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  date: {
    fontSize: 14,
    color: "#666", // Sufficient contrast
  },
});

export default TodoListScreen;
