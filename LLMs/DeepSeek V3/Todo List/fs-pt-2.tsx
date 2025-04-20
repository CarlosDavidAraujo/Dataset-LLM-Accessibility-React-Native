import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { CheckBox } from "react-native-elements";

const TaskListScreen = () => {
  // Dados de exemplo ordenados por data (decrescente)
  const tasks = [
    {
      id: "1",
      title: "Revisar proposta de projeto",
      date: "15/03/2023",
      completed: false,
    },
    {
      id: "2",
      title: "Enviar relatório mensal",
      date: "10/03/2023",
      completed: true,
    },
    {
      id: "3",
      title: "Agendar reunião com a equipe",
      date: "05/03/2023",
      completed: false,
    },
  ];

  const toggleTask = (taskId) => {
    // Lógica para alternar o status da tarefa
    console.log(`Tarefa ${taskId} alterada`);
  };

  const renderTaskItem = ({ item }) => (
    <View style={styles.taskItem}>
      {/* Checkbox acessível com tamanho de toque adequado */}
      <TouchableOpacity
        onPress={() => toggleTask(item.id)}
        style={styles.checkboxContainer}
        accessibilityLabel={
          item.completed
            ? `Marcar tarefa ${item.title} como não concluída`
            : `Marcar tarefa ${item.title} como concluída`
        }
        accessibilityRole="checkbox"
        accessibilityState={{ checked: item.completed }}
        activeOpacity={0.7}
      >
        <View
          style={[styles.checkbox, item.completed && styles.checkboxChecked]}
        >
          {item.completed && <Text style={styles.checkmark}>✓</Text>}
        </View>
      </TouchableOpacity>

      {/* Conteúdo da tarefa */}
      <View style={styles.taskContent}>
        <Text
          style={[styles.taskTitle, item.completed && styles.completedTask]}
          accessibilityLabel={`Tarefa: ${item.title}`}
        >
          {item.title}
        </Text>
        <Text style={styles.taskDate} accessibilityLabel={`Data: ${item.date}`}>
          {item.date}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container} accessible>
      <Text style={styles.header} accessibilityRole="header">
        Lista de Tarefas
      </Text>

      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id}
        accessibilityLabel="Lista de tarefas ordenadas por data"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 20,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  checkboxContainer: {
    minWidth: 48,
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#003366",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: "#003366",
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
    color: "#000000",
    marginBottom: 4,
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "#666666",
  },
  taskDate: {
    fontSize: 14,
    color: "#333333",
  },
});

export default TaskListScreen;
