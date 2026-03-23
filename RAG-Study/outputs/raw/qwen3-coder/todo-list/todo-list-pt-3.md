Aqui está uma tela de lista de tarefas acessível com ordenação por data, utilizando práticas de acessibilidade e componentes funcionais:

```typescript
import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  AccessibilityInfo,
  findNodeHandle,
} from 'react-native';

// Tipagem para os itens de tarefa
type TaskItem = {
  id: string;
  title: string;
  date: Date;
  completed: boolean;
};

const TaskListScreen: React.FC = () => {
  // Mock de dados iniciais
  const initialTasks: TaskItem[] = [
    {
      id: '1',
      title: 'Reunião com equipe',
      date: new Date(2023, 10, 15),
      completed: false,
    },
    {
      id: '2',
      title: 'Finalizar relatório',
      date: new Date(2023, 10, 10),
      completed: true,
    },
    {
      id: '3',
      title: 'Comprar mantimentos',
      date: new Date(2023, 10, 20),
      completed: false,
    },
  ];

  const [tasks, setTasks] = useState<TaskItem[]>(initialTasks);

  // Ordena tarefas por data (decrescente)
  const sortedTasks = useMemo(() => {
    return [...tasks].sort((a, b) => b.date.getTime() - a.date.getTime());
  }, [tasks]);

  // Alterna estado de conclusão da tarefa
  const toggleTaskCompletion = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    
    // Anunciar mudança para tecnologias assistivas
    const task = tasks.find(t => t.id === id);
    if (task) {
      const status = !task.completed ? 'completa' : 'incompleta';
      AccessibilityInfo.announceForAccessibility(`Tarefa ${task.title} marcada como ${status}`);
    }
  };

  // Renderiza um item da lista
  const renderItem = ({ item }: { item: TaskItem }) => {
    const formattedDate = item.date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    return (
      <TouchableOpacity
        accessibilityRole="checkbox"
        accessibilityState={{ checked: item.completed }}
        accessibilityLabel={`Tarefa: ${item.title}, Data: ${formattedDate}, Status: ${
          item.completed ? 'completa' : 'pendente'
        }`}
        accessibilityHint="Toque duas vezes para marcar como completa/incompleta"
        onPress={() => toggleTaskCompletion(item.id)}
        style={[styles.taskContainer, item.completed && styles.completedTask]}>
        <View style={styles.checkboxContainer}>
          <View
            style={[
              styles.checkbox,
              item.completed && styles.checked,
            ]}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.taskTitle, item.completed && styles.completedText]}>
            {item.title}
          </Text>
          <Text style={styles.taskDate}>{formattedDate}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container} accessibilityRole="list">
      <Text style={styles.header} accessibilityRole="header">
        Minhas Tarefas
      </Text>
      <FlatList
        data={sortedTasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        accessibilityLabel="Lista de tarefas ordenadas por data"
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  listContent: {
    paddingHorizontal: 16,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  completedTask: {
    opacity: 0.7,
  },
  checkboxContainer: {
    marginRight: 16,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#6200ee',
  },
  textContainer: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  taskDate: {
    fontSize: 14,
    color: '#666',
  },
});

export default TaskListScreen;
```

### Características de Acessibilidade Implementadas:

1. **Rótulos Descritivos**:
   - Cada item tem um `accessibilityLabel` que combina título, data e status
   - Instruções claras com `accessibilityHint`

2. **Papéis Semânticos**:
   - `accessibilityRole="checkbox"` para os itens
   - `accessibilityRole="list"` para o contêiner principal
   - `accessibilityRole="header"` para o título

3. **Estados de Acessibilidade**:
   - `accessibilityState={{ checked: item.completed }}` indica o status

4. **Feedback Auditivo**:
   - `AccessibilityInfo.announceForAccessibility` para anunciar mudanças de estado

5. **Navegação Tátil**:
   - Componentes `TouchableOpacity` com feedback visual
   - Feedback tátil automático no iOS

6. **Organização Visual**:
   - Ordenação clara por data (decrescente)
   - Indicadores visuais de conclusão (riscado e opacidade reduzida)
   - Contraste adequado para legibilidade

7. **Experiência Tátil**:
   - Sombras sutis para profundidade
   - Espaçamento adequado entre elementos
   - Feedback visual imediato ao interagir

Esta implementação segue as diretrizes WCAG 2.2 e as recomendações do guia de acessibilidade do React Native, proporcionando uma experiência inclusiva para todos os usuários.