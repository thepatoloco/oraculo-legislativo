import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='text-black'>
        <h1 className='text-6xl mb-5'>UPS!</h1>
        <p className='mb-2'>No encontramos esta iniciativa.</p>
        <Link href='/explorer' className='underline'>Regresar a seguir explorando iniciativas</Link>
      </div>

      <div>
        <Image src="/not-found.jpg" alt="Canguro triste" width={250} height={300} />
      </div>
    </div>

  )
}

export default NotFound