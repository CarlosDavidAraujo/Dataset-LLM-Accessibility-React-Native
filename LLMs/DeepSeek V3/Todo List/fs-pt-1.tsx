import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { CheckBox } from "react-native-elements"; // Ou seu componente de checkbox preferido

const TaskListScreen = () => {
  // Dados de exemplo - ordenados por data decrescente
  const tasks = [
    {
      id: "1",
      title: "Revisar relatório trimestral",
      date: "2023-11-15",
      completed: false,
    },
    {
      id: "2",
      title: "Enviar feedback para a equipe",
      date: "2023-11-10",
      completed: true,
    },
    {
      id: "3",
      title: "Agendar reunião com cliente",
      date: "2023-11-05",
      completed: false,
    },
  ];

  const toggleTask = (taskId) => {
    // Lógica para alternar o status da tarefa
  };

  const renderTaskItem = ({ item }) => (
    <View style={styles.taskItem} accessible={true}>
      <TouchableOpacity
        onPress={() => toggleTask(item.id)}
        style={styles.checkboxContainer}
        accessibilityLabel={
          item.completed
            ? `Marcar ${item.title} como não concluída`
            : `Marcar ${item.title} como concluída`
        }
        accessibilityRole="checkbox"
        accessibilityState={{ checked: item.completed }}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <CheckBox
          checked={item.completed}
          onPress={() => toggleTask(item.id)}
          containerStyle={styles.checkbox}
          checkedColor="#0066CC" // Azul com bom contraste
          uncheckedColor="#333333" // Cinza escuro com bom contraste
          accessibilityElementsHidden={true}
          importantForAccessibility="no"
        />
      </TouchableOpacity>

      <View style={styles.taskInfo}>
        <Text
          style={[styles.taskTitle, item.completed && styles.completedTask]}
          accessibilityLabel={`Tarefa: ${item.title}`}
        >
          {item.title}
        </Text>
        <Text
          style={styles.taskDate}
          accessibilityLabel={`Data de conclusão: ${new Date(
            item.date
          ).toLocaleDateString("pt-BR")}`}
        >
          {new Date(item.date).toLocaleDateString("pt-BR")}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container} accessibilityLabel="Lista de tarefas">
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id}
        accessibilityRole="list"
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
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    minHeight: 48, // Altura mínima para toque fácil
  },
  checkboxContainer: {
    minWidth: 48,
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    padding: 0,
    margin: 0,
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  taskInfo: {
    flex: 1,
    marginLeft: 12,
  },
  taskTitle: {
    fontSize: 16,
    color: "#000000", // Preto para bom contraste
    marginBottom: 4,
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "#555555", // Cinza mais escuro para manter contraste mesmo quando riscado
  },
  taskDate: {
    fontSize: 14,
    color: "#333333", // Cinza escuro para bom contraste
  },
});

export default TaskListScreen;
