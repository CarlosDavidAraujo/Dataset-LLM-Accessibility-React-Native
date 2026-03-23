# Acessibilidade

Tanto o Android quanto o iOS fornecem APIs para integrar aplicativos com tecnologias assistivas, como os leitores de tela integrados VoiceOver (iOS) e TalkBack (Android). O React Native possui APIs complementares que permitem que seu aplicativo acomode todos os usuários.

> **info**
> Android e iOS diferem ligeiramente em suas abordagens e, portanto, as implementações do React Native podem variar de acordo com a plataforma.

## Propriedades de acessibilidade

### accessible

Quando `true`, indica que a visualização é detectável por tecnologias assistivas, como leitores de tela e teclados de hardware. Observe que isso não significa necessariamente que a visualização será focada pelo VoiceOver ou TalkBack. Existem várias razões para isso, como o VoiceOver não permitir elementos de acessibilidade aninhados ou o TalkBack optar por focar em algum elemento pai.

Por padrão, todos os elementos tocáveis são acessíveis.

No Android, `accessible` será traduzido para o nativo `focusable`. No iOS, ele se traduz no nativo `isAccessibilityElement`.

```tsx
<View>
  <View accessible={true} />
  <View />
</View>
```

No exemplo acima, o foco de acessibilidade está disponível apenas na primeira visualização filha com a propriedade `accessible`, e não para o pai ou irmão sem `accessible`.

### accessibilityLabel

Quando uma visualização é marcada como acessível, é uma boa prática definir um `accessibilityLabel` na visualização, para que as pessoas que usam VoiceOver ou TalkBack saibam qual elemento selecionaram. Um leitor de tela verbalizará essa string quando o elemento associado for selecionado.

Para usar, defina a propriedade `accessibilityLabel` para uma string personalizada em sua View, Text ou Touchable:

```tsx
<TouchableOpacity
  accessible={true}
  accessibilityLabel="Toque-me!"
  onPress={onPress}
>
  <View style={styles.button}>
    <Text style={styles.buttonText}>Pressione-me!</Text>
  </View>
</TouchableOpacity>
```

No exemplo acima, o elemento `accessibilityLabel` no TouchableOpacity teria como padrão "Pressione-me!". O rótulo é construído concatenando todos os filhos do nó de Texto separados por espaços.

### accessibilityLabelledBy (Android)

Uma referência a outro elemento `nativeID` usado para construir formulários complexos. O valor de `accessibilityLabelledBy` deve corresponder ao `nativeID` do elemento relacionado:

```tsx
<View>
  <Text nativeID="formLabel">Rótulo para Campo de Entrada</Text>
  <TextInput accessibilityLabel="entrada" accessibilityLabelledBy="formLabel" />
</View>
```

No exemplo acima, o leitor de tela anuncia "Entrada, Caixa de Edição para Rótulo para Campo de Entrada" ao focar no TextInput.

### accessibilityHint

Uma dica de acessibilidade pode ser usada para fornecer contexto adicional ao usuário sobre o resultado da ação quando não estiver claro apenas pelo rótulo de acessibilidade.

Forneça à propriedade `accessibilityHint` uma string personalizada em sua View, Text ou Touchable:

```tsx
<TouchableOpacity
  accessible={true}
  accessibilityLabel="Voltar"
  accessibilityHint="Navega para a tela anterior"
  onPress={onPress}
>
  <View style={styles.button}>
    <Text style={styles.buttonText}>Voltar</Text>
  </View>
</TouchableOpacity>
```

**iOS**
No exemplo acima, o VoiceOver lerá a dica após o rótulo, se o usuário tiver dicas ativadas nas configurações do VoiceOver do dispositivo. Leia mais sobre as diretrizes para `accessibilityHint` na documentação do desenvolvedor iOS.

**Android**
No exemplo acima, o TalkBack lerá a dica após o rótulo. Neste momento, as dicas não podem ser desativadas no Android.

### accessibilityLanguage (iOS)

Ao usar a propriedade `accessibilityLanguage`, o leitor de tela entenderá qual idioma usar ao ler o rótulo, valor e dica do elemento. O valor da string fornecido deve seguir a especificação BCP 47.

```tsx
<View
  accessible={true}
  accessibilityLabel="Pizza"
  accessibilityLanguage="it-IT"
>
  <Text>🍕</Text>
</View>
```

### accessibilityIgnoresInvertColors (iOS)

Inverter as cores da tela é um recurso de acessibilidade disponível no iOS e iPadOS para pessoas com daltonismo, baixa visão ou deficiência visual. Se houver uma visualização que você não deseja inverter quando essa configuração estiver ativada, possivelmente uma foto, defina essa propriedade como `true`.

### accessibilityLiveRegion (Android)

Quando os componentes mudam dinamicamente, queremos que o TalkBack alerte o usuário final. Isso é possível pela propriedade `accessibilityLiveRegion`. Pode ser definido como `none`, `polite` e `assertive`:

- **none**: Os serviços de acessibilidade não devem anunciar alterações nesta visualização.
- **polite**: Os serviços de acessibilidade devem anunciar alterações nesta visualização.
- **assertive**: Os serviços de acessibilidade devem interromper a fala em andamento para anunciar imediatamente as alterações nesta visualização.

```tsx
<TouchableWithoutFeedback onPress={addOne}>
  <View style={styles.embedded}>
    <Text>Clique aqui</Text>
  </View>
</TouchableWithoutFeedback>
<Text accessibilityLiveRegion="polite">
  Clicado {count} vezes
</Text>
```

No exemplo acima, o método `addOne` altera a variável de estado `count`. Quando o TouchableWithoutFeedback é acionado, o TalkBack lê o texto na visualização Text por causa de sua propriedade `accessibilityLiveRegion="polite"`.

### accessibilityRole

`accessibilityRole` comunica o propósito de um componente ao usuário da tecnologia assistiva.

`accessibilityRole` pode ser um dos seguintes:

- **adjustable**: Usado quando um elemento pode ser "ajustado" (ex: um controle deslizante).
- **alert**: Usado quando um elemento contém texto importante a ser apresentado ao usuário.
- **button**: Usado quando o elemento deve ser tratado como um botão.
- **checkbox**: Usado quando um elemento representa uma caixa de seleção que pode ser marcada, desmarcada ou ter um estado marcado misto.
- **combobox**: Usado quando um elemento representa uma caixa de combinação, que permite ao usuário selecionar entre várias opções.
- **header**: Usado quando um elemento atua como um cabeçalho para uma seção de conteúdo (ex: o título de uma barra de navegação).
- **image**: Usado quando o elemento deve ser tratado como uma imagem. Pode ser combinado com um botão ou link.
- **imagebutton**: Usado quando o elemento deve ser tratado como um botão e também é uma imagem.
- **keyboardkey**: Usado quando o elemento atua como uma tecla de teclado.
- **link**: Usado quando o elemento deve ser tratado como um link.
- **menu**: Usado quando o componente é um menu de opções.
- **menubar**: Usado quando um componente é um contêiner de vários menus.
- **menuitem**: Usado para representar um item dentro de um menu.
- **none**: Usado quando o elemento não tem papel.
- **progressbar**: Usado para representar um componente que indica o progresso de uma tarefa.
- **radio**: Usado para representar um botão de rádio.
- **radiogroup**: Usado para representar um grupo de botões de rádio.
- **scrollbar**: Usado para representar uma barra de rolagem.
- **search**: Usado quando um elemento de campo de texto também deve ser tratado como um campo de pesquisa.
- **spinbutton**: Usado para representar um botão que abre uma lista de opções.
- **summary**: Usado quando um elemento pode ser usado para fornecer um resumo rápido das condições atuais no aplicativo quando o aplicativo é iniciado pela primeira vez.
- **switch**: Usado para representar um interruptor que pode ser ligado e desligado.
- **tab**: Usado para representar uma aba.
- **tablist**: Usado para representar uma lista de abas.
- **text**: Usado quando o elemento deve ser tratado como texto estático que não pode mudar.
- **timer**: Usado para representar um cronômetro.
- **togglebutton**: Usado para representar um botão de alternância. Deve ser usado com accessibilityState marcado para indicar se o botão está ativado ou desativado.
- **toolbar**: Usado para representar uma barra de ferramentas (um contêiner de botões de ação ou componentes).
- **grid**: Usado com ScrollView, VirtualizedList, FlatList ou SectionList para representar uma grade. Adiciona os anúncios de entrada/saída de grade ao GridView do Android.

### accessibilityShowsLargeContentViewer (iOS)

Um valor booleano que determina se o visualizador de conteúdo grande é mostrado quando o usuário executa um toque longo no elemento.

Disponível no iOS 13.0 e posterior.

### accessibilityLargeContentTitle (iOS)

Uma string que será usada como o título do visualizador de conteúdo grande quando for mostrado.

Requer que `accessibilityShowsLargeContentViewer` seja definido como `true`.

```tsx
<View
  accessibilityShowsLargeContentViewer={true}
  accessibilityLargeContentTitle="Aba Início"
>
  <Text>Início</Text>
</View>
```

### accessibilityState

Descreve o estado atual de um componente para o usuário da tecnologia assistiva.

`accessibilityState` é um objeto. Ele contém os seguintes campos:

| Nome         | Descrição                                                                                                                                      | Tipo               | Obrigatório |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------- | :----------------- | :---------- |
| **disabled** | Indica se o elemento está desativado ou não.                                                                                                   | boolean            | Não         |
| **selected** | Indica se um elemento selecionável está atualmente selecionado ou não.                                                                         | boolean            | Não         |
| **checked**  | Indica o estado de um elemento verificável. Este campo pode assumir um booleano ou a string "mixed" para representar caixas de seleção mistas. | boolean ou 'mixed' | Não         |
| **busy**     | Indica se um elemento está atualmente ocupado ou não.                                                                                          | boolean            | Não         |
| **expanded** | Indica se um elemento expansível está atualmente expandido ou recolhido.                                                                       | boolean            | Não         |

Para usar, defina o `accessibilityState` para um objeto com uma definição específica.

### accessibilityValue

Representa o valor atual de um componente. Pode ser uma descrição textual do valor de um componente ou, para componentes baseados em intervalo, como controles deslizantes e barras de progresso, contém informações de intervalo (mínimo, atual e máximo).

`accessibilityValue` é um objeto. Ele contém os seguintes campos:

| Nome     | Descrição                                                                                      | Tipo    | Obrigatório                            |
| :------- | :--------------------------------------------------------------------------------------------- | :------ | :------------------------------------- |
| **min**  | O valor mínimo do intervalo deste componente.                                                  | integer | Obrigatório se `now` estiver definido. |
| **max**  | O valor máximo do intervalo deste componente.                                                  | integer | Obrigatório se `now` estiver definido. |
| **now**  | O valor atual do intervalo deste componente.                                                   | integer | Não                                    |
| **text** | Uma descrição textual do valor deste componente. Substituirá `min`, `now` e `max` se definido. | string  | Não                                    |

### accessibilityViewIsModal (iOS)

Um valor booleano que indica se o VoiceOver deve ignorar os elementos dentro das visualizações que são irmãs do receptor.

Por exemplo, em uma janela que contém visualizações irmãs A e B, definir `accessibilityViewIsModal` como `true` na visualização B faz com que o VoiceOver ignore os elementos na visualização A. Por outro lado, se a visualização B contiver uma visualização filha C e você definir `accessibilityViewIsModal` como `true` na visualização C, o VoiceOver não ignorará os elementos na visualização A.

### accessibilityElementsHidden (iOS)

Um valor booleano indicando se o elemento de acessibilidade fornecido e quaisquer elementos de acessibilidade que ele contém estão ocultos.

Por exemplo, em uma janela que contém visualizações irmãs A e B, definir `accessibilityElementsHidden` como `true` na visualização B faz com que o VoiceOver ignore a visualização B e quaisquer elementos que ela contenha. Isso é semelhante à propriedade Android `importantForAccessibility="no-hide-descendants"`.

### aria-valuemax

Representa o valor máximo para componentes baseados em intervalo, como controles deslizantes e barras de progresso.

### aria-valuemin

Representa o valor mínimo para componentes baseados em intervalo, como controles deslizantes e barras de progresso.

### aria-valuenow

Representa o valor atual para componentes baseados em intervalo, como controles deslizantes e barras de progresso.

### aria-valuetext

Representa a descrição textual do componente.

### aria-busy

Indica que um elemento está sendo modificado e que as tecnologias assistivas podem querer esperar até que as alterações sejam concluídas antes de informar o usuário sobre a atualização.

| Tipo    | Padrão |
| :------ | :----- |
| boolean | false  |

### aria-checked

Indica o estado de um elemento verificável. Este campo pode assumir um booleano ou a string "mixed" para representar caixas de seleção mistas.

| Tipo             | Padrão |
| :--------------- | :----- |
| boolean, 'mixed' | false  |

### aria-disabled

Indica que o elemento é perceptível, mas desativado, portanto, não é editável ou operável de outra forma.

| Tipo    | Padrão |
| :------ | :----- |
| boolean | false  |

### aria-expanded

Indica se um elemento expansível está atualmente expandido ou recolhido.

| Tipo    | Padrão |
| :------ | :----- |
| boolean | false  |

### aria-hidden

Indica se o elemento está oculto das tecnologias assistivas.

Por exemplo, em uma janela que contém visualizações irmãs A e B, definir `aria-hidden` como `true` na visualização B faz com que o VoiceOver ignore o elemento B e seus filhos.

| Tipo    | Padrão |
| :------ | :----- |
| boolean | false  |

### aria-label

Define um valor de string que pode ser usado para nomear um elemento.

| Tipo   |
| :----- |
| string |

### aria-labelledby (Android)

Identifica o elemento que rotula o elemento ao qual é aplicado. O valor de `aria-labelledby` deve corresponder ao `nativeID` do elemento relacionado:

```tsx
<View>
  <Text nativeID="formLabel">Rótulo para Campo de Entrada</Text>
  <TextInput aria-label="entrada" aria-labelledby="formLabel" />
</View>
```

| Tipo   |
| :----- |
| string |

### aria-live (Android)

Indica que um elemento será atualizado e descreve os tipos de atualizações que os agentes do usuário, tecnologias assistivas e o usuário podem esperar da região ativa.

- **off**: Os serviços de acessibilidade não devem anunciar alterações nesta visualização.
- **polite**: Os serviços de acessibilidade devem anunciar alterações nesta visualização.
- **assertive**: Os serviços de acessibilidade devem interromper a fala em andamento para anunciar imediatamente as alterações nesta visualização.

| Tipo                               | Padrão |
| :--------------------------------- | :----- |
| enum('assertive', 'off', 'polite') | 'off'  |

### aria-modal (iOS)

Valor booleano indicando se o VoiceOver deve ignorar os elementos dentro das visualizações que são irmãs do receptor.

| Tipo    | Padrão |
| :------ | :----- |
| boolean | false  |

### aria-selected

Indica se um elemento selecionável está atualmente selecionado ou não.

| Tipo    |
| :------ |
| boolean |

### experimental_accessibilityOrder

**Experimental** 🧪
Esta API é experimental. APIs experimentais podem conter bugs e provavelmente mudarão em uma versão futura do React Native. Não as use em produção.

> **nota**
> Por uma questão de brevidade, o layout é excluído nos exemplos a seguir, embora dite a ordem de foco padrão. Assuma que a ordem do documento corresponde à ordem do layout.

`experimental_accessibilityOrder` permite definir a ordem em que as tecnologias assistivas focam os componentes descendentes. É uma matriz de `nativeID`s que são definidos nos componentes cuja ordem você está controlando. Por exemplo:

```tsx
<View experimental_accessibilityOrder={["B", "C", "A"]}>
  <View accessible={true} nativeID="A" />
  <View accessible={true} nativeID="B" />
  <View accessible={true} nativeID="C" />
</View>
```

As tecnologias assistivas focarão a View com `nativeID` de B, depois C, depois A.

`experimental_accessibilityOrder` não "ativará" a acessibilidade para os componentes que referencia, isso ainda precisa ser feito. Portanto, se removermos `accessible={true}` em C acima assim:

```tsx
<View experimental_accessibilityOrder={["B", "C", "A"]}>
  <View accessible={true} nativeID="A" />
  <View accessible={true} nativeID="B" />
  <View nativeID="C" />
</View>
```

então a nova ordem será B e depois A, mesmo que C ainda esteja em `experimental_accessibilityOrder`.

`experimental_accessibilityOrder` "desativará" a acessibilidade de componentes que não referencia, no entanto.

```tsx
<View experimental_accessibilityOrder={["B", "C", "A"]}>
  <View accessible={true} nativeID="A" />
  <View accessible={true} nativeID="B" />
  <View accessible={true} nativeID="C" />
  <View accessible={true} nativeID="D" />
</View>
```

A ordem do exemplo acima seria B, C, A. D nunca será focado. Nesse sentido, `experimental_accessibilityOrder` é exaustivo.

Ainda existem razões válidas para incluir um componente não acessível em `experimental_accessibilityOrder`. Considere:

```tsx
<View experimental_accessibilityOrder={["B", "C", "A"]}>
  <View accessible={true} nativeID="A" />
  <View accessible={true} nativeID="B" />
  <View nativeID="C">
    <View accessible={true} nativeID="D" />
    <View accessible={true} nativeID="E" />
    <View accessible={true} nativeID="F" />
  </View>
</View>
```

A ordem de foco será B, D, E, F, A. Mesmo que D, E e F não sejam referenciados diretamente em `experimental_accessibilityOrder`, C é referenciado diretamente. Nesta instância, C em um contêiner de acessibilidade - contém elementos acessíveis, mas não é acessível em si. Se um contêiner de acessibilidade for referenciado em `experimental_accessibilityOrder`, a ordem padrão dos elementos que ele contém será aplicada. Nesse sentido, `experimental_accessibilityOrder` é aninhável.

`experimental_accessibilityOrder` também pode referenciar outro componente com `experimental_accessibilityOrder`:

```tsx
<View experimental_accessibilityOrder={["B", "C", "A"]}>
  <View accessible={true} nativeID="A" />
  <View accessible={true} nativeID="B" />
  <View nativeID="C" experimental_accessibilityOrder={["F", "E", "D"]}>
    <View accessible={true} nativeID="D" />
    <View accessible={true} nativeID="E" />
    <View accessible={true} nativeID="F" />
  </View>
</View>
```

A ordem de foco será B, F, E, D, A.

Um componente não pode ser um contêiner de acessibilidade e um elemento de acessibilidade (`accessible={true}`) ao mesmo tempo. Portanto, se tivermos:

```tsx
<View experimental_accessibilityOrder={["B", "C", "A"]}>
  <View accessible={true} nativeID="A" />
  <View accessible={true} nativeID="B" />
  <View
    accessible={true}
    nativeID="C"
    experimental_accessibilityOrder={["F", "E", "D"]}
  >
    <View accessible={true} nativeID="D" />
    <View accessible={true} nativeID="E" />
    <View accessible={true} nativeID="F" />
  </View>
</View>
```

A ordem de foco seria B, C, A. D, E e F não estão mais em um contêiner, então a natureza exaustiva de `experimental_accessibilityOrder` significa que eles serão excluídos.

### importantForAccessibility (Android)

No caso de dois componentes de interface do usuário sobrepostos com o mesmo pai, o foco de acessibilidade padrão pode ter um comportamento imprevisível. A propriedade `importantForAccessibility` resolverá isso controlando se uma visualização dispara eventos de acessibilidade e se é relatada aos serviços de acessibilidade. Pode ser definido como `auto`, `yes`, `no` e `no-hide-descendants` (o último valor forçará os serviços de acessibilidade a ignorar o componente e todos os seus filhos).

```tsx
<View style={styles.container}>
  <View
    style={[styles.layout, { backgroundColor: "green" }]}
    importantForAccessibility="yes"
  >
    <Text>Primeiro layout</Text>
  </View>
  <View
    style={[styles.layout, { backgroundColor: "yellow" }]}
    importantForAccessibility="no-hide-descendants"
  >
    <Text>Segundo layout</Text>
  </View>
</View>
```

No exemplo acima, o layout amarelo e seus descendentes são completamente invisíveis para o TalkBack e todos os outros serviços de acessibilidade. Portanto, podemos usar visualizações sobrepostas com o mesmo pai sem confundir o TalkBack.

### onAccessibilityEscape (iOS)

Atribua esta propriedade a uma função personalizada que será chamada quando alguém executar o gesto "escape", que é um gesto em forma de Z com dois dedos. Uma função de escape deve voltar hierarquicamente na interface do usuário. Isso pode significar subir ou voltar em uma hierarquia de navegação ou descartar uma interface de usuário modal. Se o elemento selecionado não tiver uma função `onAccessibilityEscape`, o sistema tentará percorrer a hierarquia de visualização até encontrar uma visualização que tenha ou emitirá um som para indicar que não conseguiu encontrar uma.

### onAccessibilityTap (iOS)

Use esta propriedade para atribuir uma função personalizada a ser chamada quando alguém ativar um elemento acessível tocando duas vezes nele enquanto estiver selecionado.

### onMagicTap (iOS)

Atribua esta propriedade a uma função personalizada que será chamada quando alguém executar o gesto "toque mágico", que é um toque duplo com dois dedos. Uma função de toque mágico deve executar a ação mais relevante que um usuário poderia realizar em um componente. No aplicativo Telefone no iPhone, um toque mágico atende uma chamada telefônica ou encerra a atual. Se o elemento selecionado não tiver uma função `onMagicTap`, o sistema percorrerá a hierarquia de visualização até encontrar uma visualização que tenha.

### role

`role` comunica o propósito de um componente e tem precedência sobre a propriedade `accessibilityRole`.

`role` pode ser um dos seguintes:

- **alert**: Usado quando um elemento contém texto importante a ser apresentado ao usuário.
- **button**: Usado quando o elemento deve ser tratado como um botão.
- **checkbox**: Usado quando um elemento representa uma caixa de seleção que pode ser marcada, desmarcada ou ter um estado marcado misto.
- **combobox**: Usado quando um elemento representa uma caixa de combinação, que permite ao usuário selecionar entre várias opções.
- **grid**: Usado com ScrollView, VirtualizedList, FlatList ou SectionList para representar uma grade. Adiciona os anúncios de entrada/saída de grade ao GridView do Android.
- **heading**: Usado quando um elemento atua como um cabeçalho para uma seção de conteúdo (ex: o título de uma barra de navegação).
- **img**: Usado quando o elemento deve ser tratado como uma imagem. Pode ser combinado com um botão ou link, por exemplo.
- **link**: Usado quando o elemento deve ser tratado como um link.
- **list**: Usado para identificar uma lista de itens.
- **listitem**: Usado para identificar um item em uma lista.
- **menu**: Usado quando o componente é um menu de opções.
- **menubar**: Usado quando um componente é um contêiner de vários menus.
- **menuitem**: Usado para representar um item dentro de um menu.
- **none**: Usado quando o elemento não tem papel.
- **presentation**: Usado quando o elemento não tem papel.
- **progressbar**: Usado para representar um componente que indica o progresso de uma tarefa.
- **radio**: Usado para representar um botão de rádio.
- **radiogroup**: Usado para representar um grupo de botões de rádio.
- **scrollbar**: Usado para representar uma barra de rolagem.
- **searchbox**: Usado quando o elemento de campo de texto também deve ser tratado como um campo de pesquisa.
- **slider**: Usado quando um elemento pode ser "ajustado" (ex: um controle deslizante).
- **spinbutton**: Usado para representar um botão que abre uma lista de opções.
- **summary**: Usado quando um elemento pode ser usado para fornecer um resumo rápido das condições atuais no aplicativo quando o aplicativo é iniciado pela primeira vez.
- **switch**: Usado para representar um interruptor que pode ser ligado e desligado.
- **tab**: Usado para representar uma aba.
- **tablist**: Usado para representar uma lista de abas.
- **timer**: Usado para representar um cronômetro.
- **toolbar**: Usado para representar uma barra de ferramentas (um contêiner de botões de ação ou componentes).

### Ações de Acessibilidade

As ações de acessibilidade permitem que a tecnologia assistiva invoque programaticamente a(s) ação(ões) de um componente. Para oferecer suporte a ações de acessibilidade, um componente deve fazer duas coisas:

1. Definir a lista de ações que suporta através da propriedade `accessibilityActions`.
2. Implementar uma função `onAccessibilityAction` para lidar com solicitações de ação.

A propriedade `accessibilityActions` deve conter uma lista de objetos de ação. Cada objeto de ação deve conter os seguintes campos:

| Nome      | Tipo   | Obrigatório |
| :-------- | :----- | :---------- |
| **name**  | string | Sim         |
| **label** | string | Não         |

As ações representam ações padrão, como clicar em um botão ou ajustar um controle deslizante, ou ações personalizadas específicas para um determinado componente, como excluir uma mensagem de e-mail. O campo `name` é obrigatório para ações padrão e personalizadas, mas `label` é opcional para ações padrão.

Ao adicionar suporte para ações padrão, `name` deve ser um dos seguintes:

- **'magicTap'** - Apenas iOS - Enquanto o foco do VoiceOver está no componente ou dentro dele, o usuário tocou duas vezes com dois dedos.
- **'escape'** - Apenas iOS - Enquanto o foco do VoiceOver está no componente ou dentro dele, o usuário executou um gesto de esfregar com dois dedos (esquerda, direita, esquerda).
- **'activate'** - Ativar o componente. Isso deve executar a mesma ação com ou sem tecnologia assistiva. Envolvido quando um usuário de leitor de tela toca duas vezes no componente.
- **'increment'** - Incrementar um componente ajustável. No iOS, o VoiceOver gera essa ação quando o componente tem um papel de 'adjustable' e o usuário coloca o foco nele e desliza para cima. No Android, o TalkBack gera essa ação quando o usuário coloca o foco de acessibilidade no componente e pressiona o botão de aumentar volume.
- **'decrement'** - Decrementar um componente ajustável. No iOS, o VoiceOver gera essa ação quando o componente tem um papel de 'adjustable' e o usuário coloca o foco nele e desliza para baixo. No Android, o TalkBack gera essa ação quando o usuário coloca o foco de acessibilidade no componente e pressiona o botão de diminuir volume.
- **'longpress'** - Apenas Android - Esta ação é gerada quando o usuário coloca o foco de acessibilidade no componente, depois toca duas vezes e segura um dedo na tela. Isso deve executar a mesma ação com ou sem tecnologia assistiva.
- **'expand'** - Apenas Android - Esta ação "expande" o componente para que o TalkBack anuncie uma dica "expandida".
- **'collapse'** - Apenas Android - Esta ação "recolhe" o componente para que o TalkBack anuncie uma dica "recolhida".

O campo `label` é opcional para ações padrão e geralmente não é usado por tecnologias assistivas. Para ações personalizadas, é uma string localizada contendo uma descrição da ação a ser apresentada ao usuário.

Para lidar com solicitações de ação, um componente deve implementar uma função `onAccessibilityAction`. O único argumento para esta função é um evento contendo o nome da ação a ser executada. O exemplo abaixo do RNTester mostra como criar um componente que define e lida com várias ações personalizadas.

```tsx
<View
  accessible={true}
  accessibilityActions={[
    { name: "cut", label: "cortar" },
    { name: "copy", label: "copiar" },
    { name: "paste", label: "colar" },
  ]}
  onAccessibilityAction={(event) => {
    switch (event.nativeEvent.actionName) {
      case "cut":
        Alert.alert("Alerta", "ação de cortar com sucesso");
        break;
      case "copy":
        Alert.alert("Alerta", "ação de copiar com sucesso");
        break;
      case "paste":
        Alert.alert("Alerta", "ação de colar com sucesso");
        break;
    }
  }}
/>
```
