import React, { useState } from "react";
import {
  AccessibilityInfo,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Tipagem para os itens de tarefa
type TaskItem = {
  id: string;
  title: string;
  date: Date;
  completed: boolean;
};

const TaskListScreen: React.FC = () => {
  // Dados mockados de tarefas ordenadas por data (decrescente)
  const [tasks, setTasks] = useState<TaskItem[]>([
    {
      id: "1",
      title: "Reunião com equipe de design",
      date: new Date(2023, 11, 15),
      completed: false,
    },
    {
      id: "2",
      title: "Enviar relatório trimestral",
      date: new Date(2023, 11, 10),
      completed: true,
    },
    {
      id: "3",
      title: "Preparar apresentação para cliente",
      date: new Date(2023, 11, 5),
      completed: false,
    },
    {
      id: "4",
      title: "Atualizar documentação do projeto",
      date: new Date(2023, 10, 28),
      completed: false,
    },
  ]);

  // Função para formatar datas
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  // Alternar estado de conclusão da tarefa
  const toggleTaskCompletion = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );

    // Feedback de acessibilidade
    const task = tasks.find((t) => t.id === id);
    if (task) {
      const status = !task.completed
        ? "marcada como concluída"
        : "marcada como pendente";
      AccessibilityInfo.announceForAccessibility(
        `Tarefa "${task.title}" ${status}`,
      );
    }
  };

  // Renderizar item individual da lista
  const renderTaskItem = ({ item }: { item: TaskItem }) => {
    const handleLongPress = () => {
      Alert.alert(
        "Opções da Tarefa",
        `O que deseja fazer com "${item.title}"?`,
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: item.completed
              ? "Marcar como Pendente"
              : "Marcar como Concluída",
            onPress: () => toggleTaskCompletion(item.id),
          },
        ],
      );
    };

    return (
      <View
        style={[styles.taskItem, item.completed && styles.completedTask]}
        accessible={true}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: item.completed }}
        accessibilityLabel={`Tarefa: ${item.title}, Data: ${formatDate(item.date)}, Status: ${
          item.completed ? "Concluída" : "Pendente"
        }`}
        accessibilityHint="Toque duas vezes para marcar como concluída ou pendente. Toque longo para mais opções."
        onAccessibilityAction={(event) => {
          if (event.nativeEvent.actionName === "toggle") {
            toggleTaskCompletion(item.id);
          }
        }}
        accessibilityActions={[{ name: "toggle", label: "Alternar status" }]}
      >
        <TouchableOpacity
          onPress={() => toggleTaskCompletion(item.id)}
          activeOpacity={0.7}
          style={styles.checkboxContainer}
          accessibilityRole="button"
          accessibilityLabel={
            item.completed ? "Desmarcar tarefa" : "Marcar tarefa como concluída"
          }
        >
          <View style={[styles.checkbox, item.completed && styles.checked]}>
            {item.completed && <Text style={styles.checkmark}>✓</Text>}
          </View>
        </TouchableOpacity>

        <View style={styles.taskContent}>
          <Text
            style={[
              styles.taskTitle,
              item.completed && styles.completedTaskText,
            ]}
            accessibilityRole="text"
          >
            {item.title}
          </Text>
          <Text style={styles.taskDate} accessibilityRole="text">
            {formatDate(item.date)}
          </Text>
        </View>

        <TouchableOpacity
          onLongPress={handleLongPress}
          style={styles.optionsButton}
          accessibilityRole="button"
          accessibilityLabel="Mais opções"
          accessibilityHint="Toque longo para abrir opções adicionais"
        >
          <Text style={styles.optionsText}>⋯</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container} accessibilityRole="list">
      <Text style={styles.header} accessibilityRole="header">
        Minhas Tarefas
      </Text>

      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        accessibilityLabel="Lista de tarefas organizada por data"
        accessibilityHint="Lista ordenada da tarefa mais recente para a mais antiga"
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText} accessibilityRole="text">
              Nenhuma tarefa encontrada
            </Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2d3748",
    marginBottom: 20,
    textAlign: "center",
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  completedTask: {
    opacity: 0.7,
    backgroundColor: "#f8f9fa",
  },
  checkboxContainer: {
    marginRight: 16,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#4a5568",
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    backgroundColor: "#38a169",
    borderColor: "#38a169",
  },
  checkmark: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  taskContent: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2d3748",
    marginBottom: 4,
  },
  completedTaskText: {
    textDecorationLine: "line-through",
    color: "#718096",
  },
  taskDate: {
    fontSize: 14,
    color: "#718096",
  },
  optionsButton: {
    paddingLeft: 16,
  },
  optionsText: {
    fontSize: 24,
    color: "#a0aec0",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: "#718096",
    fontStyle: "italic",
  },
});

export default TaskListScreen;
