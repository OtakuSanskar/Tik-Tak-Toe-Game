import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Square from "./Square";
import Actions from "./Actions";
import { calculateWinner, matchStatus, status } from "../GameLogic";
import Info from "./Info";

const Board = () => {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);
  const [isRestart, setRestart] = React.useState(true);
  const [score, setScore] = React.useState({ x: 0, o: 0 });
  const winner = calculateWinner(squares, false);
  const winnerColor = calculateWinner(squares, true);
  useEffect(() => {
    setRestart(false);
  }, []);

  matchStatus(winner, xIsNext, isRestart, setRestart, setScore, squares);

  const handleClick = (index) => {
    const _squares = squares.slice();
    if (calculateWinner(_squares, false) || _squares[index]) return;
    _squares[index] = xIsNext ? "X" : "O";
    setSquares(_squares);
    setXIsNext(!xIsNext);
  };

  const winnnerStyle = (i) => {
    if (winnerColor !== null) {
      return winnerColor.find((index) => index==i)
    }
  };
  const restart = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setRestart(false);
  }

  const clearScore = () => {
    setScore({ x: 0, o: 0 });
  }

  const renderSquare = (index) => {
    return (
      <Square
        isWin={winnnerStyle(index) == index}
        value={squares[index]}
        onClick={() => handleClick(index)}
      />
    );
  }

  return (
    <View style={styles.board}>
      <Info score={score} status= {status} />
      <View style={styles.boardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </View>
      <View style={styles.boardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </View>
      <View style={styles.boardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </View>
      <Actions
        restart={() => restart()}
        isRestart={isRestart}
        clearScore={() => clearScore()}
      />
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
