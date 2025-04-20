import Checkbox from "expo-checkbox";
import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

// Dados de exemplo para a lista de tarefas
const tasks = [
  { id: "1", title: "Comprar leite", date: "2025-03-28", completed: false },
  {
    id: "2",
    title: "Estudar React Native",
    date: "2025-03-27",
    completed: true,
  },
  { id: "3", title: "Pagar contas", date: "2025-03-25", completed: false },
];

// Função para formatar a data
const formatDate = (date) => new Date(date).toLocaleDateString();

const TaskList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Tarefas</Text>

      <FlatList
        data={tasks.sort((a, b) => new Date(b.date) - new Date(a.date))} // Ordenação decrescente por data
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => {}}
              accessible={true}
              accessibilityLabel={`Marcar tarefa ${item.title} como ${
                item.completed ? "não concluída" : "concluída"
              }`}
              accessibilityRole="button"
            >
              <Checkbox
                value={item.completed}
                onValueChange={() => {}}
                accessibilityLabel={`Marcar como concluída ${item.title}`}
              />
            </TouchableOpacity>

            <View style={styles.taskDetails}>
              <Text
                style={[
                  styles.taskTitle,
                  item.completed && styles.completedText,
                ]}
                accessible={true}
                accessibilityLabel={`Tarefa: ${item.title}`}
              >
                {item.title}
              </Text>
              <Text
                style={styles.taskDate}
                accessible={true}
                accessibilityLabel={`Data: ${formatDate(item.date)}`}
              >
                {formatDate(item.date)}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2c3e50",
  },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  checkboxContainer: {
    marginRight: 15,
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    borderRadius: 4,
  },
  taskDetails: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 18,
    color: "#34495e",
  },
  taskDate: {
    fontSize: 14,
    color: "#7f8c8d",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#95a5a6",
  },
});

export default TaskList;
