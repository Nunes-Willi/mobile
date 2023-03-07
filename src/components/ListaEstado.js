import { Component } from "react";

export class ListaEstado extends Component {
  state = {
    estados: [
      { sigla: "SC", capital: "Florianopolis" },
      { sigla: "RS", capital: "Porto Alegre" },
      { sigla: "PR", capital: "Curitiba" },
      { sigla: "SP", capital: "São Paulo" },
      { sigla: "RJ", capital: "Rio de Janeiro" },
    ],
  };
  render() {
    <FlatList
      style={styles.task}
      data={this.state.estados}
      renderItem={({ item }) => <Text style={styles.texttask}>{item}</Text>}
    />;
  }
}
