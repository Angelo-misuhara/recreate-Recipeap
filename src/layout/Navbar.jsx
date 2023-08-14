import { useState } from "react"


const Navbar = () => {

  const li = ['Main', 'Japanese', 'Protein', 'Soup']
  const [isShow,setShow] = useState(false)

  return (
    <>
      {/* Pc-view */}
      <div className="flex justify-between p-5" id="pcViewNavbar">
        <div className="flex flex-row gap-2">
          <img src="/img/icon32.png" alt="icon" className="hover:animate-spin" />
          <h1 className="text-2xl font-black">Cooking Ina</h1>
        </div>
        <div className="flex justify-center">
          <ul className="flex flex-row gap-5 justify-center items-center">
            {li.map((item, key) => (
              <li key={key} className="font-bold cursor-pointer hover:text-[#f0c60a]">{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className=" hidden flex-row m-4 justify-between" id="showcp">
        <div className="flex flex-row gap-2">
          <img src="/img/icon32.png" alt="icon" className="hover:animate-spin" />
          <h1 className="text-2xl font-black">Cooking Ina</h1>
        </div>
        <div>
          <img src={isShow ? '/img/close32.png' : '/img/menu32.png'} alt="icon" onClick={()=> setShow(!isShow)} />
        </div>
      </div>
      {isShow && <div className="p-4">
        <ul className="flex flex-col gap-2">
          {li.map((item, key) => (
            <li key={key} className="font-bold cursor-pointer hover:text-[#f0c60a]">{item}</li>
         ))}
      </ul>
      </div>}
    </>
  )
}

export default Navbar