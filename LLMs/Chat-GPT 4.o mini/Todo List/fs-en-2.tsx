import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

// Sample Todo list data
const todoList = [
  { id: "1", task: "Finish homework", date: "2025-03-27", completed: false },
  { id: "2", task: "Buy groceries", date: "2025-03-26", completed: true },
  { id: "3", task: "Clean the house", date: "2025-03-25", completed: false },
];

const TodoListScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <TouchableOpacity
              style={styles.checkboxWrapper}
              onPress={() => {}}
              accessible={true}
              accessibilityLabel={`Toggle completion for ${item.task}`}
            >
              <Text style={styles.checkbox}>{item.completed ? "☑" : "☐"}</Text>
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={styles.taskText} accessibilityLabel={item.task}>
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
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  checkboxWrapper: {
    minWidth: 40,
    minHeight: 40,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  checkbox: {
    fontSize: 24,
    color: "#000000", // Ensures high contrast between checkbox and background
  },
  textContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: 16,
    color: "#000000", // Black text for high contrast
  },
  dateText: {
    fontSize: 14,
    color: "#333333", // Slightly darker gray for the date
  },
});

export default TodoListScreen;
