
import Link from 'next/link'
import React from 'react'

export default function Navber() {
  return (
    <div>
        <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
            <Link className='text-white font-bold' href="/">CODER</Link>
            <Link className='bg-white p-2' href="/addtopic">ADD TOPIC</Link>

             </nav>
    </div>
  )
}
