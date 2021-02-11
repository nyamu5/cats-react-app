import React from 'react';
import Card from './Card';

const CardList = ({ cats }) => {
  return (
    <div>
      {cats.map((user, i) => (
        <Card
          id={cats[i].id}
          name={cats[i].name}
          email={cats[i].email}
          key={cats[i].id}
        />
      ))}
    </div>
  );
};

export default CardList;
