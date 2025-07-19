import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Board = () => {
  return (
    <View>
      <Text>Board</Text>
    </View>
  );
};

export default Board;

const styles = StyleSheet.create({
  board: {
    alignItems: "center",
  },
  boardRow: {
    flexDirection: "row",
    justifyContent: "center",
    textAlignVertical: "center",
  },
});
