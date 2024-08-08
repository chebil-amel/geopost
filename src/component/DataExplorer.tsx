import React,{useState} from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Metrics from './Metrics';
import CountryList from './CountryList';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function DataExplorer() {
   const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchQuery(event.target.value);
  };
	return (
	<div className='flex flex-row'>
  <div className='mt-10 ml-10 basis-2/3 '>
    <h1 className='text-2xl  font-bold text-black-900 '>Explorer Data</h1>
    <div className=' mt-2 flex justify-star'>
      <GlobeAltIcon className='mt-1  w-5 h-6 text-black-400' />
      <h2 className='text-l  text-black-900' >index of the Countries</h2>
    </div>

  <div className='mt-5 col-span-2 row-span-2'>
    <CountryList/>
  </div>
   </div>


   
  <div className='mt-10  mr-10 w-72 basis-1/3'>
    <div className='relative border border-blue-gray-200 rounded-[7px]'>
      <div className='relative'>
        <input
          className='w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 text-sm px-3 py-2.5 pl-10'
          placeholder='Search by postcodes, locality,region'
           value={searchQuery}
          onChange={handleSearch}
        />
        <MagnifyingGlassIcon className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
      </div>
    </div>
 
  <div className='mt-10  ml-5  col-span-2 row-span-2'>
    <Metrics/>
  </div>
   </div>
</div>
	);
}
