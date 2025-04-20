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
  const tasks = [
    { id: "1", task: "Buy groceries", date: "2025-03-27", completed: false },
    {
      id: "2",
      task: "Complete React Native tutorial",
      date: "2025-03-26",
      completed: true,
    },
    { id: "3", task: "Call Mom", date: "2025-03-25", completed: false },
  ];

  // Sort tasks by date in descending order
  const sortedTasks = tasks.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>
      <FlatList
        data={sortedTasks}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => {}}
              accessible={true}
              accessibilityLabel={`Toggle the task completion for ${item.task}`}
              accessibilityRole="checkbox"
            >
              <Checkbox
                value={item.completed}
                onValueChange={() => {}}
                accessible={true}
                accessibilityLabel={`Task: ${item.task}, Status: ${
                  item.completed ? "Completed" : "Not completed"
                }`}
                style={styles.checkbox}
              />
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text
                style={styles.taskText}
                accessible={true}
                accessibilityRole="text"
              >
                {item.task}
              </Text>
              <Text
                style={styles.dateText}
                accessible={true}
                accessibilityRole="text"
              >
                {item.date}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  checkboxContainer: {
    marginRight: 16,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#f4f4f4",
    width: 44,
    height: 44,
  },
  checkbox: {
    width: 30,
    height: 30,
  },
  textContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: 18,
    color: "#000",
  },
  dateText: {
    fontSize: 14,
    color: "#777",
  },
});

export default TodoListScreen;
