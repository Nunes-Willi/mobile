// import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header.js";

export default function App() {
  const tasks = ["Tarefa1", "Tarefa2", "Tarefa3", "Tarefa4", "Tarefa5"];
  return (
    <View style={styles.container}>
      <Header titulo = "Lista de Tarefas"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  task: {
    padding: 15,
    width: "100%",
    backgroundColor: "grey",
  },
  texttask: {
    color: "pink",
  },
});
