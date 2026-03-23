import CheckBox from "expo-checkbox"; // Ensure you have this library installed for the checkbox component
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

// Mock data: an array of tasks with a date and completion status
const mockTasks = [
  {
    id: "1",
    task: "Complete project proposal",
    date: new Date("2023-05-15"),
    completed: false,
  },
  {
    id: "2",
    task: "Call client at 4 PM",
    date: new Date("2023-05-16"),
    completed: true,
  },
  // Add more tasks as needed
];

// Main component
const TodoListScreen = () => {
  const [tasks, setTasks] = useState(mockTasks);

  // Function to toggle task completion status
  const toggleTaskCompletion = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  // Function to render each task item in the list
  const renderTaskItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <CheckBox
        disabled={false}
        value={item.completed}
        onValueChange={(value) => toggleTaskCompletion(item.id)}
        color={item.completed ? "green" : "red"} // Customize colors for accessibility
      />
      <View style={styles.taskDetails}>
        <Text style={styles.taskText}>{item.task}</Text>
        <Text>{new Date(item.date).toLocaleDateString()}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={() => (
          <Text style={styles.header}>To-Do List</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  listContent: {
    paddingBottom: 20,
  },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  taskDetails: {
    marginLeft: 10,
  },
  taskText: {
    fontSize: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default TodoListScreen;
