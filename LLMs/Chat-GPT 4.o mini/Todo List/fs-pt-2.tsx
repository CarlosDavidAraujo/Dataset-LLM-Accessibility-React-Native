import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Usando ícones do FontAwesome

const tasks = [
  { id: "1", task: "Comprar leite", date: "2025-03-27" },
  { id: "2", task: "Ir ao médico", date: "2025-03-25" },
  { id: "3", task: "Finalizar projeto", date: "2025-03-20" },
];

const TaskListScreen = () => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.taskContainer}>
          <TouchableOpacity
            style={styles.touchableArea}
            accessibilityLabel={`Selecionar tarefa: ${item.task}`}
            onPress={() => {
              // Lógica de marcação da tarefa
            }}
          >
            <Icon name="check-square" size={24} color="#003366" />
          </TouchableOpacity>

          <View style={styles.taskDetails}>
            <Text
              style={styles.taskText}
              accessibilityLabel={`Tarefa: ${item.task}`}
            >
              {item.task}
            </Text>
            <Text
              style={styles.dateText}
              accessibilityLabel={`Data da tarefa: ${item.date}`}
            >
              {item.date}
            </Text>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  touchableArea: {
    minWidth: 40,
    minHeight: 40,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  taskDetails: {
    flex: 1,
    marginLeft: 10,
  },
  taskText: {
    fontSize: 16,
    color: "#000000", // Contraste adequado com o fundo
  },
  dateText: {
    fontSize: 14,
    color: "#555555", // Contraste adequado, sem confundir com o texto principal
  },
});

export default TaskListScreen;
