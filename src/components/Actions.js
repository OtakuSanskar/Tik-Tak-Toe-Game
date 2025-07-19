import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Actions = () => {
  return (
    <View>
      <Text>Actions</Text>
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({
  view: {
    flexDirection: "column",
    alignItems: "center",
  },
  viewRow: { flexDirection: "row" },
  button: {
    marginTop: 30,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 3,
    marginHorizontal: 20,
  },
  restart: {
    backgroundColor: BUTTON_RESTART_COLOR,
  },
  clearScore: {
    backgroundColor: BUTTON_CLEAR_SCORE_COLOR,
  },
  text: {
    fontSize: 19,
    color: "white",
  },
});
