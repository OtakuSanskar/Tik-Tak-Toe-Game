import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import {
  BUTTON_RESTART_COLOR,
  BUTTON_CLEAR_SCORE_COLOR,
  ACTIVE_OPACITY,
} from "../Design";
import * as localization from "../Localization";

const Actions = ({ isRestart, restart, clearScore }) => {
  return (
    <View style={[styles.view, { display: isRestart ? "flex" : "none" }]}>
      <View style={styles.viewRow}>
        <TouchableOpacity
          activeOpacity={ACTIVE_OPACITY}
          style={[styles.button, styles.restart]}
          onPress={restart}
        >
          <Text style={styles.text}>{localization.default.t("restart")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={ACTIVE_OPACITY}
          style={[styles.button, styles.clearScore]}
          onPress={clearScore}
        >
          <Text style={styles.text}>
            {localization.default.t("clearScore")}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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

export default Actions;