import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform,
  AccessibilityInfo,
} from "react-native";
import { CheckBox } from "react-native-elements";

const TaskListScreen = () => {
  // Estado inicial com tarefas ordenadas por data (decrescente)
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Revisar documento de acessibilidade",
      date: "2023-05-15",
      completed: false,
    },
    {
      id: "2",
      title: "Testar aplicativo com leitor de tela",
      date: "2023-05-10",
      completed: true,
    },
    {
      id: "3",
      title: "Atualizar componentes para melhor contraste",
      date: "2023-05-05",
      completed: false,
    },
    {
      id: "4",
      title: "Adicionar rótulos acessíveis aos botões",
      date: "2023-04-28",
      completed: false,
    },
  ]);

  // Função para alternar o estado de conclusão da tarefa
  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Formatar data para exibição
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  };

  // Renderizar cada item da lista
  const renderItem = ({ item }) => (
    <View
      style={styles.taskItem}
      accessible={true}
      accessibilityLabel={`Tarefa: ${item.title}. Data: ${formatDate(
        item.date
      )}. Status: ${item.completed ? "concluída" : "pendente"}`}
    >
      <CheckBox
        checked={item.completed}
        onPress={() => toggleTask(item.id)}
        containerStyle={styles.checkboxContainer}
        checkedColor="#0066CC" // Azul com bom contraste
        uncheckedColor="#767676" // Cinza escuro com bom contraste
        accessibilityLabel={
          item.completed ? "Marcar como pendente" : "Marcar como concluída"
        }
        accessibilityRole="checkbox"
        accessibilityState={{ checked: item.completed }}
        size={24}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} // Área de toque aumentada
      />

      <View style={styles.taskInfo}>
        <Text
          style={[styles.taskTitle, item.completed && styles.completedTask]}
          numberOfLines={2}
          accessibilityRole="text"
        >
          {item.title}
        </Text>
        <Text style={styles.taskDate} accessibilityRole="text">
          {formatDate(item.date)}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container} accessible={true}>
      <Text style={styles.header} accessibilityRole="header">
        Lista de Tarefas
      </Text>

      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        accessibilityLabel="Lista de tarefas ordenadas por data"
        accessibilityRole="list"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333333", // Preto escuro para bom contraste
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginBottom: 8,
    backgroundColor: "#FAFAFA",
    borderRadius: 8,
    minHeight: 60, // Altura mínima para área de toque adequada
  },
  checkboxContainer: {
    margin: 0,
    padding: 0,
    marginRight: 12,
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  taskInfo: {
    flex: 1,
    justifyContent: "center",
  },
  taskTitle: {
    fontSize: 16,
    color: "#333333", // Preto escuro para bom contraste
    marginBottom: 4,
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "#767676", // Cinza escuro para bom contraste
  },
  taskDate: {
    fontSize: 14,
    color: "#555555", // Cinza médio escuro para bom contraste
  },
});

export default TaskListScreen;
