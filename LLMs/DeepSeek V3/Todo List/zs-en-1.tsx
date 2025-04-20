import { useColorScheme } from "@/hooks/useColorScheme.web";
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Platform,
  Dimensions,
} from "react-native";

const TodoListScreen = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  // Sample initial todo items with dates
  const initialTodos = [
    {
      id: "1",
      task: "Complete project documentation",
      completed: false,
      date: new Date(2023, 5, 15), // June 15, 2023
    },
    {
      id: "2",
      task: "Schedule team meeting",
      completed: true,
      date: new Date(2023, 5, 10), // June 10, 2023
    },
    {
      id: "3",
      task: "Review pull requests",
      completed: false,
      date: new Date(2023, 4, 28), // May 28, 2023
    },
    {
      id: "4",
      task: "Update dependencies",
      completed: false,
      date: new Date(2023, 5, 20), // June 20, 2023
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  // Sort todos by date in descending order
  const sortedTodos = [...todos].sort((a, b) => b.date - a.date);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to format date for display
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Calculate dynamic touch target size based on screen dimensions
  const screenWidth = Dimensions.get("window").width;
  const minTouchSize = Math.max(44, screenWidth * 0.1); // At least 44px or 10% of screen width

  // Colors with sufficient contrast for both light and dark modes
  const colors = {
    background: isDarkMode ? "#121212" : "#FFFFFF",
    text: isDarkMode ? "#FFFFFF" : "#121212",
    secondaryText: isDarkMode ? "#BBBBBB" : "#666666",
    completedText: isDarkMode ? "#888888" : "#AAAAAA",
    checkboxTrack: isDarkMode ? "#767577" : "#E2E2E2",
    checkboxThumb: isDarkMode ? "#81b0ff" : "#f5dd4b",
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {/* Accessible checkbox using Switch */}
      <View
        style={[
          styles.checkboxContainer,
          { minWidth: minTouchSize, minHeight: minTouchSize },
        ]}
      >
        <Switch
          value={item.completed}
          onValueChange={() => toggleTodo(item.id)}
          accessibilityLabel={`Mark task "${item.task}" as ${
            item.completed ? "incomplete" : "complete"
          }`}
          accessibilityRole="checkbox"
          accessibilityState={{ checked: item.completed }}
          trackColor={{
            false: colors.checkboxTrack,
            true: colors.checkboxTrack,
          }}
          thumbColor={
            item.completed ? colors.checkboxThumb : colors.checkboxThumb
          }
          ios_backgroundColor={colors.checkboxTrack}
        />
      </View>

      {/* Task information */}
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.taskText,
            {
              color: item.completed ? colors.completedText : colors.text,
              textDecorationLine: item.completed ? "line-through" : "none",
            },
          ]}
          accessibilityRole="text"
          numberOfLines={2} // Prevent text from overflowing
          ellipsizeMode="tail"
        >
          {item.task}
        </Text>
        <Text
          style={[styles.dateText, { color: colors.secondaryText }]}
          accessibilityLabel={`Due date: ${formatDate(item.date)}`}
        >
          {formatDate(item.date)}
        </Text>
      </View>
    </View>
  );

  return (
    <View
      style={[styles.container, { backgroundColor: colors.background }]}
      accessible={true}
      accessibilityLabel="Todo list"
    >
      <FlatList
        data={sortedTodos}
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
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  checkboxContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 16,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  taskText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
  },
  dateText: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default TodoListScreen;
