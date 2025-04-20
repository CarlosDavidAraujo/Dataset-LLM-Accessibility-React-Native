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

  // Configurações de cores para modo claro/escuro
  const colors = {
    background: isDarkMode ? "#121212" : "#FFFFFF",
    text: isDarkMode ? "#FFFFFF" : "#121212",
    secondaryText: isDarkMode ? "#BBBBBB" : "#666666",
    checkbox: isDarkMode ? "#4CAF50" : "#2196F3",
    separator: isDarkMode ? "#333333" : "#E0E0E0",
  };

  // Estado inicial com tarefas de exemplo
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Finalizar relatório trimestral",
      dueDate: "2023-11-15",
      completed: false,
    },
    {
      id: "2",
      title: "Agendar reunião com a equipe",
      dueDate: "2023-11-10",
      completed: true,
    },
    {
      id: "3",
      title: "Revisar proposta de projeto",
      dueDate: "2023-11-05",
      completed: false,
    },
  ]);

  // Ordena as tarefas por data decrescente
  const sortedTasks = [...tasks].sort(
    (a, b) => new Date(b.dueDate) - new Date(a.dueDate)
  );

  // Alterna o estado de conclusão de uma tarefa
  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Renderiza cada item da lista
  const renderItem = ({ item }) => (
    <View
      style={styles.taskItem}
      accessible={true}
      accessibilityLabel={`Tarefa: ${
        item.title
      }, Data de vencimento: ${formatDate(item.dueDate)}, ${
        item.completed ? "Concluída" : "Pendente"
      }`}
    >
      <View style={styles.taskContent}>
        {/* Caixa de seleção acessível */}
        <TouchableOpacity
          onPress={() => toggleTask(item.id)}
          style={styles.checkboxContainer}
          accessibilityRole="checkbox"
          accessibilityState={{ checked: item.completed }}
          accessibilityLabel={
            item.completed ? "Marcar como pendente" : "Marcar como concluída"
          }
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
        >
          <View
            style={[
              styles.checkbox,
              item.completed && styles.checkboxCompleted,
              { borderColor: colors.checkbox },
            ]}
          >
            {item.completed && (
              <Text style={[styles.checkmark, { color: colors.checkbox }]}>
                ✓
              </Text>
            )}
          </View>
        </TouchableOpacity>

        <View style={styles.taskTextContainer}>
          <Text
            style={[
              styles.taskTitle,
              item.completed && styles.completedTask,
              { color: colors.text },
            ]}
            numberOfLines={2}
            accessible={true}
          >
            {item.title}
          </Text>
          <Text
            style={[styles.taskDate, { color: colors.secondaryText }]}
            accessible={true}
            accessibilityLabel={`Data de vencimento: ${formatDate(
              item.dueDate
            )}`}
          >
            {formatDate(item.dueDate)}
          </Text>
        </View>
      </View>
    </View>
  );

  // Função para formatar a data
  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  };

  return (
    <View
      style={[styles.container, { backgroundColor: colors.background }]}
      accessible={true}
      accessibilityLabel="Lista de tarefas"
    >
      <FlatList
        data={sortedTasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View
            style={[styles.separator, { backgroundColor: colors.separator }]}
          />
        )}
        ListEmptyComponent={
          <Text
            style={[styles.emptyText, { color: colors.text }]}
            accessible={true}
          >
            Nenhuma tarefa encontrada
          </Text>
        }
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingVertical: 8,
  },
  taskItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  taskContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxContainer: {
    padding: 8, // Aumenta a área de toque
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxCompleted: {
    backgroundColor: "transparent",
  },
  checkmark: {
    fontSize: 16,
    fontWeight: "bold",
  },
  taskTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  taskTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
  },
  completedTask: {
    textDecorationLine: "line-through",
    opacity: 0.7,
  },
  taskDate: {
    fontSize: 14,
    marginTop: 4,
  },
  separator: {
    height: 1,
    marginHorizontal: 16,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 24,
    fontSize: 16,
  },
});

export default TaskListScreen;
