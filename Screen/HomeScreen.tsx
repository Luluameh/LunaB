import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
//import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { useNavigation } from "expo-router";
import { RootStackParamList, House as HouseType } from "../types"; // Import the type with an alias
import { Fontisto, Ionicons } from "@expo/vector-icons";

interface House {
  id: string;
  name: string;
  address?: string;
  distance?: string;
  price?: string;
  bedrooms?: number;
  bathrooms?: number;
  category: string;
  image: string;
}

const HomeScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const nearYouData: House[] = [
    {
      id: "1",
      name: "Dreamsville House",
      address: "Jl. Sultan Iskandar Muda",
      distance: "1.8 km",
      category: "House",
      image:
        "https://images.pexels.com/photos/5008399/pexels-photo-5008399.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "2",
      name: "Ascot House",
      address: "Jl. Cilandak Tengah",
      distance: "3.2 km",
      category: "House",
      image:
        "https://images.pexels.com/photos/7283549/pexels-photo-7283549.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "3",
      name: "Sunset Villa",
      address: "Jl. Sunset Road",
      distance: "2.5 km",
      category: "Villa",
      image:
        "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "4",
      name: "Paradise Residence",
      address: "Jl. Paradise",
      distance: "4.0 km",
      category: "House",
      image:
        "https://images.pexels.com/photos/3625711/pexels-photo-3625711.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "5",
      name: "Emerald House",
      address: "Jl. Emerald",
      distance: "5.6 km",
      category: "House",
      image:
        "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "6",
      name: "Ocean View",
      address: "Jl. Ocean",
      distance: "6.1 km",
      category: "Villa",
      image:
        "https://images.pexels.com/photos/6316066/pexels-photo-6316066.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "7",
      name: "Greenland Villa",
      address: "Jl. Greenland",
      distance: "3.5 km",
      category: "Villa",
      image:
        "https://images.pexels.com/photos/7031723/pexels-photo-7031723.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "8",
      name: "Hilltop House",
      address: "Jl. Hilltop",
      distance: "7.2 km",
      category: "House",
      image:
        "https://images.pexels.com/photos/4940760/pexels-photo-4940760.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "9",
      name: "Forest Retreat",
      address: "Jl. Forest",
      distance: "8.4 km",
      category: "Villa",
      image:
        "https://images.pexels.com/photos/4916146/pexels-photo-4916146.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "10",
      name: "Lakeside Residence",
      address: "Jl. Lakeside",
      distance: "9.3 km",
      category: "House",
      image:
        "https://images.pexels.com/photos/6186812/pexels-photo-6186812.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const bestForYouData: House[] = [
    {
      id: "1",
      name: "Orchad House",
      price: "Rp. 2.500.000.000 / Year",
      bedrooms: 6,
      bathrooms: 4,
      category: "House",
      image:
        "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "2",
      name: "The Hollies House",
      price: "Rp. 2.000.000.000 / Year",
      bedrooms: 5,
      bathrooms: 2,
      category: "House",
      image:
        "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "3",
      name: "Maple Residence",
      price: "Rp. 3.000.000.000 / Year",
      bedrooms: 7,
      bathrooms: 5,
      category: "House",
      image:
        "https://images.pexels.com/photos/3813470/pexels-photo-3813470.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "4",
      name: "Pine Estate",
      price: "Rp. 2.800.000.000 / Year",
      bedrooms: 6,
      bathrooms: 3,
      category: "Villa",
      image:
        "https://images.pexels.com/photos/2374652/pexels-photo-2374652.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "5",
      name: "Cedar House",
      price: "Rp. 2.200.000.000 / Year",
      bedrooms: 5,
      bathrooms: 4,
      category: "House",
      image:
        "https://images.pexels.com/photos/891126/pexels-photo-891126.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "6",
      name: "Willow Villa",
      price: "Rp. 2.700.000.000 / Year",
      bedrooms: 6,
      bathrooms: 4,
      category: "Villa",
      image:
        "https://images.pexels.com/photos/4577696/pexels-photo-4577696.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "7",
      name: "Birch House",
      price: "Rp. 2.400.000.000 / Year",
      bedrooms: 5,
      bathrooms: 3,
      category: "House",
      image:
        "https://images.pexels.com/photos/5997992/pexels-photo-5997992.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "8",
      name: "Spruce Villa",
      price: "Rp. 3.100.000.000 / Year",
      bedrooms: 7,
      bathrooms: 5,
      category: "Villa",
      image:
        "https://images.pexels.com/photos/20841681/pexels-photo-20841681/free-photo-of-exterior-of-the-finnish-embassy-building-in-lisbon-portugal.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "9",
      name: "Fir Residence",
      price: "Rp. 2.900.000.000 / Year",
      bedrooms: 6,
      bathrooms: 4,
      category: "House",
      image:
        "https://images.pexels.com/photos/1509803/pexels-photo-1509803.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "10",
      name: "Oak Apart",
      price: "Rp. 2.600.000.000 / Year",
      bedrooms: 5,
      bathrooms: 3,
      category: "Apartment",
      image:
        "https://images.pexels.com/photos/1800387/pexels-photo-1800387.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "11",
      name: "Oak House",
      price: "Rp. 2.600.000.000 / Year",
      bedrooms: 6,
      bathrooms: 3,
      category: "Villa",
      image:
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const filteredNearYouData = nearYouData.filter((house) =>
    selectedCategory === "All" ? true : house.category === selectedCategory
  );

  const filteredBestForYouData = bestForYouData.filter((house) =>
    selectedCategory === "All" ? true : house.category === selectedCategory
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text>Location</Text>
          <Text style={styles.location}>LunaB</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="black" />{" "}
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <View style={styles.headerRight}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
        <TouchableOpacity style={styles.notificationIcon}>
          <Fontisto name="nav-icon-grid-a" size={24} color="white" />{" "}
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {["All", "House", "Apartment", "Villa"].map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategoryButton,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedCategoryText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View>
        <Text style={styles.sectionTitle}>Near from you</Text>
        <FlatList
          horizontal
          data={filteredNearYouData}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => {
                const selectedHouse = nearYouData.find(
                  (item) => item.id === item.id
                );
                navigation.navigate("details/details", { house: item });
              }}
            >
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.listItemImage}
                />

                <Text style={styles.listItemName}>{item.name}</Text>
                <Text style={styles.listItemAddress}>{item.address}</Text>
                <Text style={styles.listItemDistance}>{item.distance}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View>
        <Text style={styles.sectionTitle}>Best for you</Text>
        {filteredBestForYouData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.bestForYouItem}
            onPress={() => {
              navigation.navigate("details/details", { house: item });
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={styles.bestForYouImage}
            />
            <View style={styles.bestForYouDetails}>
              <Text style={styles.bestForYouName}>{item.name}</Text>
              <Text style={styles.bestForYouPrice}>{item.price}</Text>
              <Text style={styles.bestForYouAttributes}>
                {item.bedrooms} Bedrooms - {item.bathrooms} Bathrooms
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  location: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    height: 48,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginRight: 8,
    width: 278,
  },
  notificationIcon: {
    padding: 8,
    backgroundColor: "red",
    borderRadius: 8,
  },
  categoryButton: {
    padding: 8,
    backgroundColor: "#EEEEEE",
    borderRadius: 16,
    marginRight: 8,
  },
  selectedCategoryButton: {
    backgroundColor: "#000000",
    display: "flex",
    justifyContent: "space-between",
  },
  categoryText: {
    color: "#000000",
  },
  selectedCategoryText: {
    color: "#FFFFFF",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  //for the near you section
  imageContainer: {
    position: "relative",
  },
  listItem: {
    marginRight: 16,
    backgroundColor: "transparent",
    borderRadius: 8,
    overflow: "hidden",
  },
  listItemImage: {
    width: 222,
    height: 272,
  },
  listItemName: {
    position: "absolute",
    bottom: 60,
    left: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  listItemAddress: {
    position: "absolute",
    bottom: 40,
    left: 8,
    fontSize: 14,
    color: "#ffffff",
  },
  listItemDistance: {
    position: "absolute",
    top: 20,
    right: 8,
    fontSize: 14,
    color: "#ffffff",
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
  },
  //best for you section
  bestForYouItem: {
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    overflow: "hidden",
  },
  bestForYouImage: {
    width: 74,
    height: 70,
  },
  bestForYouDetails: {
    flex: 1,
    padding: 8,
  },
  bestForYouName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bestForYouPrice: {
    fontSize: 14,
    color: "#777777",
  },
  bestForYouAttributes: {
    fontSize: 14,
    color: "#777777",
  },
});

export default HomeScreen;
