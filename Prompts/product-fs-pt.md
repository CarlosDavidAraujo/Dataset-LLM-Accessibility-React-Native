Exemplos de implementações para violações comuns de acessibilidade em React Native:

**Contraste de texto:**

- **Ruim:**
  - Texto: "Clique aqui"
  - TextStyle: { color: '#AAAAAA' }
  - BackgroundColor: '#FFFFFF'
- **Boa:**

  - Texto: "Clique aqui"
  - TextStyle: { color: '#000000' }
  - BackgroundColor: '#FFFFFF'
  - Descrição: A taxa de contraste entre o texto preto e o fundo branco atende aos padrões WCAG AA, que exigem uma taxa de contraste mínima de 4.5:1 para texto normal e 3:1 para texto grande.

- **Ruim:**
  - Texto: "Notícia importante"
  - TextStyle: { color: '#003366' }
  - BackgroundColor: '#002244'
- **Boa:**
  - Texto: "Notícia importante"
  - TextStyle: { color: '#FFFFFF' }
  - BackgroundColor: '#003366'
  - Descrição: A taxa de contraste entre o texto branco e o fundo azul escuro atende aos padrões WCAG AAA, que exigem uma taxa de contraste mínima de 4.5:1 para texto normal e 3:1 para texto grande.

**Rótulos Ausentes (Rótulos de Acessibilidade):**

- **Ruim:**
  - Componente: `<TextInput />`
  - Propriedade de acessibilidade: Nenhuma
  - Descrição: Nenhum rótulo de acessibilidade. Leitores de tela não conseguem identificar o propósito do campo de entrada.
- **Boa:**

  - Componente:
    ```jsx
    <Text nativeID="usernameLabel">
         Nome de Usuário
    </Text>
    <TextInput
        accessibilityLabelledBy="usernameLabel"
        autoComplete="username"
        textContentType="username"
        placeholder="Digite o nome de usuário"
    />
    ```
  - Descrição: Uma propriedade `accessibilityLabelledBy` é fornecida, vinculando o `TextInput` a um rótulo `Text` visível, fornecendo contexto claro para leitores de tela.

- **Ruim:**
  - Componente: `<Button title="Enviar" />`
  - Propriedade de acessibilidade: Nenhuma.
  - Descrição: O botão tem texto, mas nenhuma informação de acessibilidade adicional para leitores de tela que possam precisar de contexto adicional.
- **Boa:**
  - Componente: `<Button title="Enviar" accessibilityLabel="Enviar dados do formulário" />`
  - Descrição: Uma propriedade `accessibilityLabel` fornece um rótulo descritivo claro para leitores de tela, melhorando a acessibilidade.

**Tamanho do Alvo de Toque (usando componentes Touchable e preenchimento/dimensões mínimas):**

- **Ruim:**
  - Componente: `<TouchableOpacity style={{ width: 16, height: 16 }}>...</TouchableOpacity>`
  - Descrição: O alvo de toque é muito pequeno para interação fácil.
- **Boa:**

  - Componente: `<TouchableOpacity style={{ minWidth: 40, minHeight: 40, padding: 4 }}>...</TouchableOpacity>`
  - Descrição: O alvo de toque atende ao tamanho mínimo recomendado de 48x48 pixels, com preenchimento adicional para espaçamento visual e interação mais fácil.

- **Ruim:**
  - Componente: `<TouchableOpacity><Image source={icon} /></TouchableOpacity>`
  - Descrição: Uma imagem dentro de um componente touchable sem tamanho ou preenchimento suficiente, dificultando o toque.
- **Boa:**
  - Componente: `<TouchableOpacity style={{ minWidth: 32, minHeight: 32, padding: 8 }}> <Image source={icon} accessibilityLabel="texto descritivo do ícone" /> </TouchableOpacity>`
  - Descrição: Um `TouchableOpacity` com dimensões mínimas e preenchimento, garantindo um alvo de toque grande o suficiente. A imagem também tem um `accessibilityLabel`.

**Cenário: Tela de detalhes de produto**
A tela exibe informações sobre um produto, incluindo seu nome, descrição, preço e imagem. Também inclui botões para adicionar ao carrinho ou aos favoritos.

Forneça a implementação "Boa" para este cenário de tela de detalhes de produto, abordando contraste de texto, rótulos ausentes e tamanho do alvo de toque.
