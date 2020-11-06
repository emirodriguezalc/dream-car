import './CarList.css';

const CarList = ({ cars }) => {
 return (
  <section className="car-list-container">
   { cars.Trims && cars.Trims.length > 0 && <h3 className="car-list-qtty">{cars.Trims.length} Cars match your search!</h3>}
   <ul className="car-list">
    {cars && cars.Trims && cars.Trims.map(car => (
     <li className="car-list-item">
      <h3 className="car-list-title">{`${car.make_display} - ${car.model_name}`}</h3>
      <h4 className="car-list-info">Made in: {car.make_country}</h4>
      <h4 className="car-list-info">Type : {car.model_body}</h4>
      <h4 className="car-list-info">Number of doors : {car.model_doors}</h4>
      <h4 className="car-list-info">Transmission : {car.model_transmission_type}</h4>
      <h4 className="car-list-info">Manufacture Year : {car.model_year}</h4>
     </li>
    ))} {typeof cars === 'string' && !cars.Trims && <h3 className="car-list-empty">{cars}</h3>}
   </ul>
  </section>

 )
}

export default CarList;