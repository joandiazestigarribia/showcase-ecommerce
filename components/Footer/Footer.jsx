import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-primary-violet py-6'>
            <ul className='flex items-center text-lg justify-center text-white'>
                <Link href='/'>
                    <li className='mr-20 hover:text-gray-900 cursor-pointer'>Ayuda</li>
                </Link>
                <Link href='/'>
                    <li className='mr-20 hover:text-gray-900 cursor-pointer'>Contacto</li>
                </Link>
                <Link href='/'>
                    <li className='mr-20 hover:text-gray-900 cursor-pointer'>Términos y condiciones</li>
                </Link>
                <Link href='/'>
                    <li className='mr-20 hover:text-gray-900 cursor-pointer'>Políticas de privacidad</li>
                </Link>
            </ul>
        </div>
    )
}

export default Footer