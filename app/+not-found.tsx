import React from "react";
import { View, Text, StyleSheet } from "react-native"; // Import necessary components from 'react-native'
import { Link, Stack } from "expo-router"; // Assuming 'expo-router' provides these components

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />{" "}
      {/* This line doesn't render anything, assuming it's meant for routing */}
      <View style={styles.container}>
        <Text style={styles.title}>This screen doesn't exist.</Text>{" "}
        {/* Changed 'type="title"' to 'style={styles.title}' */}
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>{" "}
          {/* Changed 'type="link"' to 'style={styles.linkText}' */}
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  linkText: {
    color: "blue",
    textDecorationLine: "underline",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
