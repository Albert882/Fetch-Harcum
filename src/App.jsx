import { useState } from 'react'
import './index.css'
import { MoonIcon, SunIcon } from './Icons/icon'

function App() {
  const [day, setDay] = useState(true)

  const handleNight = () => {
    setDay(false)
  }

  const handleDay = () => {
    setDay(true)
  }



  return (
    <div 
    // className="bg-[rgba(0,0,0,0.7)]"
    >
      <header className={day === true ? 'z-[-1] w-full bg-gradient-to-r from-orange-300 to-fuchsia-500' : ' w-full bg-gradient-to-r from-gray-500 to-gray-900'}>
        <nav className='z-[-1] items-center w-full flex justify-between px-24 py-6'>
          <div className='flex gap-4'>
            <div className='w-[55px] h-[55px] bg-white rounded-md flex justify-center items-center text-2xl font-medium'><span
            className={day === true ? 'text-orange-300' : 'text-gray-500'}>e</span><span className={day === true ? 'text-fuchsia-500' : 'text-gray-900'}>w</span></div>
            <div className='flex items-center text-white font-bold text-3xl'>EduWell</div>
          </div>
          <div className='flex gap-8'>
            <ul className=' flex gap-8'>  
              <li className=' text-white'><a href="">Home</a></li>
              <li className=' text-white'><a href="">Services</a></li>
              <li className=' text-white'><a href="">Courses</a></li>
              <li className=' text-white'><a href="">Pages</a></li>
              <li className=' text-white'><a href="">Testimonials</a></li>
              <li className=' text-white'><a href="">Contact us</a></li>
            </ul>
            <div className='flex gap-2'>
              <button onClick={handleDay} className='text-white'><SunIcon day={day}/></button>
              <button onClick={handleNight} className='text-white'><MoonIcon day={day}/></button>
            </div>
          </div>
        </nav>
      </header>
      <section className={day === true ? 'flex h-screen  px-80 relative' : ' flex h-screen  px-80 relative bg-[rgba(0,0,0,0.7)]'}>
        <div className='w-[50%] h-full flex flex-col justify-center text-left gap-3'>
          <p className='text-[#bdc9cf] text-2xl'>Welcome To Our School</p>
          <p className={day === true ? 'text-black font-extrabold text-6xl' : 'text-[rgba(255,255,255,0.6)] font-extrabold text-6xl'}>Best Place To</p>
          <p className={day === true ? 'text-black font-extrabold text-6xl' : 'text-[rgba(255,255,255,0.6)] font-extrabold text-6xl'}>Learn Graphic</p>
          <p className='z-[-1] text-fuchsia-400 font-extrabold text-6xl pb-6'>Design!</p>
          <button className='z-[-1] rounded-md text-white w-[150px] h-[40px] bg-gradient-to-r from-orange-300 to-fuchsia-500'>JOIN US NOW!</button>
        </div>
        <div className='w-[50%] h-full flex items-center'>
          <div className=' z-[-1] relative w-[570px] h-[615px]'>
            {/* <div className={day === true ? 'absolute w-full h-full z-[999]' : ' bg-[rgba(0,0,0,0.7)] absolute w-full h-full z-[999] '}></div> */}
            <img className=' z-[-1] absolute' src="https://templatemo.com/templates/templatemo_573_eduwell/assets/images/banner-right-image.png" alt="" />
            <img className=' z-[-2] absolute right-0' src="https://templatemo.com/templates/templatemo_573_eduwell/assets/images/banner-right-dec.png" alt="" />
          </div>
        </div>
        <div className=' z-[-1] absolute bottom-0 left-0'>
          <img className='z-[-1]' src="https://templatemo.com/templates/templatemo_573_eduwell/assets/images/banner-left-dec.png" alt="" />
        </div>
      </section>
    </div>
  )
}

export default App
