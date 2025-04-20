import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ProdutoDetalhes = () => {
  return (
    <View style={styles.container}>
      {/* Nome do Produto */}
      <Text style={styles.nomeProduto}>Tênis Esportivo</Text>

      {/* Descrição do Produto */}
      <Text style={styles.descricaoProduto}>
        Tênis esportivo ideal para corrida, com tecnologia de amortecimento e
        design aerodinâmico.
      </Text>

      {/* Preço do Produto */}
      <Text style={styles.precoProduto}>R$ 199,99</Text>

      {/* Imagem do Produto */}
      <Image
        source={{ uri: "https://exemplo.com/imagem-tenis.jpg" }}
        style={styles.imagemProduto}
        accessibilityLabel="Imagem do Tênis Esportivo"
      />

      {/* Botões */}
      <View style={styles.botoesContainer}>
        {/* Botão de Adicionar ao Carrinho */}
        <TouchableOpacity
          style={styles.botao}
          accessibilityLabel="Adicionar Tênis Esportivo ao carrinho"
        >
          <Text style={styles.textoBotao}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>

        {/* Botão de Adicionar aos Favoritos */}
        <TouchableOpacity
          style={styles.botao}
          accessibilityLabel="Adicionar Tênis Esportivo aos favoritos"
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
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  nomeProduto: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 8,
  },
  descricaoProduto: {
    fontSize: 16,
    color: "#333333",
    marginBottom: 16,
  },
  precoProduto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 16,
  },
  imagemProduto: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 16,
  },
  botoesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botao: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 150,
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotao: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default ProdutoDetalhes;
