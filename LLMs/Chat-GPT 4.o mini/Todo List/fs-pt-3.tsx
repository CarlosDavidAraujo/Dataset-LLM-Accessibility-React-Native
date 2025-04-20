import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Switch,
} from "react-native";

const tasks = [
  {
    id: "1",
    task: "Comprar mantimentos",
    date: "2025-03-27",
    completed: false,
  },
  { id: "2", task: "Reunião com o time", date: "2025-03-26", completed: true },
  { id: "3", task: "Pagar contas", date: "2025-03-25", completed: false },
];

const TaskList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.dateText}>{item.date}</Text>
      <View style={styles.taskContent}>
        <TouchableOpacity
          style={styles.touchable}
          accessibilityLabel={`Tarefa: ${item.task}`}
          onPress={() => console.log(`Selecionando tarefa: ${item.task}`)}
        >
          <Text style={styles.taskText}>{item.task}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() =>
            console.log(`Alternando status de conclusão da tarefa ${item.task}`)
          }
          accessibilityLabel={`Alternar status da tarefa: ${item.task}`}
        >
          <Switch
            value={item.completed}
            onValueChange={(value) =>
              console.log(
                `Novo status: ${value ? "Concluída" : "Não concluída"}`
              )
            }
            accessibilityLabel={`Status da tarefa ${item.task}: ${
              item.completed ? "Concluída" : "Não concluída"
            }`}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  taskContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskText: {
    fontSize: 16,
    color: "#000000", // Contraste adequado com fundo claro
  },
  dateText: {
    fontSize: 14,
    color: "#444444", // Contraste adequado com fundo claro
    marginBottom: 8,
  },
  touchable: {
    minWidth: 48,
    minHeight: 48,
    padding: 8,
  },
  checkboxContainer: {
    minWidth: 48,
    minHeight: 48,
    padding: 8,
  },
});

export default TaskList;
