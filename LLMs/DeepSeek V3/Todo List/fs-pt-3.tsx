import React from "react";
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
  // Dados de exemplo para a lista de tarefas
  const tasks = [
    {
      id: "1",
      title: "Revisar documento de acessibilidade",
      dueDate: "2023-06-15",
      completed: false,
    },
    {
      id: "2",
      title: "Enviar relatório mensal",
      dueDate: "2023-06-10",
      completed: true,
    },
    {
      id: "3",
      title: "Agendar reunião com equipe",
      dueDate: "2023-06-05",
      completed: false,
    },
  ];

  // Função para alternar o status da tarefa
  const toggleTask = (taskId) => {
    // Lógica para alternar o status da tarefa
  };

  // Função para formatar a data
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("pt-BR");
  };

  // Componente de item da lista
  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      {/* Caixa de seleção com tamanho de toque adequado */}
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => toggleTask(item.id)}
        accessibilityLabel={
          item.completed
            ? "Marcar tarefa como não concluída"
            : "Marcar tarefa como concluída"
        }
        accessibilityRole="checkbox"
        accessibilityState={{ checked: item.completed }}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <View
          style={[styles.checkbox, item.completed && styles.checkboxCompleted]}
        >
          {item.completed && <Text style={styles.checkmark}>✓</Text>}
        </View>
      </TouchableOpacity>

      {/* Conteúdo da tarefa */}
      <View style={styles.taskContent}>
        <Text
          style={[
            styles.taskTitle,
            item.completed && styles.completedTaskTitle,
          ]}
          accessibilityRole="text"
        >
          {item.title}
        </Text>
        <Text
          style={styles.taskDate}
          accessibilityLabel={`Data de vencimento: ${formatDate(item.dueDate)}`}
        >
          {formatDate(item.dueDate)}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container} accessibilityLabel="Lista de tarefas">
      <FlatList
        data={tasks.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate))}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        accessibilityRole="list"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
  },
  listContent: {
    paddingBottom: 20,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  checkboxContainer: {
    marginRight: 16,
    minWidth: 48,
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxCompleted: {
    backgroundColor: "#333333",
  },
  checkmark: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  taskContent: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    color: "#000000", // Contraste adequado com fundo branco
    marginBottom: 4,
  },
  completedTaskTitle: {
    textDecorationLine: "line-through",
    color: "#666666", // Contraste ainda adequado para texto riscado
  },
  taskDate: {
    fontSize: 14,
    color: "#444444", // Contraste adequado com fundo branco
  },
});

export default TaskListScreen;
