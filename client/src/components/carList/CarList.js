import './CarList.css';

const CarList = ({ cars }) => {
 console.log(cars.Trims);
 return (
  <section className="car-list-container">
   <ul className="car-list">
    {cars && cars.Trims ? cars.Trims.map(car => (
     <li className="car-list-item">
      <h3 className="car-list-title">{`${car.make_display} - ${car.model_name}`}</h3>
      <h4 className="car-list-info">Made in: {car.make_country}</h4>
      <h4 className="car-list-info">Type : {car.model_body}</h4>
      <h4 className="car-list-info">Number of doors : {car.model_doors}</h4>
      <h4 className="car-list-info">Transmission : {car.model_transmission_type}</h4>
      <h4 className="car-list-info">Manufacture Year : {car.model_year}</h4>
     </li>
    )) : <h1>{cars}</h1>}
   </ul>
  </section>

 )
}

export default CarList;