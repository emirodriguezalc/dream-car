import './Filters.css';
import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import image from '../../assets/car-cartoon.jpg';

const Filters = ({ setCars }) => {
  const [filters, setFilters] = useState([]);

  const primaryFilters = [{
    id: 'body',
    name: 'Type of car',
    array: [
      'Coupe',
      'Sedan',
      'SUV',
      'Pickup',
      'Crossover',
      'Minivan',
    ]
  }, {
    id: 'fuel_type',
    name: 'Fuel Type',
    array: [
      'Diesel',
      'Gasoline',
    ]
  }, {
    id: 'engine_type',
    name: 'Engine Type',
    array: ['Inline', 'V', 'W']
  }, {
    id: 'engine_position',
    name: 'Engine Position',
    array: ['Front', 'Middle', 'Rear']
  }, {
    id: 'drive',
    name: 'Drive',
    array: [
      'Front',
      'Rear',
      'AWD',
      '4WD',
    ]
  }]
  const filterHandler = (e, filter, type, filterName) => {
    e.preventDefault();
    let newArr = [...filters];
    let index = newArr.map((e) => { return e.type; }).indexOf(type);
    if (index >= 0) {
      newArr[index].name = filter
      setFilters(newArr)
    } else {
      setFilters([
        ...filters,
        {
          name: filter,
          type,
          filterName
        }
      ])
    }
  }

  const submitHandler = (filters) => {
    let url = '';
    filters.forEach(filter => {
      url += `&${filter.type}=${filter.name}`;
    })
    fetch(`/api/cars?${url}`)
      .then(response => response.json())
      .then(res => {
        res.Trims.length > 0 ? setCars(res) : setCars('Sorry, no matches for your search');
      });
  };

  const clearFilterHandler = () => {
    setFilters([])
  }

  const clearCarsHandler = () => {
    setCars([])
  }

  return (
    <div>
      <section className="filter-container">

        {
          primaryFilters.map(filterObject => (
            <DropdownButton id="dropdown-basic-button" title={filterObject.name}>
              {filterObject.array.map(filter => <Dropdown.Item onClick={(e) => filterHandler(e, filter, filterObject.id, filterObject.name)}> {filter}</Dropdown.Item>
              )}
            </DropdownButton>
          ))
        }
        <button className="filter-buttons" onClick={() => submitHandler(filters)}>Submit!</button>
        <button className="filter-buttons clear" onClick={() => clearFilterHandler(filters)}>Clear Filters</button>
        <button className="filter-buttons clear" onClick={() => clearCarsHandler(filters)}>Clear Results</button>
      </section >
      <section className="filter-showed">
        <img src={image} alt="car caartoon" />
        {filters.length > 0 &&
          <div className="filter-list">
            <h2>Your filters : </h2>
            {filters.map(filter => <h3>{filter.filterName} : {filter.name}</h3>)}
          </div>
        }
      </section>
    </div>
  )
}

export default Filters;