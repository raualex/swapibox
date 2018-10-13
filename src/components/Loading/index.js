import React from 'react';

import './Loading.css';
import spin from '../Utils/assets/loading.svg'


const Loading = () => {
  return (
    <div className='loading'>
    <img className='load' src={spin} alt='loading'/> 
    </div>
  )
}

export default Loading;