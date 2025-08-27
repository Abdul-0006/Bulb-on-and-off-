import './App.css'
import React from 'react'
// At the top of your App.jsx (with other imports)
import bulbOn from './assets/bulbon.png';
import bulbOff from './assets/bulboff.png';
import { useState } from 'react';


const Bulb = () => {
  const [State, setState] = useState(false)
  const toggleBulb = () => {
     setState(!State)
  }
  const imgState = () => {
    if(State === true){
      return bulbOff
    }
    else{
      return bulbOn
    }
  }
  return (
    <div className='main'>
      <h1 className='title'>Bulb switch on and off </h1>
      <img className='bulb-image' src= {imgState()} alt="Image not available" />
      <button className='btn' onClick={toggleBulb}>{State ? "Turn on" : 'Turn off'} </button>
    
    </div>
  )
}

export default Bulb
