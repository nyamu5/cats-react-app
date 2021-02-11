import React, { useEffect, useState } from 'react';

import './App.css';

import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';

const App = () => {
  const [cats, setCats] = useState([]);
  const [catSearch, searchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        setCats([...users]);
      });
  }, [catSearch]);

  const onSearchChange = (event) => {
    searchField(event.target.value);

    // searchField({ catResults: filteredCats });
  };

  const filteredCats = cats.filter((cat) => {
    return cat.name.toLowerCase().includes(catSearch.toLowerCase());
  });

  return !cats.length ? (
    <h1 className='tc'>Loading</h1>
  ) : (
    <div className='tc'>
      <h1 className='f1'>Pussycat</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList cats={filteredCats} />
      </Scroll>
    </div>
  );
};

export default App;
