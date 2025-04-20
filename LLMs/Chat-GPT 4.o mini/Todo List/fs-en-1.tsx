import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const TodoListScreen = () => {
  // Hardcoded task list data
  const [taskList, setTaskList] = useState([
    { id: 1, task: "Buy groceries", date: "2025-03-27", completed: false },
    { id: 2, task: "Finish project", date: "2025-03-28", completed: true },
    { id: 3, task: "Clean the house", date: "2025-03-29", completed: false },
  ]);

  // Function to toggle the completion status of a task
  const handleToggle = (taskId) => {
    const updatedTasks = taskList.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedTasks);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.taskContainer}>
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => handleToggle(item.id)}
          accessible={true}
          accessibilityLabel={`Toggle ${
            item.completed ? "incomplete" : "complete"
          } task: ${item.task}`}
        >
          <Checkbox value={item.completed} />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text
            style={styles.taskText}
            accessible={true}
            accessibilityLabel={`Task: ${item.task}`}
          >
            {item.task}
          </Text>
          <Text
            style={styles.dateText}
            accessible={true}
            accessibilityLabel={`Due date: ${item.date}`}
          >
            {item.date}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={taskList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e1e1e1",
  },
  checkboxContainer: {
    minWidth: 48,
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  taskText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
  },
  dateText: {
    color: "#555555",
    fontSize: 14,
  },
});

export default TodoListScreen;
