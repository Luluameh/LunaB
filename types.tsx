// types.ts
export interface House {
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

export type RootStackParamList = {
  "details/details": { house: House };
};
