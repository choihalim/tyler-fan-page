import React from 'react';
import { Route, Switch } from 'react-router-dom';
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

import HomeNavBar from './HomeComponents/HomeNavBar';

function Home() {
  return (
    <div className='home-page'>
      <div className='artist-name'>
        <h1>
          Tyler the Creator

        </h1>
      </div>
      <HomeNavBar />

      <Switch>
        <Route path="/artist-intro">
          <ArtistIntro />
        </Route>
        <Route path="/early-years">
          <ArtistEarlyYears />
        </Route>
        <Route path="/first-album">
          <FirstAlbum />
        </Route>
        <Route path="/yonkers">
          <YonkersSingle />
        </Route>
        <Route path="/second-album">
          <SecondAlbum />
        </Route>
        <Route path="/loiter-squad">
          <LoiterSquad />
        </Route>
        <Route path="/third-album">
          <ThirdAlbum />
        </Route>
        <Route path="/fourth-album">
          <FourthAlbum />
        </Route>
        <Route path="/bill-nye">
          <BillNye />
        </Route>
        <Route path="/fifth-album">
          <FifthAlbum />
        </Route>
        <Route path="/sixth-album">
          <SixthAlbum />
        </Route>
        <Route path="/seventh-album">
          <SeventhAlbum />
        </Route>
        <Route path="/outro">
          <ArtistOutro />
        </Route>
      </Switch>
      <br /><br /><br /><br /><br />

    </div>
  );
}

export default Home;