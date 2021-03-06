import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import Tour from './Tour'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading]=useState(true)
const [tours,setTours]= useState([])


const fetchTours = async()=>{
  setLoading(true)
  try {
    
    const response = await fetch(url);
    const tours = await response.json();
    console.log(tours)
    setTours(tours)
    setLoading(false)
  } catch (error) {
    setLoading(false)
    console.log(error)
  }
  }

useEffect(()=>{fetchTours()},[])
if(loading){
  return(
  <main>
    <Loading/>
  </main>)
}



// getTours()

  
 return(<> <main> 
    <div> {tours.map((tour)=>{
  return <Tour {...tour}></Tour>
})}
</div>
 
   {/* <Tours/> */}
   </main>
 </>)
}




export default App
