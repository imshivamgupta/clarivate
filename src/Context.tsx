import { createContext, useContext, useState, useEffect } from 'react';
import { ListItem, ContextValue } from '@/interfaces';

export const AppContext = createContext<ContextValue>({
  data: [],
  setData: () => {},
  fetchData: async () => {},
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
});

export const AppContextProvider = ({ children }: any) => {
  const [data, setData] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<ListItem[]>([]);

  const fetchData = async (page: number) => {
    const url = `https://jsonplaceholder.typicode.com/albums/1/photos?_page=${page}&_limit=10`;
    try {
      const response = await fetch(url);
      const newData = await response.json();
      //   setData((prevData) => [...prevData, ...newData]);
      return newData;
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error here if needed
      return [];
    }
  };

  const addToFavorites = (item: ListItem) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };

  const removeFromFavorites = (id: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== id)
    );
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData(1);
      setData(data);
    };
    loadData();
  }, []);

  const contextValue: ContextValue = {
    // Provide the correct type for contextValue
    data,
    setData,
    fetchData,
    favorites,
    addToFavorites,
    removeFromFavorites,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useMyContext = () => useContext(AppContext);
