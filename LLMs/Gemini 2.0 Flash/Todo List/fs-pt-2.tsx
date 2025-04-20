import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const tarefas = [
  {
    id: "1",
    tarefa: "Comprar mantimentos",
    data: "2023-11-10",
    concluida: false,
  },
  { id: "2", tarefa: "Pagar contas", data: "2023-11-05", concluida: true },
  {
    id: "3",
    tarefa: "Ligar para o médico",
    data: "2023-11-01",
    concluida: false,
  },
];

const TarefaItem = ({ item, onToggle }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => onToggle(item.id)}
        accessibilityRole="checkbox"
        accessibilityLabel={
          item.concluida ? "Tarefa concluída" : "Tarefa não concluída"
        }
        accessibilityState={{ checked: item.concluida }}
      >
        {item.concluida && (
          <View style={styles.checkIcon}>
            {/* Ícone de check */}
            <Text>✔</Text>
          </View>
        )}
      </TouchableOpacity>
      <View style={styles.tarefaTextoContainer}>
        <Text style={styles.tarefaTexto}>{item.tarefa}</Text>
        <Text style={styles.dataTexto}>{item.data}</Text>
      </View>
    </View>
  );
};

const ListaTarefas = () => {
  const [listaTarefas, setListaTarefas] = React.useState(tarefas);

  const toggleTarefa = (id) => {
    const novaLista = listaTarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return { ...tarefa, concluida: !tarefa.concluida };
      }
      return tarefa;
    });
    setListaTarefas(novaLista);
  };

  return (
    <FlatList
      data={listaTarefas.sort((a, b) => new Date(b.data) - new Date(a.data))}
      renderItem={({ item }) => (
        <TarefaItem item={item} onToggle={toggleTarefa} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  checkbox: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  checkIcon: {
    width: 24,
    height: 24,
    backgroundColor: "#4CAF50", // Verde para indicar concluído
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  tarefaTextoContainer: {
    marginLeft: 16,
  },
  tarefaTexto: {
    fontSize: 16,
    color: "#000",
  },
  dataTexto: {
    fontSize: 14,
    color: "#333",
  },
});

export default ListaTarefas;
