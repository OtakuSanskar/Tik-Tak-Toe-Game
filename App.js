import React from 'react';
import { StyleSheet, View } from 'react-native';
import Board from './src/components/Board';
import MainMenu from './src/screens/MainMenu';
import { UI_MARGIN } from './src/Design';

export default function App() {
  const [isPlay, setPlay] = React.useState(false);
  return (
    <View style={styles.app}>
      {isPlay ? <Board setPlay={setPlay} /> : <MainMenu setPlay={setPlay} /> }
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 0.95,
    margin: UI_MARGIN,
    justifyContent: 'center',
  },
});
