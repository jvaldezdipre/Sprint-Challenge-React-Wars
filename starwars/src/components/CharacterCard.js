// Make a card for each character
import React from 'react';
import { Card, CardBody, CardHeader, CardTitle } from 'reactstrap';

function CharacterCard({ character }) {
  return (
    <div className='character-container'>
      <Card>
        <CardHeader>{character.name}</CardHeader>
        <CardBody>
          <CardTitle>Height: {character.height}</CardTitle>
          <CardTitle>Birth Year: {character.birth_year}</CardTitle>
          <CardTitle>Gender: {character.gender}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
}

export default CharacterCard;
