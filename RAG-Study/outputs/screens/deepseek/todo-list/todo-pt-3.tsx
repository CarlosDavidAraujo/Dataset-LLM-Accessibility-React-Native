import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Switch, Text, View } from "react-native";

interface Task {
  id: string;
  task: string;
  date: string;
  completed: boolean;
}

const tasksData: Task[] = [
  { id: "1", task: "Buy groceries", date: "2023-04-15", completed: false },
  { id: "2", task: "Finish report", date: "2023-04-10", completed: true },
  // Add more tasks as needed
];

const TaskListScreen = () => {
  const [tasks, setTasks] = useState<Task[]>(tasksData);

  useEffect(() => {
    // Sort tasks by date in descending order
    const sortedTasks = tasksData.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
    setTasks(sortedTasks);
  }, []);

  const toggleTaskCompletion = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const renderItem = ({ item }: { item: Task }) => (
    <View style={styles.item}>
      <Switch
        value={item.completed}
        onValueChange={() => toggleTaskCompletion(item.id)}
        accessibilityLabel={`Toggle completion for ${item.task}`}
      />
      <View>
        <Text>{item.task}</Text>
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default TaskListScreen;
