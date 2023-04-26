import React from 'react';
import Figure from 'react-bootstrap/Figure'


function ConcertCard({ location, venue, date }) {
  return (
    <>
      <div className='concert-card'>
        <Figure>
          <Figure.Caption>
            <h2>{location}</h2>
            <h3>{venue}</h3>
            <h4>{date}</h4>
          </Figure.Caption>
        </Figure>
      </div>
      <br/>
    </>
  );
}

export default ConcertCard;