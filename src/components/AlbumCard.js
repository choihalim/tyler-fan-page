import React, { useState } from 'react';
import Figure from 'react-bootstrap/Figure'

function AlbumCard({ album, thumbnail, year, id, displaySongs }) {

  return (
    <div>
      <Figure>
        <Figure.Image
          className="album-image"
          width={171}
          height={180}
          alt="171x180"
          src={thumbnail}
          onClick={() => displaySongs(id)}
        />
        <Figure.Caption>
          <h2>{album} ({year})</h2>
          {/* <p>{description}</p> */}
        </Figure.Caption>

      </Figure>
    </div>
  );
}

export default AlbumCard;