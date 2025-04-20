import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
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

const TarefaItem = ({ item, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={() => onPress(item.id)}>
    <View style={styles.itemConteudo}>
      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => onPress(item.id)}
      >
        <View
          style={[
            styles.checkboxPlaceholder,
            { backgroundColor: item.concluida ? "#8BC34A" : "transparent" },
          ]}
          accessibilityLabel={
            item.concluida ? "Tarefa concluída" : "Tarefa não concluída"
          }
        />
      </TouchableOpacity>
      <View style={styles.tarefaTexto}>
        <Text style={styles.tarefa}>{item.tarefa}</Text>
        <Text style={styles.data}>{item.data}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const ListaTarefas = () => {
  const handleTarefaPress = (id) => {
    console.log(`Tarefa com ID ${id} pressionada`);
    // Aqui você pode adicionar a lógica para marcar a tarefa como concluída ou navegar para os detalhes da tarefa
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tarefas.sort((a, b) => new Date(b.data) - new Date(a.data))} // Ordena por data decrescente
        renderItem={({ item }) => (
          <TarefaItem item={item} onPress={handleTarefaPress} />
        )}
        keyExtractor={(item) => item.id}
        accessibilityLabel="Lista de tarefas"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF", // Contraste adequado com o texto
  },
  item: {
    backgroundColor: "#F0F0F0", // Contraste adequado com o texto
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    minHeight: 48, // Tamanho mínimo para alvo de toque
  },
  itemConteudo: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    minWidth: 48, // Tamanho mínimo para alvo de toque
    minHeight: 48, // Tamanho mínimo para alvo de toque
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxPlaceholder: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#000",
  },
  tarefaTexto: {
    flex: 1,
    marginLeft: 16,
  },
  tarefa: {
    fontSize: 16,
    color: "#000000", // Contraste adequado com o fundo
  },
  data: {
    fontSize: 14,
    color: "#666666", // Contraste adequado com o fundo
  },
});

export default ListaTarefas;
