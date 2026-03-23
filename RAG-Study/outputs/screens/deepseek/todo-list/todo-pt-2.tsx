// src/TaskListScreen.tsx
import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { List, Provider as PaperProvider } from "react-native-paper";

interface Task {
  id: number;
  task: string;
  date: string;
  completed: boolean;
}

const TaskListScreen = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, task: "Comprar leite", date: "2023-04-01", completed: false },
    { id: 2, task: "Enviar relatório", date: "2023-04-02", completed: true },
    // Adicione mais tarefas conforme necessário
  ]);

  const renderItem = ({ item }: { item: Task }) => (
    <List.Item
      title={item.task}
      description={item.date}
      left={(props) => (
        <List.Icon
          {...props}
          icon="check"
          color={item.completed ? "green" : "gray"}
        />
      )}
      onPress={() => handleToggleCompletion(item.id)}
      accessibilityActions={[
        { name: "toggleCompletion", label: "Alternar Completude" },
      ]}
      onAccessibilityAction={(event) =>
        handleAccessibilityAction(event, item.id)
      }
    />
  );

  const handleToggleCompletion = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleAccessibilityAction = (event: any, taskId: number) => {
    if (event.nativeEvent.actionName === "toggleCompletion") {
      handleToggleCompletion(taskId);
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default TaskListScreen;
