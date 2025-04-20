import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";

const ProdutoDetalhes = () => {
  // Informações hardcoded do produto
  const produto = {
    nome: "Camiseta Estampada",
    descricao:
      "Camiseta confortável e estilosa com estampa moderna. Ideal para o seu dia a dia.",
    preco: "R$ 59,90",
    imagem: "https://via.placeholder.com/300", // Substitua com a URL da imagem do produto
  };

  // Função para fornecer acessibilidade de voz para botões
  const accessibilityLabel = (label) => {
    return label ? `${label} - toque para interagir` : "Elemento interativo";
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: produto.imagem }}
        style={styles.imagem}
        accessibilityLabel={`Imagem do produto: ${produto.nome}`}
        accessibilityRole="image"
      />

      <Text
        style={styles.nome}
        accessibilityRole="header"
        accessibilityLabel={produto.nome}
      >
        {produto.nome}
      </Text>

      <Text style={styles.descricao} accessibilityLabel={produto.descricao}>
        {produto.descricao}
      </Text>

      <Text style={styles.preco} accessibilityLabel={`Preço: ${produto.preco}`}>
        {produto.preco}
      </Text>

      <View style={styles.botoesContainer}>
        <TouchableOpacity
          style={styles.botao}
          accessibilityLabel={accessibilityLabel("Adicionar ao carrinho")}
          accessible={true}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} // Tamanho de alvo de toque adequado
          accessibilityRole="button"
        >
          <Text style={styles.textoBotao}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          accessibilityLabel={accessibilityLabel("Adicionar aos favoritos")}
          accessible={true}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} // Tamanho de alvo de toque adequado
          accessibilityRole="button"
        >
          <Text style={styles.textoBotao}>Adicionar aos Favoritos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  imagem: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
  descricao: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
  },
  preco: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e74c3c",
    marginBottom: 20,
    textAlign: "center",
  },
  botoesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botao: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
  },
  textoBotao: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});

export default ProdutoDetalhes;
