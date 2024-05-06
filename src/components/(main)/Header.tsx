import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/Logo.png'

const Header = () => {
  return (
    <section>
      <main className='max-w-[1380px] m-auto'>
        <div className='h-16 w-full flex-between'>
          <div className='flex-[1] flex-start px-3'>
            <Image src={Logo} alt='Logo' height={100} width={100} className='object-cover' />
          </div>
          <div className='flex-[2] hidden lg:flex-center gap-5'>
            <Link href='' className='text-md text-black font-semibold'>Product</Link>
            <Link href='' className='text-md text-black font-semibold'>Templates</Link>
            <Link href='' className='text-md text-black font-semibold'>Customers</Link>
            <Link href='' className='text-md text-black font-semibold'>Resources</Link>
            <Link href='' className='text-md text-black font-semibold'>Pricing</Link>
          </div>
          <div className='flex-[2] md:flex-[1] flex-end px-3'>
            <span className='px-5 lg:px-7 py-3 bg-tranperant duration-200'><Link href='' className='text-sm md:text-md text-black font-semibold'>Sign In</Link></span>
            <span className='px-5 lg:px-7 py-3 bg-black rounded-3xl duration-200'><Link href='' className='text-md md:text-md text-white font-semibold'>Sign Up</Link></span>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Header