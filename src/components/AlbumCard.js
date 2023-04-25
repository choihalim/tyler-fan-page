import React from 'react';
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import FigureCaption from 'react-bootstrap/FigureCaption'

function AlbumCard({album,thumbnail, year, description }) {
  return (
    
    <div>
      {/* <img src={thumbnail}/> */}
      {/* <p>{album}</p>
      <p>{year}</p> */}
      {/* <p>{description}</p>
       */}
     <Figure>
       <Figure.Image 
        width={171}
        height={180}
        alt="171x180"
        src= {thumbnail}
      />
    <Figure.Caption>
        <h2>{album}</h2>
        <h3>{year}</h3>
        <p>{description}</p>
    </Figure.Caption>
    
  </Figure>
</div>
  );
}

export default AlbumCard;