import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import Discography from './Discography'
import TourSchedule from "./TourSchedule"
import Create from './Create';

function PageContainer() {
  return (
    <>
      <Switch>
        <Route path="/discography">
          <Discography />
        </Route>
        <Route path="/schedule">
          <TourSchedule />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default PageContainer;