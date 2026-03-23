import CheckBox from "expo-checkbox";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

// Mock data for tasks
const tasks = [
  {
    id: "1",
    task: "Complete report",
    date: new Date("2023-12-31"),
    completed: false,
  },
  {
    id: "2",
    task: "Call client",
    date: new Date("2023-11-30"),
    completed: true,
  },
  // Add more tasks as needed
];

// Sort tasks by date in descending order
const sortedTasks = tasks.sort((a, b) => b.date.getTime() - a.date.getTime());

export default function TodoListScreen() {
  const renderTaskItem = ({ item }: { item: any }) => (
    <View style={styles.taskContainer}>
      <CheckBox
        value={item.completed}
        onValueChange={() => handleToggleCompletion(item.id)}
        color={item.completed ? "green" : undefined}
        accessibilityLabel={`Mark ${item.task} as completed`}
      />
      <View style={styles.taskDetails}>
        <Text style={styles.taskText}>{item.task}</Text>
        <Text>{item.date.toDateString()}</Text>
      </View>
    </View>
  );

  const handleToggleCompletion = (id) => {
    // Implement logic to toggle task completion state
    console.log(`Toggling completion for task with id: ${id}`);
  };

  return (
    <FlatList
      data={sortedTasks}
      renderItem={renderTaskItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  taskDetails: {
    marginLeft: 10,
  },
  taskText: {
    fontSize: 18,
  },
});
