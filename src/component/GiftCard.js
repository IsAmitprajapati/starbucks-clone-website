import React from 'react'

const GiftCard = ({ img, title, desc }) => {
  return (
    <div className='flex p-5 h-[190px] border-2 min-w-[320px] max-w-[320px] rounded-lg shadow-md relative left-10 my-3'>
      <img src={img} className="h-20 absolute -left-10 rounded-md shadow-md" />
      <div className='ml-20'>
        <h3 className='font-semibold'>{title}</h3>
        <p className='text-sm py-2'>{desc}</p>
        <button className='text-white bg-green-800 hover:bg-[#1e3932] mt-4 py-1 px-5 rounded-full'>Add Item</button>
      </div>
    </div>
  )
}

export default GiftCard