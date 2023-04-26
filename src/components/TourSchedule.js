import React, { useState, useEffect } from 'react';
import ConcertCard from "./ConcertCard"

function TourSchedule() {
  const concertsUrl = 'http://localhost:6001/concerts';
  const [concerts, setConcerts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(fetchConcerts, []);

  function fetchConcerts() {
    fetch(concertsUrl)
      .then(r => r.json())
      .then(setConcerts)
  }

  function searchConcerts(e) {
    setSearch(e.target.value);
  }

  const filteredConcerts = concerts.filter(concert =>
    concert.location.toLowerCase().includes(search.toLowerCase()) ||
    concert.venue.toLowerCase().includes(search.toLowerCase())
  )

  const concertList = filteredConcerts.map(concert =>
    <ConcertCard
      key={concert.id}
      location={concert.location}
      venue={concert.venue}
      date={concert.date}
    />)

  return (
    <>
      <br />
      <input
        type='text'
        placeholder='Search for a place...'
        value={search}
        onChange={searchConcerts}
      >
      </input>
      <br /><br />
      <div className='concerts-container'>
        {concertList}
      </div>
    </>
  );
}

export default TourSchedule;