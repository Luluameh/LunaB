import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const About = () => {
  const companyLogoUrl =
    "https://images.pexels.com/photos/5872378/pexels-photo-5872378.jpeg?auto=compress&cs=tinysrgb&w=800";

  return (
    <View style={styles.container}>
      <Image source={{ uri: companyLogoUrl }} style={styles.logo} />
      <Text style={styles.heading}>About LunaB</Text>
      <Text style={styles.description}>
        LunaB specializes in providing vacation rentals of houses, villas, and
        apartments located near you, ensuring the best accommodations for your
        needs.
      </Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: "contain", // Adjust resizeMode based on your image aspect ratio
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    textAlign: "center",
    fontSize: 18,
    lineHeight: 24,
  },
});
