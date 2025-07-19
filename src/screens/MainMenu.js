import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MainMenu = () => {
  return (
    <View>
      <Text>MainMenu</Text>
    </View>
  );
};

export default MainMenu;

const styles = StyleSheet.create({
  mainMenuView: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    letterSpacing: 5,
    marginBottom: 65,
  },
  button: { borderRadius: 5, backgroundColor: "green" },
  text: {
    color: "white",
    fontSize: 20,
    paddingVertical: 8,
    paddingHorizontal: 35,
  },
});
