"use client";
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Error = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='text-black'>
        <h1 className='text-6xl mb-5'>Error!</h1>
        <p className='mb-2'>Hubo un error en la búsqueda.</p>
        <Link href='/explorer' className='underline'>Regresar al Inicio</Link>
      </div>

      <div>
        <Image src="/not-found.jpg" alt="Canguro triste" width={250} height={300} />
      </div>
    </div>
  )
}

export default Error