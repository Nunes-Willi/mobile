import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

// export default function Header (props) {
//     return (
//       <View style={styles.header}>
//         <Text style={styles.headerText}>{props.titulo}</Text>
//       </View>
//     );
// }

export default class extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{this.props.titulo}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    padding: 20,
    width: "100%",
    alignContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "red",
    fontSize: 20,
  },
});
