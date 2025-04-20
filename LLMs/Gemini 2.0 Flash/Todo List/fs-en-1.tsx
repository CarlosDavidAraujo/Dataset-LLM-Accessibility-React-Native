import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Using Expo vector icons

const TodoItem = ({ item, onToggle }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => onToggle(item.id)}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: item.completed }}
        accessibilityLabel={`Toggle task ${item.task} completion`}
      >
        {item.completed && (
          <MaterialIcons name="check" size={24} color="black" />
        )}
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.taskText} nativeID={`task-${item.id}`}>
          {item.task}
        </Text>
        <Text style={styles.dateText}>
          {new Date(item.date).toLocaleDateString()}
        </Text>
      </View>
    </View>
  );
};

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <FlatList
      data={todos.sort((a, b) => new Date(b.date) - new Date(a.date))}
      renderItem={({ item }) => <TodoItem item={item} onToggle={toggleTodo} />}
      keyExtractor={(item) => item.id.toString()}
      accessibilityLabel="Todo List"
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    minWidth: 48,
    minHeight: 48,
    padding: 12,
  },
  textContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: 16,
    color: "#000000", // Good contrast
  },
  dateText: {
    fontSize: 14,
    color: "#333333", // Good contrast
  },
});

const TodoListScreen = () => {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      task: "Complete Project Report",
      date: "2024-05-15",
      completed: false,
    },
    { id: 2, task: "Review Code Changes", date: "2024-05-18", completed: true },
    {
      id: 3,
      task: "Schedule Team Meeting",
      date: "2024-05-20",
      completed: false,
    },
  ]);

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </View>
  );
};

export default TodoListScreen;
