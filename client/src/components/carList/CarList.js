import './CarList.css';
import React, { useState } from 'react';

const CarList = ({ cars }) => {

 const [image, setImage] = useState({});

 const getImage = (brand, model, year, id) => {
  const searchTerm = `car+${brand}+${model}+${year}`;
  const newSearchTerm = searchTerm.replace(/\s/g, '+');
  fetch(`/api/getImages?searchTerm=${newSearchTerm}`)
   .then(res => res.text())
   .then(resp => setImage({
    url: resp,
    brand,
    model,
    year,
    id,
   }))
 }
 return (
  <section className="car-list-container">
   { cars.Trims && cars.Trims.length > 0 && <h3 className="car-list-qtty">{cars.Trims.length} Cars match your search!</h3>}
   <ul className="car-list">
    {console.log(cars)}
    {cars && cars.Trims && cars.Trims.map(car => (

     <li className="car-list-item">
      <h3 className="car-list-title">{`${car.make_display} - ${car.model_name}`}</h3>
      <h4 className="car-list-info">Made in: {car.make_country}</h4>
      <h4 className="car-list-info">Type : {car.model_body}</h4>
      <h4 className="car-list-info">Number of doors : {car.model_doors}</h4>
      <h4 className="car-list-info">Transmission : {car.model_transmission_type}</h4>
      <h4 className="car-list-info">Manufacture Year : {car.model_year}</h4>
      {car.model_id === image.id
       && <img alt="car" className="car-list-image" src={image.url}></img>
      }
      <button className="car-list-show-image" onClick={() => getImage(car.make_display, car.model_name, car.model_year, car.model_id)}>Show image</button>

     </li>
    ))} {typeof cars === 'string' && !cars.Trims && <h3 className="car-list-empty">{cars}</h3>}
   </ul>
  </section>

 )
}

export default CarList;