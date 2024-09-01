import Image from 'next/image';
import React from 'react'

const Card = ({ products }) => {
  return (
    <div className='flex flex-wrap gap-3 mt-3 max-w-4xl justify-center'>
      {products.map((item) => (
        <div key={item.id} className='mb-4'>
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={250}
            height={100}
            className='bg-white border-b-[1px] border-b-primary-black'
          />
          <p className='primary-black'>{item.title}</p>
          <p className='primary-black font-black'>${item.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Card