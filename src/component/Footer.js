import React from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { CgFacebook } from "react-icons/cg"
import { Link } from 'react-router-dom'
import logo from "../assests/img/logo.png"
import appstoreiOSImage from "../assests/img/appstoreiOS.png"
import appstoreAndroidImage from "../assests/img/appstoreAndroid.png"

const Footer = () => {
    return (
        <div className='bg-[#0e382c] w-full py-5 hidden sm:block'>
            <div className='p-8 px-4 sm:px-0 md:w-4/5 m-auto relative mt-3 '>
                <div className='grid grid-cols-6'>
                    <div className='min-w-[50px]'>
                        <img src={logo} className="w-16" />
                    </div>
                    <div className='flex flex-col text-white'>
                        <Link to={""} className="font-bold text-lg mb-4">AboutUS</Link>
                        <Link to={""} className="text-sm mb-4">Our Heritage</Link>
                        <Link to={""} className="text-sm mb-4">Our Company</Link>
                        <Link to={""} className="text-sm mb-4">Coffee house</Link>
                    </div>
                    <div className='flex flex-col text-white'>
                        <Link to={""} className="font-bold text-lg mb-4">Responsibility</Link>
                        <Link to={""} className="text-sm mb-4">Community</Link>
                        <Link to={""} className="text-sm mb-4">Ethical Sourcing</Link>
                        <Link to={""} className="text-sm mb-4">Enviroment</Link>
                        <Link to={""} className="text-sm mb-4">Diversity</Link>
                    </div>
                    <div className='flex flex-col text-white'>
                        <Link to={""} className="font-bold text-lg mb-4">Quick Links</Link>
                        <Link to={""} className="text-sm mb-4">Carees</Link>
                        <Link to={""} className="text-sm mb-4">Season's Gifting</Link>
                        <Link to={""} className="text-sm mb-4">FAQs</Link>
                        <Link to={""} className="text-sm mb-4">Customer Service</Link>
                        <Link to={""} className="text-sm mb-4">Delivery</Link>
                    </div>
                    <div className='flex flex-col text-white'>
                        <Link to={""} className="font-bold text-lg mb-4">SOCIAL MEDIA</Link>
                        <div className='flex gap-5 text-2xl'>
                            <a href='https://www.instagram.com/starbucksindia/'><BsInstagram /></a>
                            <a href='https://www.facebook.com/starbucksindia'><CgFacebook /></a>
                            <a href='https://twitter.com/starbucksindia'><BsTwitter /></a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <a href='https://apps.apple.com/in/app/starbucks-india/id1210203958'>
                            <img src={appstoreiOSImage} />
                        </a>
                        <a href='https://play.google.com/store/apps/details?id=com.starbucks.in'>
                            <img src={appstoreAndroidImage} />
                        </a>
                    </div>
                </div>

                <div className='border-t border-solid mt-7 text-gray-100 py-3 flex justify-between'>
                        <div className='text-sm'>
                            <Link to={""} className="pr-5 border-r">Web Accessiblity</Link>
                            <Link to={""} className="pr-3 pl-3 border-r">Privacy Statement</Link>
                            <Link to={""} className="pr-3 pl-3 border-r">Terms of Use</Link>
                            <Link to={""} className="pr-3 pl-3">Contact Us</Link>
                        </div>
                        <p className='text-xs'>© 2023 Starbucks Coffee Company. All rights reserved.</p>
                </div>
            </div>

        </div>
    )
}

export default Footer