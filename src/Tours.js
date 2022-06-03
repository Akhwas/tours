import React from 'react';
import Tour from './Tour';
const Tours = ({tours}) => {
  return (
  <div>
    {tours.map((tour)=>{
return (<><div>
  <h2>hi</h2>
  </div></>)
    })}
  </div>)
  
};

export default Tours;
