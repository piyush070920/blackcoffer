// frontend/src/components/ItemList.js
import React from 'react';

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item._id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
