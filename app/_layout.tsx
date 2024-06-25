import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#55B4EA" }}>
      <Drawer
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#0A8ED9",
          },
          drawerLabelStyle: {
            color: "#fff",
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "overview",
          }}
        />

        <Drawer.Screen
          name="details/details"
          options={{
            drawerLabel: () => null, // Hide from drawer menu
            title: "Details",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
