import React, { useState } from "react";
import { FlatList, StyleSheet, Switch, Text, View } from "react-native";

type Task = {
  id: string;
  task: string;
  date: string;
  completed: boolean;
};

const tasksData: Task[] = [
  { id: "1", task: "Buy groceries", date: "2023-04-15", completed: false },
  { id: "2", task: "Finish report", date: "2023-04-10", completed: true },
  // Add more tasks as needed
];

const TaskListScreen = () => {
  const [tasks, setTasks] = useState<Task[]>(tasksData);

  const toggleTaskCompletion = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleAccessibilityAction = (name: string) => {
    if (name === "toggleTaskCompletion") {
      // Find the first task and toggle its completion status
      const task = tasks.find((t) => t.id === "1"); // Assuming we want to toggle the first task
      if (task) {
        toggleTaskCompletion(task.id);
      }
    }
  };

  const renderItem = ({ item }: { item: Task }) => (
    <View style={styles.item}>
      <Switch
        value={item.completed}
        onValueChange={() => toggleTaskCompletion(item.id)}
      />
      <View>
        <Text accessibilityLabel={`Task: ${item.task}, Date: ${item.date}`}>
          {item.task}
        </Text>
        <Text>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        accessibilityActions={[
          { name: "toggleTaskCompletion", label: "Toggle Task Completion" },
        ]}
        onAccessibilityAction={(event) =>
          handleAccessibilityAction(event.nativeEvent.actionName)
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  list: {
    paddingBottom: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
});

export default TaskListScreen;
