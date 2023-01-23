import React from 'react'
import welcome_Page_image from "../assests/img/Welcome_Website_page.jpg"
import logo from "../assests/img/logo.svg"
import  {BsArrowDownCircleFill} from "react-icons/bs"

const Welcome = () => {
    return (
        <div className='h-screen w-screen relative'>
            <img src={welcome_Page_image} className=" h-full w-full object-cover" />
            <div className=' absolute top-0 bottom-0 right-0 left-0 w-full flex  items-center flex-col text-white text-base md:p-24'>
                <div className=''>
                    <img src={logo} className="md:h-40" />
                </div>
                <h2 className='font-semibold text-2xl'>Good Evening</h2>
                <p className='max-w-lg text-lg text-center'>
                    Find your unwinds! Relish this unique treat, finely curated Barista Pride Beverage. Live now.
                </p>
                <BsArrowDownCircleFill className='text-3xl mt-16'/>
            </div>
        </div>
    )
}

export default Welcome