import Checkbox from "expo-checkbox";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const TodoListScreen = () => {
  const todoList = [
    {
      id: "1",
      task: "Complete React Native project",
      date: "2025-03-27",
      isChecked: false,
    },
    {
      id: "2",
      task: "Attend team meeting",
      date: "2025-03-26",
      isChecked: false,
    },
    { id: "3", task: "Write blog post", date: "2025-03-25", isChecked: false },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => {}}
              accessibilityLabel={`Toggle the checkbox for task ${item.task}`}
            >
              <Checkbox
                value={item.isChecked}
                onValueChange={() => {}}
                accessibilityLabel={`Checkbox for task: ${item.task}`}
              />
            </TouchableOpacity>
            <View style={styles.taskContainer}>
              <Text
                style={styles.taskText}
                accessibilityLabel={`Task: ${item.task}`}
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
        )}
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
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  checkboxContainer: {
    minWidth: 40,
    minHeight: 40,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  taskContainer: {
    marginLeft: 16,
    flex: 1,
  },
  taskText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000", // Ensuring sufficient contrast for readability
  },
  dateText: {
    fontSize: 14,
    color: "#666666", // Ensuring readable contrast with background
  },
});

export default TodoListScreen;
