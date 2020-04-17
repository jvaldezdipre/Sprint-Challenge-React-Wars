import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search';
import axios from 'axios';

import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get(`https://swapi.py4e.com/api/people`)
      .then(res => {
        //set the characters to equal to the api data to be able to access
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const getFilteredCharacters = () => {
    const term = searchTerm.trim();
    return characters.filter(character => {
      if (!term) {
        return character;
      }
      if (character.name.toLowerCase().includes(term.toLowerCase())) {
        return character;
      }
    });
  };

  return (
    <div className='App'>
      <h1 className='Header'>Characters</h1>
      <Search setSearchTerm={setSearchTerm} />
      <Character characters={getFilteredCharacters()} />
    </div>
  );
};

export default App;
