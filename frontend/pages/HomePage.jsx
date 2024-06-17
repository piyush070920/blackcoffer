// frontend/src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import { fetchItems } from '../api/api';

const HomePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const data = await fetchItems();
      setItems(data);
    };

    getItems();
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ItemList items={items} />
    </div>
  );
};

export default HomePage;
