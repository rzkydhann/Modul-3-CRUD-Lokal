// src/screens/TodoItem.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TodoItem = ({ task, deleteTask, toggleCompleted }) => {
  return (
    <View style={styles.todoitem}>
      <Text style={[styles.todoitemtext, task.completed && styles.completed]}>
        {task.text}
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.completebutton, task.completed && styles.completedButtonActive]}
          onPress={() => toggleCompleted(task.id)}
        >
          <Text style={styles.buttonText}>
            {task.completed ? "Done" : "Do"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.deletebutton]}
          onPress={() => deleteTask(task.id)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoitem: {
    flexDirection: 'row', // PENTING: Membuat item tersusun horizontal
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 12,
    borderWidth: 1, // Ini cara React Native, bukan 'border: 1'
    borderColor: '#ddd',
    borderRadius: 6,
    backgroundColor: '#fff', // Latar belakang putih untuk item
  },
  todoitemtext: {
    flex: 1, // PENTING: Membuat teks mengambil sisa ruang
    marginRight: 10,
    color: '#333',
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#aaa', // Warna lebih pudar saat selesai
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginLeft: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  deletebutton: {
    backgroundColor: '#D04848', // Merah
  },
  completebutton: {
    backgroundColor: '#F3B95F', // Kuning/Oranye
  },
  completedButtonActive: {
    backgroundColor: '#28a745', // Hijau jika sudah selesai
  }
});

export default TodoItem;