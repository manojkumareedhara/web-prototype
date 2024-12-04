import React from 'react'

const ServiceCard = ({label,description,imgURL}) => {
  return (
      <div className='flex-1 sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
          <div className='w-11 h-11 p-4 flex justify-start items-center bg-purple-800 rounded-full'>
          <img src={imgURL} alt={label} width={240} height={240} />
          </div>
          <h3 className='mt-5 font-palanquin text-xl leading-normal font-bold'>
          {label}
        </h3>
        <p className='mt-3 break-words font-montserrat text-sm leading-normal text-slate-gray'>
          {description}
        </p>
          
    </div>
  )
}

export default ServiceCard