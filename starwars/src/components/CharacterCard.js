// Make a card for each character
import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

function CharacterCard(props) {
  return (
    <div className='character-container'>
      <Card>
        <CardBody>
          <CardTitle>Name: {props.name}</CardTitle>
          <CardTitle>Height: {props.height}</CardTitle>
          <CardTitle>Birth Year: {props.birth_year}</CardTitle>
          <CardTitle>Gender: {props.gender}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
}

export default CharacterCard;
