import './Header.css';
import React, { useEffect, useState, useRef } from 'react';

const Header = () => {
  const [years, setYears] = useState([]);

  useEffect(() => {
    if (!years.min_year)
      fetch('/api/years')
        .then(data => data.json())
        .then(data => setYears(data.Years))
        .catch(err => console.log(err))
  });

  return (
    <section>
      <h1 className="header-title">Dream Car</h1>
      <p className="header-description">{`Welcome to dream car! Use the filters to find the perfect car according to your needs.
   Our database holds more that 500 records with cars from ${years.min_year} to ${years.max_year
        }`}`
  </p>
    </section>

  )
}

export default Header;