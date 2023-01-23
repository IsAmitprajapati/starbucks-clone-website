import React from 'react'
import Rabbits_MugImage from "../assests/img/Rabbits_Mug.png"
import Butter_cold_cup_Valentines from "../assests/img/Butter_cold_cup_Valentines.png"
import { NavLink, Outlet } from 'react-router-dom'
import GiftCard from '../component/GiftCard'

const Gift = () => {
  return (
    <div>
      <div className='bg-[#1e3932]'>
        <div className='px-4 sm:px-0 md:w-4/5 m-auto relative py-9'>


          <div className='flex h-56 gap-3 overflow-auto scrollbar-none px-3'>


            <div className='p-5 bg-[#d83356]  min-w-full rounded flex sm:gap-7 relative overflow-hidden'>
              <img src={Rabbits_MugImage} className="h-full py-3 scale-125 w-16 sm:w-auto " />
              <div className='text-black max-w-2xl'>
                <p className='text-sm font-semibold'>Order Today !</p>
                <h2 className='font-bold text-base sm:text-xl my-2'>The Cozy Rabbit Serios</h2>
                <p className='font-medium text-xs sm:text-base w-full'>Usher in the New Year with our cozy rabbit. ceramic mug. Great for yourself or a gift.</p>
                <p className='md:mt-5 text-xs sm:text-base'>For</p>
                <p className='font-bold text-lg'>₹ 2000</p>
              </div>
              <p className='text-white text-xs font-bold ml-auto absolute right-5'>Limited Period</p>
              <button className='bg-white text-black text-sm w-full max-w-[100px] sm:max-w-[150px] py-2 sm:py-3 right-1 bottom-1 sm:right-9 sm:bottom-5 absolute rounded-full'>Order now</button>
            </div>


            <div className='p-5 bg-[#fbd577]  rounded min-w-full flex sm:gap-7 relative overflow-hidden'>
              <img src={Butter_cold_cup_Valentines} className="h-full scale-125 w-16 sm:w-auto " />
              <div className='text-black max-w-2xl'>
                <p className='text-sm font-semibold'>Introducing</p>
                <h2 className='font-bold text-base sm:text-xl my-2'>Barista Pride Beverage</h2>
                <p className='font-medium text-xs sm:text-base w-full'>Experience a brew-tiful barista surprise. Relish this unique treat,one of kinds curation at a store near you</p>
                <p className='md:mt-5 text-xs sm:text-base'>Starting From</p>
                <p className='font-bold text-lg'>₹ 250.00</p>
              </div>
              <p className='text-white text-xs font-bold ml-auto absolute right-5'>*T&C Apply</p>
              <button className='bg-white text-black text-sm w-full max-w-[100px] sm:max-w-[150px] py-2 sm:py-3 right-1 bottom-1 sm:right-9 sm:bottom-5 absolute rounded-full'>Explore</button>
            </div>

            <div className='p-5 bg-[#fbd577]  rounded min-w-full flex sm:gap-7 relative overflow-hidden'>
              <img src={Butter_cold_cup_Valentines} className="h-full scale-125 w-16 sm:w-auto " />
              <div className='text-black max-w-2xl'>
                <p className='text-sm font-semibold'>Introducing</p>
                <h2 className='font-bold text-base sm:text-xl my-2'>Barista Pride Beverage</h2>
                <p className='font-medium text-xs sm:text-base w-full'>Experience a brew-tiful barista surprise. Relish this unique treat,one of kinds curation at a store near you</p>
                <p className='md:mt-5 text-xs sm:text-base'>Starting From</p>
                <p className='font-bold text-lg'>₹ 250.00</p>
              </div>
              <p className='text-white text-xs font-bold ml-auto absolute right-5'>*T&C Apply</p>
              <button className='bg-white text-black text-sm w-full max-w-[100px] sm:max-w-[150px] py-2 sm:py-3 right-1 bottom-1 sm:right-9 sm:bottom-5 absolute rounded-full'>Explore</button>
            </div>


          </div>



        </div>

      </div>

      <div className='bg-[#f2f0eb]'>
        <div className='px-4 sm:px-0 md:w-4/5 m-auto relative '>
          <div className='flex uppercase overflow-auto scrollbar-none'>
            <NavLink to={""} className={({ isActive }) => `px-10 border-r-2 h-full py-3 border-solid whitespace-nowrap border-gray-300 hover:border-b-2   ${isActive ? "text-green-900 font-bold border-b-2 border-b-green-900 border-solid" : ""}`} end>
              Feature
            </NavLink>
            <NavLink to="anytime" className={({ isActive }) => `px-10 border-r-2 h-full py-3 border-solid whitespace-nowrap border-gray-300 ${isActive ? "text-green-900 font-bold border-b-2 border-b-green-900 border-solid" : ""}`}>
              Anytime
            </NavLink>
            <NavLink to="Congratulations" className={({ isActive }) => `px-10 border-r-2 h-full py-3 border-solid whitespace-nowrap border-gray-300 ${isActive ? "text-green-900 font-bold border-b-2 border-b-green-900 border-solid" : ""}`}>
              Congratulations
            </NavLink>
            <NavLink to="thank" className={({ isActive }) => `px-10 h-full py-3 whitespace-nowrap ${isActive ? "text-green-900 font-bold border-b-2 border-green-900 border-solid" : ""}  `}>
              Thank You
            </NavLink>
          </div>
        </div>
      </div>

      <div>
        <Outlet />
      </div>


    </div>
  )
}

export default Gift