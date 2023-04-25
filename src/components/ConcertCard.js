import React from 'react';
import Figure from 'react-bootstrap/Figure'


function ConcertCard({ location, venue, date }) {
  return (
    <>
      <Figure>
        <Figure.Caption>
          <h2>{location}</h2>
          <h3>{venue}</h3>
          <h4>{date}</h4>
        </Figure.Caption>
      </Figure>

    </>
  );
}

export default ConcertCard;