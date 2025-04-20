import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Platform,
} from "react-native";
import { CheckBox } from "react-native-elements"; // Using a library with accessible checkbox

const TodoListScreen = () => {
  // Sample data sorted by date (descending)
  const todos = [
    {
      id: "1",
      task: "Complete project proposal",
      date: "2023-05-20",
      completed: false,
    },
    {
      id: "2",
      task: "Schedule team meeting",
      date: "2023-05-18",
      completed: true,
    },
    {
      id: "3",
      task: "Review design mockups",
      date: "2023-05-15",
      completed: false,
    },
  ];

  const toggleComplete = (id) => {
    // Todo: Implement toggle functionality
  };

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      {/* Accessible checkbox with proper touch target */}
      <TouchableOpacity
        onPress={() => toggleComplete(item.id)}
        style={styles.checkboxContainer}
        accessibilityLabel={
          item.completed ? "Mark task as incomplete" : "Mark task as complete"
        }
        accessibilityRole="checkbox"
        accessibilityState={{ checked: item.completed }}
      >
        <CheckBox
          checked={item.completed}
          onPress={() => toggleComplete(item.id)}
          containerStyle={styles.checkbox}
          checkedColor="#1a73e8" // Good contrast blue
          uncheckedColor="#5f6368" // Good contrast gray
          accessibilityElementsHidden={true} // Hide from accessibility as we're using the TouchableOpacity
          importantForAccessibility="no"
        />
      </TouchableOpacity>

      {/* Task information with proper contrast */}
      <View style={styles.taskInfo}>
        <Text
          style={[styles.taskText, item.completed && styles.completedTask]}
          accessibilityLabel={`Task: ${item.task}, Due: ${item.date}`}
        >
          {item.task}
        </Text>
        <Text
          style={styles.dateText}
          accessibilityLabel={`Due date: ${item.date}`}
        >
          {item.date}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container} accessibilityLabel="Todo list">
      <Text style={styles.heading} accessibilityRole="header">
        My Tasks
      </Text>

      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        accessibilityLabel="List of tasks"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", // White background for good contrast
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#202124", // Dark gray for good contrast
    marginBottom: 16,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  checkboxContainer: {
    minWidth: 48, // Minimum touch target size
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  checkbox: {
    padding: 0,
    margin: 0,
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  taskInfo: {
    flex: 1,
  },
  taskText: {
    fontSize: 16,
    color: "#202124", // Dark gray for good contrast
    marginBottom: 4,
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "#5f6368", // Lighter gray for completed tasks (still good contrast)
  },
  dateText: {
    fontSize: 14,
    color: "#5f6368", // Medium gray for good contrast
  },
});

export default TodoListScreen;
