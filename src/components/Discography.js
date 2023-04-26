import React, { useState, useEffect } from 'react';
import AlbumCard from "./AlbumCard"
import AlbumInfo from './AlbumInfo';

const albumsUrl = 'https://theaudiodb.com/api/v1/json/2/album.php?i=112028'
const songsUrl = 'http://localhost:6001/albums'

function Discography() {

  const [albums, setAlbums] = useState([])
  const [albumSongs, setAlbumSongs] = useState([])
  const [currentAlbum, setCurrentAlbum] = useState(10);

  function displaySongs(id) {
    setCurrentAlbum(id);
  }

  useEffect(fetchInfo, [])

  function fetchInfo() {
    fetch(albumsUrl)
      .then(r => r.json())
      .then(albumData => setAlbums(albumData.album))
  }

  useEffect(fetchSongs, [])

  function fetchSongs() {
    fetch(songsUrl)
      .then(r => r.json())
      .then(setAlbumSongs)
  }

  const albumSongList = albumSongs.map(song => {
    return song.albumTracks
  })
  console.log(albums)

  const cardElements = albums.map((album, index) =>
    <AlbumCard
      key={album.idAlbum}
      album={album.strAlbum}
      thumbnail={album.strAlbumThumb}
      year={album.intYearReleased}
      // description={album.strDescriptionEN}
      id={index}
      displaySongs={displaySongs}
    />
  )

  return (
    <div>
      <div className='album-container'>
        {cardElements}
      </div>
      <div className='album-info-container'>
        <AlbumInfo
          // albumDescription={albums[currentAlbum].strDescriptionEN !== undefined ? albums[currentAlbum].strDescriptionEN : null }
          albumSongs={albumSongList[currentAlbum] !== undefined ? albumSongList[currentAlbum] : []}
        />
      </div>
    </div>
  );
}

export default Discography;