import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <div>
        <header className='bg-white border-b border-gray-200 bg-primary-violet'>
          <div className='mx-auto flex justify-between py-5 px-8 items-center'>
            <div className='w-full flex justify-center'>
              <Link href='/'>
                <Image
                  src="/logo.svg"
                  width={206}
                  height={29}
                />
              </Link>
            </div>

            <div className='flex justify-center items-center gap-3'>
              <Link href='/'>
                <button>
                  <Image
                    src="/busqueda.svg"
                    width={23}
                    height={24}
                  />
                </button>
              </Link>

              <Link href='/'>
                <button>
                  <Image
                    src="/usuario.svg"
                    width={22}
                    height={24}
                  />
                </button>
              </Link>

              <Link href='/'>
                <button>
                  <Image
                    src="/carrito.svg"
                    width={28}
                    height={24}
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className='hidden md:block pb-4'>
            <ul className='flex items-center text-lg justify-center text-white'>
              <Link href='/'>
                <li className='mr-20 hover:text-gray-900 cursor-pointer font-semibold'>SALE</li>
              </Link>
              <Link href='/'>
                <li className='mr-20 hover:text-gray-900 cursor-pointer'>E-SHOP</li>
              </Link>
              <Link href='/'>
                <li className='mr-20 hover:text-gray-900 cursor-pointer'>LOOKBOOK</li>
              </Link>
              <Link href='/'>
                <li className='mr-20 hover:text-gray-900 cursor-pointer'>CAMPAÑA</li>
              </Link>
              <Link href='/'>
                <li className='mr-20 hover:text-gray-900 cursor-pointer'>LOCALES</li>
              </Link>
            </ul>
          </div>
        </header>
      </div>
    </>
  )
}

export default Navbar