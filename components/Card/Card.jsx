import Image from 'next/image';
import React from 'react'

const Card = ({ products, columnCount }) => {
  const getGridClass = () => {
    switch (columnCount) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-2';
      case 3: return 'grid-cols-3';
      case 4: return 'grid-cols-4';
      default: return 'grid-cols-2';
    }
  };

  return (
    <div className={`grid ${getGridClass()} gap-4 lg:justify-items-center`}>
      {products.map((item) => (
        <div key={item.id} className="mb-4 lg:max-w-72 w-full">
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={250}
            height={100}
            className='w-full bg-white border-b-[1px] border-b-primary-black'
          />
          <p className='primary-black'>{item.title}</p>
          <p className='primary-black font-black'>${item.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Card