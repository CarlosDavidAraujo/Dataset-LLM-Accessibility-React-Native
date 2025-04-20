import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Checkbox } from "react-native-paper"; // Or your preferred checkbox component

const TodoListScreen = () => {
  // Sample data sorted by date (descending)
  const todoItems = [
    {
      id: "1",
      task: "Complete project documentation",
      date: "2023-05-15",
      completed: false,
    },
    {
      id: "2",
      task: "Review teammate's pull request",
      date: "2023-05-10",
      completed: true,
    },
    {
      id: "3",
      task: "Schedule team meeting",
      date: "2023-05-05",
      completed: false,
    },
  ];

  const toggleCompletion = (itemId) => {
    // Implementation for toggling completion status
  };

  const renderItem = ({ item }) => (
    <View
      style={styles.itemContainer}
      accessibilityLabel={`Task: ${item.task}, Due: ${item.date}, ${
        item.completed ? "Completed" : "Pending"
      }`}
    >
      <TouchableOpacity
        onPress={() => toggleCompletion(item.id)}
        style={styles.checkboxContainer}
        accessibilityLabel={
          item.completed ? "Mark task as pending" : "Mark task as completed"
        }
        accessibilityRole="checkbox"
        accessibilityState={{ checked: item.completed }}
      >
        <Checkbox
          status={item.completed ? "checked" : "unchecked"}
          color="#0066CC" // Good contrast color
          uncheckedColor="#0066CC"
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={[styles.taskText, item.completed && styles.completedTask]}>
          {item.task}
        </Text>
        <Text style={styles.dateText}>Due: {item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle} accessibilityRole="header">
        My Todo List
      </Text>

      <FlatList
        data={todoItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        accessibilityLabel="List of todo items"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000", // High contrast with white background
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    minHeight: 48, // Minimum touch target size
  },
  checkboxContainer: {
    padding: 8, // Increases touch target size
    marginRight: 8,
  },
  textContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: 16,
    color: "#333333", // Good contrast
    marginBottom: 4,
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "#666666", // Still maintains sufficient contrast
  },
  dateText: {
    fontSize: 14,
    color: "#555555", // Good contrast
  },
});

export default TodoListScreen;
