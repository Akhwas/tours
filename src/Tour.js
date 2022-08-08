import React, { useState } from 'react';
import Tours from './Tours';
// const notInterested =()=>{}
console.log(Tours)
const Tour = (props) => {
  const  [readMore, setReadMore]=useState(true)
  const {id,name,info,image,price,removeTour} = props
  return <><article  className='single-tour'  >
    <img src={image} alt={name}/>
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>
          ${price}
        </h4>
      </div>
      <p>
        {readMore && info.slice(0,200)+'...' || !readMore && info}<button onClick={()=>{setReadMore(!readMore)}}>{readMore? `read more`: 'show less'}</button>
      </p>
      <button className='delete-btn' onClick={()=>removeTour(id)} >
        not interested
      </button>
    </footer>
  </article>
  
  </>
};

export default Tour;
