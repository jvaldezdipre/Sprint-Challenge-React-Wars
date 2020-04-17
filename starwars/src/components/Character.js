// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CharacterCard from './CharacterCard';

function Character() {
  //state that will add all the characters to be access them
  const [characters, setCharacters] = useState([]);

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

  return (
    <div className='list-characters-container'>
      {characters.map((character, index) => {
        return (
          <CharacterCard
            key={index}
            name={character.name}
            height={character.height}
            birth_year={character.birth_year}
            gender={character.gender}
          />
        );
      })}
    </div>
  );
}

export default Character;
