import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Switch,
} from "react-native";

// Dados de exemplo para a lista de tarefas
const tarefas = [
  {
    id: "1",
    nome: "Estudar React Native",
    data: "2025-03-28",
    concluida: false,
  },
  { id: "2", nome: "Fazer compras", data: "2025-03-26", concluida: true },
  {
    id: "3",
    nome: "Reunião com a equipe",
    data: "2025-03-25",
    concluida: false,
  },
];

const ListaDeTarefas = () => {
  const renderItem = ({ item }) => {
    const { nome, data, concluida } = item;

    return (
      <View style={styles.item}>
        <TouchableOpacity
          accessible={true}
          accessibilityRole="checkbox"
          accessibilityLabel={`Marcar como ${
            concluida ? "não concluída" : "concluída"
          }`}
          accessibilityState={{ checked: concluida }}
          style={[styles.checkbox, concluida && styles.checkboxConcluida]}
          onPress={() => {}}
        />
        <View style={styles.textoContainer}>
          <Text
            style={[styles.nome, !concluida && styles.textoNaoConcluido]}
            accessible={true}
            accessibilityRole="text"
          >
            {nome}
          </Text>
          <Text
            style={[styles.data, !concluida && styles.textoNaoConcluido]}
            accessible={true}
            accessibilityRole="text"
          >
            {data}
          </Text>
        </View>
      </View>
    );
  };

  // Ordenar as tarefas por data em ordem decrescente
  const tarefasOrdenadas = tarefas.sort(
    (a, b) => new Date(b.data) - new Date(a.data)
  );

  return (
    <FlatList
      data={tarefasOrdenadas}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.lista}
      accessibilityLabel="Lista de tarefas"
    />
  );
};

const styles = StyleSheet.create({
  lista: {
    flex: 1,
    padding: 16,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#f4f4f4",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginRight: 16,
  },
  checkboxConcluida: {
    backgroundColor: "#4CAF50",
  },
  textoContainer: {
    flex: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  data: {
    fontSize: 14,
    color: "#555",
  },
  textoNaoConcluido: {
    opacity: 0.6,
  },
});

export default ListaDeTarefas;
