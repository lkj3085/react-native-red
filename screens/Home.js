import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "rgb(206, 0, 0)",
    fontSize: 32,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
  },
  footer: {
    backgroundColor: "black",
    padding: 8,
  },
  footerText: {
    color: "white",
  },
});

function Home() {
  return (
    <View style={styles.wrap}>
      <View style={styles.main}>
        <Text style={styles.title}>RED</Text>
        <Text style={styles.description}>
          Welcome to Refrigerator Expiry Date
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2022. RED Co. all rights reserved.
        </Text>
      </View>
    </View>
  );
}

export default Home;
