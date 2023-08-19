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
          <h1 className="text-2xl font-black">Cookingina</h1>
        </div>
        <div className="flex justify-center">
          <ul className="flex flex-row gap-5 justify-center items-center">
            {li.map((item, key) => (
              <li key={key} className="font-bold cursor-pointer hover:text-[#65955f]">{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className=" hidden flex-row m-4 justify-between" id="showcp">
        <div className="flex flex-row gap-2">
          <img src="/img/icon64.png" alt="icon" className="w-1/6 hover:animate-spin" />
          <h1 className="text-2xl font-black" id="cookinginaphone">Cookingina</h1>
        </div>
        <div>
          <img src={isShow ? '/img/close32.png' : '/img/menu32.png'} alt="icon" onClick={()=> setShow(!isShow)} />
        </div>
      </div>
      {isShow && <div className="p-5">
        <ul className="flex flex-col gap-4">
          {li.map((item, key) => (
            <li key={key} className="font-bold cursor-pointer hover:text-[#f0c60a]">{item}</li>
         ))}
      </ul>
      </div>}
    </>
  )
}

export default Navbar