import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform,
  AccessibilityInfo,
} from "react-native";
import { CheckBox } from "react-native-elements";

const TodoListScreen = () => {
  // Initial todo items with dates in descending order
  const [todos, setTodos] = useState([
    {
      id: "1",
      task: "Complete project documentation",
      completed: false,
      date: new Date(2023, 5, 15),
      dueText: "Due June 15, 2023",
    },
    {
      id: "2",
      task: "Schedule team meeting",
      completed: true,
      date: new Date(2023, 5, 10),
      dueText: "Due June 10, 2023",
    },
    {
      id: "3",
      task: "Review pull requests",
      completed: false,
      date: new Date(2023, 4, 28),
      dueText: "Due May 28, 2023",
    },
    {
      id: "4",
      task: "Update dependencies",
      completed: false,
      date: new Date(2023, 4, 20),
      dueText: "Due May 20, 2023",
    },
  ]);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const renderItem = ({ item }) => (
    <View
      style={styles.todoItem}
      accessible={true}
      accessibilityLabel={`${item.task}, ${item.dueText}, ${
        item.completed ? "completed" : "not completed"
      }`}
    >
      <CheckBox
        checked={item.completed}
        onPress={() => toggleTodo(item.id)}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: item.completed }}
        accessibilityLabel={item.task}
        checkedColor="#0066CC" // Good contrast ratio
        uncheckedColor="#767676" // Good contrast ratio
        containerStyle={styles.checkboxContainer}
        size={Platform.OS === "ios" ? 30 : 24} // Larger on iOS for better touch target
      />
      <View style={styles.textContainer}>
        <Text
          style={[styles.taskText, item.completed && styles.completedTask]}
          numberOfLines={2}
          accessible={false} // Parent view handles accessibility
        >
          {item.task}
        </Text>
        <Text
          style={styles.dateText}
          accessible={false} // Parent view handles accessibility
        >
          {item.dueText}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container} accessible={true}>
      <Text style={styles.heading} accessibilityRole="header">
        My Todo List
      </Text>

      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        accessibilityLabel="List of todo items"
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
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#000000", // High contrast
  },
  listContainer: {
    paddingBottom: 20,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginBottom: 8,
    backgroundColor: "#FAFAFA",
    borderRadius: 8,
    minHeight: 64, // Adequate touch target height
  },
  checkboxContainer: {
    margin: 0,
    padding: 0,
    marginRight: 12,
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  taskText: {
    fontSize: 16,
    color: "#000000", // High contrast
    marginBottom: 4,
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "#424242", // Slightly lighter but still good contrast
  },
  dateText: {
    fontSize: 14,
    color: "#424242", // Good contrast
  },
});

export default TodoListScreen;
