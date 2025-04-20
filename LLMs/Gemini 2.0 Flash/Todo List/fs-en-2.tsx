import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

const TodoListScreen = () => {
  const todoItems = [
    {
      id: "1",
      task: "Finish project report",
      date: "2024-03-15",
      completed: false,
    },
    { id: "2", task: "Buy groceries", date: "2024-03-10", completed: true },
    { id: "3", task: "Call the doctor", date: "2024-03-05", completed: false },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity
        style={styles.checkbox}
        accessibilityRole="checkbox"
        accessibilityLabel={item.completed ? "Uncheck task" : "Check task"}
        accessibilityState={{ checked: item.completed }}
      >
        <Text style={styles.checkboxText}>{item.completed ? "✅" : "☐"}</Text>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.taskText}>{item.task}</Text>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={todoItems.sort((a, b) => new Date(b.date) - new Date(a.date))}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.container}
      accessibilityLabel="Todo list"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF", // Good contrast with text
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE", // Good contrast with background
  },
  checkbox: {
    minWidth: 48,
    minHeight: 48,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  checkboxText: {
    fontSize: 20, // Adjust size as needed
  },
  textContainer: {
    marginLeft: 16,
    flex: 1,
  },
  taskText: {
    fontSize: 16,
    color: "#000000", // Good contrast
  },
  dateText: {
    fontSize: 14,
    color: "#666666", // Good contrast
  },
});

export default TodoListScreen;
