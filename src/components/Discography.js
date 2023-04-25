import React, { useState, useEffect } from 'react';
import AlbumCard from "./AlbumCard"

const albumsUrl = 'https://theaudiodb.com/api/v1/json/2/album.php?i=112028'
const songsUrl = 'http://localhost:6001/albums'

function Discography() {

  const [albums, setAlbums] = useState([])
  const [albumSongs, setAlbumSongs] = useState([])

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

  const cardElements = albums.map((album, index) =>
    <AlbumCard
      key={album.idAlbum}
      album={album.strAlbum}
      thumbnail={album.strAlbumThumb}
      year={album.intYearReleased}
      description={album.strDescriptionEN}
      songs={albumSongList[index]}
    />
  )

  return (
    <div>
      {cardElements}
    </div>
  );
}

export default Discography;