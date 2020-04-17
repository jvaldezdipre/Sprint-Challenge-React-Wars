// Write your Character component here
import React from 'react';
import Search from './Search';
import axios from 'axios';

import CharacterCard from './CharacterCard';

function Character({ characters }) {
  //state that will add all the characters to be access them
  return (
    <div>
      <div className='list-characters-container'>
        {characters.map((char, index) => {
          return (
            <CharacterCard
              // characters={getFilteredCharacters()}
              key={index}
              // name={character.name}
              // height={character.height}
              // birth_year={character.birth_year}
              // gender={character.gender}
              character={char}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Character;
