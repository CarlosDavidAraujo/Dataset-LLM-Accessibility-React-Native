import Checkbox from "expo-checkbox";
import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

// Sample todo data, sorted by date in descending order
const todos = [
  { id: "1", task: "Finish homework", date: "2025-03-27", isChecked: false },
  { id: "2", task: "Go to the gym", date: "2025-03-26", isChecked: false },
  { id: "3", task: "Buy groceries", date: "2025-03-25", isChecked: true },
];

const TodoListScreen = () => {
  const handleCheckboxChange = (id) => {
    console.log(`Checkbox changed for task with id: ${id}`);
  };

  return (
    <View style={styles.container}>
      <Text
        style={styles.header}
        accessible={true}
        accessibilityLabel="Todo List"
      >
        Todo List
      </Text>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => handleCheckboxChange(item.id)}
              accessible={true}
              accessibilityRole="checkbox"
              accessibilityLabel={`Toggle completion for task: ${item.task}`}
              accessibilityState={{ checked: item.isChecked }}
            >
              <Checkbox
                value={item.isChecked}
                onValueChange={() => handleCheckboxChange(item.id)}
                accessibilityLabel={`Mark ${
                  item.isChecked ? "Incomplete" : "Complete"
                } task: ${item.task}`}
              />
            </TouchableOpacity>

            <View style={styles.textContainer}>
              <Text
                style={styles.taskText}
                accessible={true}
                accessibilityLabel={item.task}
              >
                {item.task}
              </Text>
              <Text
                style={styles.dateText}
                accessible={true}
                accessibilityLabel={`Due date: ${item.date}`}
              >
                {item.date}
              </Text>
            </View>
          </View>
        )}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderColor: "#DDD",
    borderWidth: 1,
  },
  checkboxContainer: {
    marginRight: 16,
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#E1E1E1",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: 16,
    color: "#333",
  },
  dateText: {
    fontSize: 12,
    color: "#777",
    marginTop: 4,
  },
  list: {
    marginTop: 16,
  },
});

export default TodoListScreen;
