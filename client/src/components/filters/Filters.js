import './Filters.css';
import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

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
  const filterHandler = (e, filter, type) => {
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

  const clearHandler = () => {
    setFilters([])
  }

  return (
    <section className="filter-container">
      {
        primaryFilters.map(filterObject => (
          <DropdownButton id="dropdown-basic-button" title={filterObject.name}>
            {filterObject.array.map(filter => <Dropdown.Item onClick={(e) => filterHandler(e, filter, filterObject.id)} /* onSelect={(e) => e.target.parentElement.textContent = filter} */ > {filter}</Dropdown.Item>
            )}
          </DropdownButton>
        ))
      }
      <button className="filter-submit" onClick={() => submitHandler(filters)}>Submit!</button>
      <button className="filter-clear" onClick={() => clearHandler(filters)}>Clear</button>
    </section >

  )
}

export default Filters;