import React, { useState, useEffect } from 'react';
import ConcertCard from "./ConcertCard"

function TourSchedule() {
  const concertsUrl = 'http://localhost:6001/concerts';
  const [concerts, setConcerts] = useState([]);

  useEffect(fetchConcerts, []);

  function fetchConcerts() {
    fetch(concertsUrl)
      .then(r => r.json())
      .then(setConcerts)
  }

  const concertList = concerts.map(concert =>
    <ConcertCard
      key={concert.id}
      location={concert.location}
      venue={concert.venue}
      date={concert.date}
    />)

  return (
    <>
      {concertList}
    </>
  );
}

export default TourSchedule;