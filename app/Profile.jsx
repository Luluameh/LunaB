import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// Replace with your company logo URL
const companyLogoUrl =
  "https://images.pexels.com/photos/7579206/pexels-photo-7579206.jpeg?auto=compress&cs=tinysrgb&w=800";

const CompanyProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: companyLogoUrl }} style={styles.logo} />
      <Text style={styles.companyName}>LunaB</Text>
      <View style={styles.separator} />
      <Text style={styles.description}>
        LunaB is dedicated to providing exceptional vacation rentals, including
        houses, villas, and apartments, in locations near you.
      </Text>
      <Text style={styles.contactInfo}>Contact us at: contact@lunab.com</Text>
    </View>
  );
};

export default CompanyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: "contain",
  },
  companyName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  description: {
    textAlign: "center",
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 20,
  },
  contactInfo: {
    textAlign: "center",
    fontSize: 16,
    color: "#555",
  },
});
