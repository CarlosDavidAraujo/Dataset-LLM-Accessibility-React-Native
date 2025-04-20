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
  // Initial todo items sorted by date (descending)
  const [todos, setTodos] = useState([
    {
      id: "1",
      task: "Complete project documentation",
      completed: false,
      date: "2023-05-15",
      dueText: "Due May 15",
    },
    {
      id: "2",
      task: "Schedule team meeting",
      completed: true,
      date: "2023-05-10",
      dueText: "Due May 10",
    },
    {
      id: "3",
      task: "Review pull requests",
      completed: false,
      date: "2023-05-05",
      dueText: "Due May 5",
    },
    {
      id: "4",
      task: "Update dependencies",
      completed: false,
      date: "2023-04-28",
      dueText: "Due April 28",
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
        accessibilityLabel={
          item.completed
            ? `Mark ${item.task} as not completed`
            : `Mark ${item.task} as completed`
        }
        accessibilityRole="checkbox"
        accessibilityState={{ checked: item.completed }}
        containerStyle={styles.checkboxContainer}
        checkedColor="#0066CC" // Good contrast ratio
        uncheckedColor="#0066CC"
        size={24}
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
    <View style={styles.container} accessibilityRole="list">
      <Text style={styles.header} accessibilityRole="header">
        My Todo List
      </Text>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        accessibilityLabel="List of todo items"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333", // Dark gray for good contrast (4.6:1 on white)
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  listContent: {
    paddingBottom: 24,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginBottom: 8,
    minHeight: 60, // Ensure minimum touch target size
  },
  checkboxContainer: {
    padding: 0,
    margin: 0,
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
    color: "#333333", // Dark gray for good contrast
    lineHeight: 22,
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "#666666", // Lighter gray for completed items, still good contrast (5.7:1)
  },
  dateText: {
    fontSize: 14,
    color: "#0066CC", // Blue with good contrast (4.7:1 on white)
    marginTop: 4,
  },
});

export default TodoListScreen;
