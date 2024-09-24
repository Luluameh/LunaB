// index.tsx
import React from "react";
import HomeScreen from "@/Screen/HomeScreen";

interface House {
  id: string;
  name: string;
  address?: string;
}

export default function Home() {
  return <HomeScreen />;
}
