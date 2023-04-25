import React from 'react';
import Figure from 'react-bootstrap/Figure'

function AlbumCard({ album, thumbnail, year, description, songs }) {
  return (
    <div>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={thumbnail}
        />
        <Figure.Caption>
          <h2>{album}</h2>
          <h3>{year}</h3>
          <p>{description}</p>
          <ul>
            {songs.map(song => <li>{song}</li>)}
          </ul>
        </Figure.Caption>

      </Figure>
    </div>
  );
}

export default AlbumCard;