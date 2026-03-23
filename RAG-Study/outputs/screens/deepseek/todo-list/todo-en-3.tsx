import CheckBox from "expo-checkbox"; // Ensure you have this library installed
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

// Define the type for a task
type Task = {
  id: string;
  title: string;
  completed: boolean;
  date: Date;
};

const TodoListScreen: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    // Initial tasks data
    {
      id: "1",
      title: "Complete project proposal",
      completed: false,
      date: new Date("2023-12-31"),
    },
    {
      id: "2",
      title: "Buy groceries",
      completed: true,
      date: new Date("2023-11-25"),
    },
  ]);

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const renderTaskItem = ({ item }: { item: Task }) => (
    <View style={styles.taskContainer}>
      <CheckBox
        disabled={false}
        value={item.completed}
        onValueChange={(value) => toggleTaskCompletion(item.id)}
        color={item.completed ? "green" : "red"}
      />
      <View style={styles.taskDetails}>
        <Text
          style={[styles.taskTitle, item.completed && styles.taskCompleted]}
        >
          {item.title}
        </Text>
        <Text style={styles.taskDate}>{item.date.toLocaleDateString()}</Text>
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
  taskTitle: {
    fontSize: 16,
  },
  taskCompleted: {
    textDecorationLine: "line-through",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  taskDate: {
    color: "gray",
  },
});

export default TodoListScreen;
