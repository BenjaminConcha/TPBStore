import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const apiUrl =
    "https://bymykel.github.io/CSGO-API/api/en/skins_not_grouped.json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        console.log("API Response:", response.data); // Ver la estructura de los datos
        if (Array.isArray(response.data)) {
          setItems(response.data); // Limitar a 10 ítems
        } else {
          console.error("Expected an array but got:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <ItemContext.Provider value={items}>{children}</ItemContext.Provider>;
};
