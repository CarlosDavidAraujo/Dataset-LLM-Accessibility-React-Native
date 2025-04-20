import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { CheckBox } from "react-native-elements";

const TodoListScreen = () => {
  // Sample data sorted by date in descending order
  const todos = [
    {
      id: "1",
      task: "Complete project proposal",
      date: "2023-05-20",
      completed: false,
    },
    {
      id: "2",
      task: "Buy groceries",
      date: "2023-05-18",
      completed: true,
    },
    {
      id: "3",
      task: "Schedule doctor appointment",
      date: "2023-05-15",
      completed: false,
    },
  ];

  const toggleComplete = (id) => {
    // Toggle completion logic would go here
  };

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <TouchableOpacity
        onPress={() => toggleComplete(item.id)}
        style={styles.checkboxContainer}
        accessibilityLabel={
          item.completed ? "Mark task as incomplete" : "Mark task as complete"
        }
        accessibilityRole="button"
      >
        <CheckBox
          checked={item.completed}
          onPress={() => toggleComplete(item.id)}
          containerStyle={styles.checkbox}
          accessibilityLabelledBy={`taskLabel-${item.id}`}
        />
      </TouchableOpacity>

      <View style={styles.taskContainer}>
        <Text
          nativeID={`taskLabel-${item.id}`}
          style={[styles.taskText, item.completed && styles.completedTask]}
        >
          {item.task}
        </Text>
        <Text style={styles.dateText}>Due: {item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container} accessibilityLabel="Todo list">
      <Text style={styles.heading}>My Tasks</Text>
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
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 16,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  checkboxContainer: {
    minWidth: 48,
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
  taskContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 4,
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "#666666",
  },
  dateText: {
    fontSize: 14,
    color: "#333333",
  },
});

export default TodoListScreen;
