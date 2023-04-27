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
import EarlyYearsImg from './HomeComponents/EarlyYearsImg';

function Home() {
  return (
    <div className = 'home-div'>
      <div className = 'artist-name'>
        <h1>
        Tyler the Creator Banner Here
        </h1>
      </div>

      <ArtistIntro />
      <ArtistEarlyYears />
      <EarlyYearsImg />
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