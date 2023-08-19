import { useEffect, useState } from 'react'
import axios from 'axios'

const Searchbar = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [strMealThumb, setStrMealThumb] = useState('')
  const [strYoutube, setStrYoutube] = useState('')
  const [strSource, setStrSource] = useState('')
  const [strMeal, setStrMeal] = useState('')
  const [notFound , setNotfound] = useState(false)

 const fetchData =() => {
   if (search !== '') {
      axios.get(`https://www.themealdb.com/api/json/v2/1/search.php?s=${search}`)
        .then((response) => {
          if (response.status === 200 && response.data.meals && response.data.meals.length > 0) {
            setStrMealThumb(response.data.meals[0].strMealThumb)
            setStrYoutube(response.data.meals[0].strYoutube)
            setStrSource(response.data.meals[0].strSource)
            setStrMeal(response.data.meals[0].strMeal)
            setNotfound(false)
          } else {
             setNotfound(true)
          }
     
      })
   }
  }

    const handleFormSubmit = (e) => {
    e.preventDefault();
      fetchData();
  };

    useEffect(() => {
      fetchData();
    }, []);
  
  console.log(notFound)
  console.log(strMealThumb)
  console.log(strYoutube)
  console.log(strSource)
    console.log(strMeal)
  return (
    <>
    <div className=" flex flex-col justify-center bg-[#fdfcfd]">
      <h1 className=' text-[#65955f] text-center flex justify-center pt-[4rem] p-9 text-6xl font-black'>
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
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#65955f] hover:bg-[#395436] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
            </form>
    </div>
      </div>
      </div>
        {notFound ? <h1 className='pt-7 text-center font-black text-2xl'>No Meal Found</h1> :     <div className='flex bg-[#fdfcfd] flex-row justify-center mt-10 gap-9' id='container-Result'>
          <img src={strMealThumb} className='w-1/6 rounded-md self-center' alt="" />
        <div className='flex flex-col gap-3 'id='aboutResult'>
          <h1 className='text-2xl font-black underline underline-offset-4'><a href={strSource} target='_black'>{strMeal.toUpperCase()}</a></h1>
          {strMealThumb && <button type="button" className="focus:outline-none text-white bg-[#65955f] hover:bg-[#395436] focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"><a target='_blank'rel='noreferrer' href={strYoutube}>Watch Tutorial</a></button> }
        </div>
      </div>}
      
    </>
  )
}
export default Searchbar