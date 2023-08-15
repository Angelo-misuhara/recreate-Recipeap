import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

const Searchbar = () => {
  const [search, setSearch] = useState('adobo');
  const [data, setData] = useState([]);

 const fetchData =() => {
   if (search !== '') {
      axios.get(`https://www.themealdb.com/api/json/v2/1/search.php?s=${search}`)
      .then((response) => {
          setData(response.data.meals)
      })
   }
   else {
     alert('Enter a Food')
     }
  }

    const handleFormSubmit = (e) => {
    e.preventDefault();
      fetchData();
  };

    useEffect(() => {
      fetchData();
    }, []);
  
   console.log(data)
  return (
    <>
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
                <input  value={search}  onChange={(e) => setSearch(e.target.value)} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Recipe, Food ..."/>
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
            </form>
    </div>
      </div>
      </div>
        <div className='flex justify-center mt-10 px-9'>
        {Array.isArray(data) ? data.map((item, key) => (
            <div key={key} className='flex gap-9 justify-center' id='cpviewSearch'>
                 <img src={item.strMealThumb} className='w-2/6 rounded-md' id='cpviewSearchimg' alt="" />
            <div className='flex flex-col gap-3'>
              <h1 className='pr-[8rem] text-2xl font-bold underline underline-offset-8' id='tittlecp'>
                <a href={item.strYoutube} target="_blank" rel="noopener noreferrer">{item.strMeal}</a>
              </h1>
              
           </div>
            </div>

      )) : <div>
      <h1 className='text-6xl text-center' id='noFound'>Recipe Not Found</h1>
        </div>}
        </div>
    </>
  )
}
//  <img src={item.strMealThumb} className='w-2/6 rounded-md' alt="" />
    // <h1 className='text-1xl font-bold p-2'>Meal: {item.strMeal}</h1>
export default Searchbar