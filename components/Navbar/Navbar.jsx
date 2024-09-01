'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <div className='max-md:fixed w-full'>
        <header className='border-b border-gray-200 bg-primary-violet'>
          <div className='mx-auto flex justify-between py-5 px-8 items-center'>
            <div>
              <button onClick={toggleMenu} className="md:hidden">
                {isMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
              </button>
            </div>
            <div className='w-full flex justify-center'>
              <Link href='/'>
                <Image
                  src="/logo.svg"
                  width={206}
                  height={29}
                  className='max-lg:max-w-36'
                  alt="Logo"
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
                    className='max-lg:hidden'
                    alt="Búsqueda"
                  />
                </button>
              </Link>

              <Link href='/'>
                <button>
                  <Image
                    src="/usuario.svg"
                    width={22}
                    height={24}
                    className='max-lg:hidden'
                    alt="Usuario"
                  />
                </button>
              </Link>

              <Link href='/'
                className='max-lg:flex'
              >
                <button>
                  <Image
                    src="/carrito.svg"
                    width={28}
                    height={24}
                    alt="Carrito"
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className='hidden md:block pb-4'>
            <ul className='flex items-center text-lg justify-center text-white max-lg:gap-8'>
              <Link href='/' onClick={closeMenu}>
                <li className='lg:mr-20 hover:text-gray-300 cursor-pointer font-semibold'>SALE</li>
              </Link>
              <Link href='/' onClick={closeMenu}>
                <li className='lg:mr-20 hover:text-gray-300 cursor-pointer'>E-SHOP</li>
              </Link>
              <Link href='/' onClick={closeMenu}>
                <li className='lg:mr-20 hover:text-gray-300 cursor-pointer'>LOOKBOOK</li>
              </Link>
              <Link href='/' onClick={closeMenu}>
                <li className='lg:mr-20 hover:text-gray-300 cursor-pointer'>CAMPAÑA</li>
              </Link>
              <Link href='/' onClick={closeMenu}>
                <li className='lg:mr-20 hover:text-gray-300 cursor-pointer'>LOCALES</li>
              </Link>
            </ul>
          </div>
        </header>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed top-[69px] left-0 right-0 bottom-0 bg-primary-violet z-50">
          <ul className='flex flex-col items-center text-lg justify-center text-white h-full'>
            <Link href='/' onClick={closeMenu}>
              <li className='my-4 hover:text-gray-900 cursor-pointer font-semibold'>SALE</li>
            </Link>
            <Link href='/' onClick={closeMenu}>
              <li className='my-4 hover:text-gray-900 cursor-pointer'>E-SHOP</li>
            </Link>
            <Link href='/' onClick={closeMenu}>
              <li className='my-4 hover:text-gray-900 cursor-pointer'>LOOKBOOK</li>
            </Link>
            <Link href='/' onClick={closeMenu}>
              <li className='my-4 hover:text-gray-900 cursor-pointer'>CAMPAÑA</li>
            </Link>
            <Link href='/' onClick={closeMenu}>
              <li className='my-4 hover:text-gray-900 cursor-pointer'>LOCALES</li>
            </Link>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar