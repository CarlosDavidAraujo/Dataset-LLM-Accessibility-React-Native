import { useColorScheme } from "@/hooks/useColorScheme.web";
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Platform,
} from "react-native";

const TaskListScreen = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  // Estado inicial com tarefas ordenadas por data (decrescente)
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Reunião com a equipe",
      date: "2023-06-15",
      completed: false,
    },
    {
      id: "2",
      title: "Enviar relatório mensal",
      date: "2023-06-10",
      completed: true,
    },
    {
      id: "3",
      title: "Atualizar documentação do projeto",
      date: "2023-06-05",
      completed: false,
    },
  ]);

  // Alternar status da tarefa
  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Estilos dinâmicos baseados no modo escuro/claro
  const getStyles = (isDarkMode) =>
    StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: isDarkMode ? "#121212" : "#f5f5f5",
        padding: 16,
      },
      header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        color: isDarkMode ? "#ffffff" : "#000000",
      },
      taskItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
        padding: 16,
        marginBottom: 8,
        borderRadius: 8,
      },
      taskContent: {
        flex: 1,
        marginLeft: 16,
      },
      taskTitle: (completed) => ({
        fontSize: 16,
        color: isDarkMode ? "#ffffff" : "#000000",
        fontWeight: completed ? "normal" : "bold",
        textDecorationLine: completed ? "line-through" : "none",
      }),
      taskDate: {
        fontSize: 14,
        color: isDarkMode ? "#aaaaaa" : "#666666",
        marginTop: 4,
      },
      switchContainer: {
        minWidth: 50, // Tamanho mínimo para toque
        minHeight: 40, // Tamanho mínimo para toque
        justifyContent: "center",
        alignItems: "center",
      },
    });

  // Componente de item da lista
  const renderItem = ({ item }) => {
    const styles = getStyles(isDarkMode);

    return (
      <View style={styles.taskItem}>
        <View style={styles.switchContainer}>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel={
              item.completed
                ? "Marcar tarefa como não concluída"
                : "Marcar tarefa como concluída"
            }
            accessibilityRole="button"
            onPress={() => toggleTask(item.id)}
            activeOpacity={0.7}
          >
            <Switch
              value={item.completed}
              onValueChange={() => toggleTask(item.id)}
              accessibilityLabel={item.title}
              accessibilityHint={
                item.completed ? "Tarefa concluída" : "Tarefa pendente"
              }
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={item.completed ? "#f5dd4b" : "#f4f3f4"}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.taskContent}>
          <Text
            style={styles.taskTitle(item.completed)}
            accessible={true}
            accessibilityLabel={`Tarefa: ${item.title}, Data: ${
              item.date
            }, Status: ${item.completed ? "concluída" : "pendente"}`}
          >
            {item.title}
          </Text>
          <Text
            style={styles.taskDate}
            accessible={true}
            accessibilityLabel={`Data de conclusão: ${item.date}`}
          >
            {item.date}
          </Text>
        </View>
      </View>
    );
  };

  const styles = getStyles(isDarkMode);

  return (
    <View style={styles.container} accessible={true}>
      <Text style={styles.header} accessibilityRole="header">
        Lista de Tarefas
      </Text>
      <FlatList
        data={tasks.sort((a, b) => new Date(b.date) - new Date(a.date))}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        accessibilityLabel="Lista de tarefas ordenadas por data"
      />
    </View>
  );
};

export default TaskListScreen;
