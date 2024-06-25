// /app/details/[house].js
import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { useNavigation } from "expo-router";
import { useLocalSearchParams } from "expo-router";

const DetailsScreen = () => {
  const { house } = useLocalSearchParams();
  const navigation = useNavigation();
  console.log(house)
  return (
    <View style={styles.container}>
      <Button title="Back to Home" onPress={() => navigation.goBack()} />
      {house && (
        <>
          <Image source={{ uri: house.image }} style={styles.image} />
          <Text style={styles.name}>{house.name}</Text>
          <Text style={styles.price}>{house.price}</Text>
          <Text style={styles.details}>
            {house.bedrooms} Bedrooms - {house.bathrooms} Bathrooms
          </Text>
          <Text style={styles.category}>{house.category}</Text>
          {house.address && <Text style={styles.address}>{house.address}</Text>}
          {house.distance && (
            <Text style={styles.distance}>{house.distance}</Text>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
  },
  price: {
    fontSize: 18,
    color: "#777",
    marginVertical: 8,
  },
  details: {
    fontSize: 16,
    color: "#555",
  },
  category: {
    fontSize: 16,
    color: "#555",
  },
  address: {
    fontSize: 16,
    color: "#555",
  },
  distance: {
    fontSize: 16,
    color: "#555",
  },
});

export default DetailsScreen;
