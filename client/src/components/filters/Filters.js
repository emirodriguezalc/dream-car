import './Filters.css';
import React, { useEffect, useState, useRef } from 'react';

const Filters = () => {
 const [years, setYears] = useState([]);

 useEffect(() => {
  if (!years.min_year)
   fetch('/api/years')
    .then(data => data.json())
    // .then(data => { console.log(data.Years) })
    .then(data => setYears(data.Years))
    .catch(err => console.log(err))
 });

 return (
  <section>
   <input type='dropdown'>holi</input>
  </section>

 )
}

export default Filters;