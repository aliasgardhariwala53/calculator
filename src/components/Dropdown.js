import React from 'react';
import { Redirect } from 'react-router';
import Select from 'react-select';
import "./Dropdown.css";

const options1 = [
    { value: '1st', label: '1st' },
    { value: '2nd', label: '2nd' },
    { value: '3rd', label: '3rd' },
];
const options2 = [
  { value: 'A', label: 'A' },
  { value: 'B', label: 'B' },
  { value: 'C', label: 'C' },
];
const options3 = [
    { value: 'jan', label: 'jan' },
    { value: 'feb', label: 'feb' },
    { value: 'march', label: 'march' },
    { value: 'april', label: 'april' },
    { value: 'may', label: 'may' },
    { value: 'june', label: 'june' },
    { value: 'july', label: 'july' },
    { value: 'august', label: 'august' },
    { value: 'september', label: 'September' },
    { value: 'octomber', label: 'octomber' },
    { value: 'november', label: 'november' },
    { value: 'december', label: 'december' },
];

const options4 = [
  { value: '2020', label: '2020' },
  { value: '2021', label: '2021' },
  { value: '2022', label: '2022' },
];


function Dropdown() {


  return (
      <>
      <div className="select">
    <Select className="select1" placeholder="class"
      options={options1}
      
    />
    <Select className="select1"placeholder="Section"
      options={options2}
      
    />
    <Select className="select1" placeholder="Month"
      options={options3}
      
    />
    <Select className="select1"placeholder="Session"
      options={options4}
    />
    </div>
    </>
  );
}
export default Dropdown;