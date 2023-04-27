import React from 'react';
import ArtistIntro from './HomeComponents/ArtistIntro';
import ArtistEarlyYears from './HomeComponents/ArtistEarlyYears';
import FirstAlbum from './HomeComponents/FirstAlbum';
import YonkersSingle from './HomeComponents/YonkersSingle';
import SecondAlbum from './HomeComponents/SecondAlbum';
import LoiterSquad from './HomeComponents/LoiterSquad';
import ThirdAlbum from './HomeComponents/ThirdAlbum';
import FourthAlbum from './HomeComponents/FourthAlbum';
import FifthAlbum from './HomeComponents/FifthAlbum';
import BillNye from './HomeComponents/BillNye';
import SixthAlbum from './HomeComponents/SixthAlbum';
import SeventhAlbum from './HomeComponents/SeventhAlbum';
import ArtistOutro from './HomeComponents/ArtistOutro';

function Home() {
  return (
    <div>
      <div className = 'artist-name'>
        <h1>
        Tyler the Creator
        </h1>
      </div>

      <ArtistIntro />
      <ArtistEarlyYears />
      <FirstAlbum />
      <YonkersSingle />
      <SecondAlbum />
      <LoiterSquad />
      <ThirdAlbum />
      <FourthAlbum />
      <BillNye />
      <FifthAlbum />
      <SixthAlbum />
      <SeventhAlbum />
      <ArtistOutro />
    </div>
  );
}

export default Home;