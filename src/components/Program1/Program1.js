import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Program1 = () => {
  return (
    <View>
      <Text style={styles.container}> Program 1</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    fontSize: 40,
    paddingTop: 40,
    textAlign: 'center',
  },
});

export default Program1;
