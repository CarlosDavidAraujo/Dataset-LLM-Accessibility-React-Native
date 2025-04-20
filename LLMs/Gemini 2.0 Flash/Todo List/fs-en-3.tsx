import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Using Expo Vector Icons

const TodoItem = ({ item, onToggle }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => onToggle(item.id)}
        accessibilityRole="checkbox"
        accessibilityLabel={`Toggle task ${item.task}`}
        accessibilityState={{ checked: item.completed }}
      >
        {item.completed ? (
          <MaterialIcons name="check-box" size={24} color="green" />
        ) : (
          <MaterialIcons
            name="check-box-outline-blank"
            size={24}
            color="gray"
          />
        )}
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.taskText} accessibilityLabel={item.task}>
          {item.task}
        </Text>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
    </View>
  );
};

const TodoListScreen = () => {
  const [todos, setTodos] = React.useState([
    { id: "1", task: "Finish report", date: "2023-11-15", completed: false },
    { id: "2", task: "Call client", date: "2023-11-20", completed: true },
    { id: "3", task: "Schedule meeting", date: "2023-11-25", completed: false },
  ]);

  const onToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const sortedTodos = [...todos].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedTodos}
        renderItem={({ item }) => <TodoItem item={item} onToggle={onToggle} />}
        keyExtractor={(item) => item.id}
        accessibilityLabel="Todo List"
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
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  checkbox: {
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 48,
    minHeight: 48,
  },
  textContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: 16,
    color: "#000000",
  },
  dateText: {
    fontSize: 14,
    color: "#666666",
  },
});

export default TodoListScreen;
