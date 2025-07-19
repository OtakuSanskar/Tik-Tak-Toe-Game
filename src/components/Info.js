import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Info = () => {
  return (
    <View>
      <Text>Info</Text>
    </View>
  )
}

export default Info

const styles = StyleSheet.create({ view: {
    width: "98%",
    flexDirection: "row",
  },
  scoreTitle: {
    fontWeight: "bold",
    letterSpacing: 5,
  },
  score: {
    width: "50%",
    fontSize: 23,
  },
  right: {
    textAlign: "right",
  },
  status: {
    textAlign: "center",
    padding: 15,
    paddingTop: 35,
    fontSize: 30,
  },})