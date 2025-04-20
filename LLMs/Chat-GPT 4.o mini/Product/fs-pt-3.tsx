import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ProdutoDetalhes = () => {
  return (
    <View style={styles.container}>
      {/* Nome do Produto */}
      <Text style={styles.produtoNome}>Camiseta Estampada</Text>

      {/* Imagem do Produto */}
      <Image
        source={{ uri: "https://example.com/imagem-do-produto.jpg" }}
        style={styles.produtoImagem}
        accessibilityLabel="Camiseta Estampada com design moderno"
      />

      {/* Descrição do Produto */}
      <Text style={styles.produtoDescricao}>
        Camiseta de algodão 100% com estampa de design exclusivo, ideal para o
        dia a dia.
      </Text>

      {/* Preço do Produto */}
      <Text style={styles.produtoPreco}>R$ 99,90</Text>

      {/* Botões */}
      <View style={styles.botoesContainer}>
        {/* Botão Adicionar ao Carrinho */}
        <TouchableOpacity
          style={styles.botao}
          accessibilityLabel="Adicionar ao carrinho"
        >
          <Text style={styles.botaoTexto}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>

        {/* Botão Adicionar aos Favoritos */}
        <TouchableOpacity
          style={styles.botao}
          accessibilityLabel="Adicionar aos favoritos"
        >
          <Text style={styles.botaoTexto}>Adicionar aos Favoritos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  produtoNome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000", // Contraste forte para garantir legibilidade
  },
  produtoImagem: {
    width: "100%",
    height: 200,
    marginVertical: 16,
    resizeMode: "cover",
  },
  produtoDescricao: {
    fontSize: 16,
    color: "#333333", // Contraste bom com o fundo branco
    marginBottom: 16,
  },
  produtoPreco: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF5733", // Contraste adequado com fundo branco
    marginBottom: 16,
  },
  botoesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botao: {
    minWidth: 150,
    minHeight: 48,
    padding: 12,
    backgroundColor: "#007BFF", // Cor contrastante com o fundo
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  botaoTexto: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});

export default ProdutoDetalhes;
