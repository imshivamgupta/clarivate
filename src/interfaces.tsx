import { Dispatch, SetStateAction } from 'react';
export interface ListItem {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface ContextValue {
  data: any[]; // Change `any[]` to the appropriate type of your data
  setData: Dispatch<SetStateAction<any[]>>;
  fetchData: (page: number) => Promise<void>;
  favorites: ListItem[];
  addToFavorites: (item: ListItem) => void;
  removeFromFavorites: (id: number) => void;
}
