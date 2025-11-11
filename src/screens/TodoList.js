// src/screens/TodoList.js
import React, { useState } from "react";
import { 
  View, 
  TextInput, 
  Button, 
  StyleSheet, 
  SafeAreaView, 
  FlatList, 
  Text 
} from "react-native";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Doctor Appointment", completed: true },
    { id: 2, text: "Meeting at School", completed: false },
  ]);
  const [text, setText] = useState("");

  function addTask() {
    if (text.trim().length === 0) return; // Mencegah task kosong
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
    setText("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // Fungsi untuk merender item di FlatList
  const renderItem = ({ item }) => (
    <TodoItem
      task={item}
      deleteTask={deleteTask}
      toggleCompleted={toggleCompleted}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My To-Do List</Text>
      
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          value={text} 
          onChangeText={setText} 
          placeholder="New Task" 
        />
        <Button title="Add" onPress={addTask} />
      </View>

      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Latar belakang abu-abu muda
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  list: {
    flex: 1,
  }
});

export default TodoList;