import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Searchbar = () => {
  const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

 const fetchData = () => {
    axios.get(`http://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => {
        setData(response.data.meals)
      }).then(  console.log(data))
  }

    const handleFormSubmit = (e) => {
    e.preventDefault();
      fetchData();
      setSearch('')
  };

    useEffect(() => {
    fetchData();
    }, []);
  
  return (
    <div className=" flex flex-col justify-center">
      <h1 className=' text-yellow-500 text-center flex justify-center pt-[4rem] p-9 text-6xl font-black'>
        Delightful Dishes, Effortlessly Discovered
      </h1>
      <div className="flex justify-center items-center px-8 pt-7" id='idForm'>
    <div className="w-full md:w-4/6">
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input  value={search}  onChange={(e) => setSearch(e.target.value)} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Recipe, ..."/>
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
    </div>
</div>
        </div>
  )
}

export default Searchbar