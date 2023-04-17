import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [phone, setPhone] = useState([])

  useEffect(() => {
    const fetchPhone = async () => {
      try {
        await fetch("https://dummyjson.com/products")
          .then((res) => res.json())
          .then((data) => setPhone(data.products))
          .catch(err => console.log(err.message))
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchPhone()
    return () => setPhone([])
  },[])

  return (
    <div className='bg-gray-600 flex flex-col items-center gap-[10px]'>
      <div className=' flex flex-col items-center w-full border border-black'>
       <h1 className=' font-medium'>Welcom To SFS Store</h1>
      </div>
    <div className="w-full grid grid-cols-5 gap-4">
      { 
        phone?.map((item) => {
          return (
            <div key={item?.id} className=' bg-white h-[500px] '>
              <img className='w-[100%] h-[70%] bg-cover ' src={item?.images[0]} alt="" />
              <div className=' flex flex-col items-center border h-[30%] border-black'>
                <p className=''>Model: {item?.title}</p>
                <p className=''>Brand: {item?.brand}</p>
                <p className=''>Category: {item?.brand}</p>
                <button className='w-[120px] bg-blue-600 h-[40px] border rounded-2xl text-white'>Price {item?.price}$</button>
              </div>
            </div>
          )
        })
      }
    </div>
      </div>
  )
} 

export default App
