import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const TaskListScreen = () => {
  const [tasks, setTasks] = useState([
    { id: "1", text: "Tarefa 1", date: "2023-10-27", completed: false },
    { id: "2", text: "Tarefa 2", date: "2023-10-26", completed: true },
    { id: "3", text: "Tarefa 3", date: "2023-10-25", completed: false },
  ]);

  const toggleTaskCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.taskItem}
      onPress={() => toggleTaskCompleted(item.id)}
      accessibilityRole="button"
      accessibilityLabel={`Tarefa ${item.text}, ${
        item.completed ? "concluída" : "não concluída"
      }, data ${item.date}`}
    >
      <View style={styles.taskContent}>
        <View style={styles.checkbox}>
          {item.completed && <View style={styles.checkboxInner} />}
        </View>
        <Text style={styles.taskText}>{item.text}</Text>
        <Text style={styles.taskDate}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks.sort((a, b) => new Date(b.date) - new Date(a.date))}
        renderItem={renderItem}
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
  taskItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  taskContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "#000",
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxInner: {
    width: 16,
    height: 16,
    backgroundColor: "#000",
  },
  taskText: {
    fontSize: 16,
    color: "#000",
    flex: 1,
  },
  taskDate: {
    fontSize: 14,
    color: "#666",
  },
});

export default TaskListScreen;
