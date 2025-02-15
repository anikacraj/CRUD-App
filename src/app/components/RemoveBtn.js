import Link from 'next/link';
import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
export default function RemoveBtn() {
  return (
    <div>
        <button className='text-red-400'> 
            <FaRegTrashAlt  size={24}/>
        </button>
    </div>
  )
}
