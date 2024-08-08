import React from 'react';
import mainbackground from '../assets/images/main_background.webp';
import c1 from '../assets/images/data_explorer.svg';
import c2 from '../assets/images/map_explorer.webp';
import c3 from '../assets/images/dowload_center.svg';
import c4 from '../assets/images/kb.svg';
export default function Center() { 
  return (
    <div
      className="flex flex-col items-center  h-screen "
      style={{
        backgroundImage: `url(${mainbackground})`,
      
        backgroundSize: '30%', 
      backgroundPosition: 'bottom', 
      backgroundRepeat: 'no-repeat' ,
        backgroundAttachment: 'local'


        
      }}
    >
      
          <h2 className='text-2xl mt-6 font-bold text-center text-blue-900'> Welcome to GeoPostcodes' customer portal</h2>
          <div className=" mt-10 grid grid-cols-2 gap-10">
          <div className="card" 
          style={{
    backgroundImage: `url(${c1})`,
    backgroundSize: '60%', 
    backgroundPosition: 'right bottom', 
    backgroundRepeat: 'no-repeat' 
  }}>
            <h2 className="card-title text-blue-900">Data Explorer </h2>

          </div>
          <div className="card" 
           style={{
    backgroundImage: `url(${c2})`,
    backgroundSize: '50%', 
    backgroundPosition: 'right bottom', 
    backgroundRepeat: 'no-repeat' 
  }}>
            <h2 className="card-title text-blue-900">Map Explorer</h2>

          </div>
          <div className="card" 
          style={{
    backgroundImage: `url(${c3})`,
    backgroundSize: '25%', 
    backgroundPosition: 'right', 
    backgroundRepeat: 'no-repeat' 
  }}>
            <h2 className="card-title text-blue-900">Download Center </h2>

          </div>
          <div className="card" 
          style={{
    backgroundImage: `url(${c4})`,
    backgroundSize: '30%', 
    backgroundPosition: 'right bottom', 
    backgroundRepeat: 'no-repeat' 
  }}>
            <h2 className="card-title text-blue-900">Knowledge Base</h2>

          </div>
   
        </div>
    </div>
  );
}