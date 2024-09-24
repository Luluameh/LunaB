import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { House } from "@/types";
import { Ionicons } from "@expo/vector-icons";
const DetailsScreen: React.FC = () => {
  const route = useRoute();
  const { house } = route.params as { house: House };
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: house.image }} style={styles.image} />
        <Text style={styles.name}>{house.name}</Text>
        {house.address && <Text style={styles.address}>{house.address}</Text>}
        {house.distance && (
          <Text style={styles.distance}>{house.distance}</Text>
        )}
        {house.price && <Text style={styles.price}>{house.price}</Text>}
        {house.bedrooms && (
          <Text style={styles.attributes}>
            {house.bedrooms} Bedrooms - {house.bathrooms} Bathrooms
          </Text>
        )}
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.descriptionText}>
          The 3 level house that has a modern design, has a large pool and a
          garage that fits up to four cars...
        </Text>
        <TouchableOpacity>
          <Text style={styles.showMoreText}>Show More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ownerContainer}>
        <Image
          source={{ uri: "https://example.com/owner-image.jpg" }}
          style={styles.ownerImage}
        />
        <View style={styles.ownerInfo}>
          <Text style={styles.ownerName}>Garry Allen</Text>
          <Text style={styles.ownerTitle}>Owner</Text>
        </View>
        <TouchableOpacity style={styles.contactButton}>
          <Ionicons name="call-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.messageButton}>
          <Ionicons name="chatbubble-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Button title="Back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },

  imageContainer: {
    position: "relative",
  },

  image: {
    width: 335,
    height: 305,
    borderRadius: 20,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginVertical: 8,
    position: "absolute",
    bottom: 60,
    left: 8,
  },
  address: {
    fontSize: 16,
    color: "#ffff",
    position: "absolute",
    bottom: 40,
    left: 8,
  },
  distance: {
    fontSize: 14,
    color: "#ffff",
    position: "absolute",
    bottom: 30,
    left: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 8,
    position: "absolute",
    bottom: 20,
    left: 8,
    color: "#fffff",
  },
  attributes: {
    fontSize: 16,
    marginTop: 8,
  },
  descriptionContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 14,
    color: "#666",
  },
  showMoreText: {
    color: "#007AFF",
    marginTop: 8,
  },
  ownerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  ownerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  ownerInfo: {
    marginLeft: 16,
    flex: 1,
  },
  ownerName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ownerTitle: {
    fontSize: 14,
    color: "#666",
  },
  contactButton: {
    backgroundColor: "#007AFF",
    padding: 5,
    borderRadius: 20,
    marginLeft: 8,
  },
  messageButton: {
    backgroundColor: "#007AFF",
    padding: 5,
    borderRadius: 20,
    marginLeft: 8,
  },
});

export default DetailsScreen;
