"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const TestComp = ({currentPage}: {currentPage : string}) => {
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const { replace } = useRouter();

    const handleClick = (pageNumber : string) =>{
        const params = new URLSearchParams(searchParams);
        params.set("pageNumber", pageNumber)
        replace(`${pathName}?${params.toString()}`);
    
    }

  return (
    <div>
        <p>Click to update searchParams</p>
        <div className='flex gap-2'>
        <button 
        onClick={()=>handleClick("1")}
        className='bg-gray-500 text-white w-10 rounded-md'>
            1
        </button>
        <button 
        onClick={()=>handleClick("2")}
        className='bg-gray-500 text-white w-10 rounded-md'>
            2
        </button>
        <button 
        onClick={()=>handleClick("3")}
        className='bg-gray-500 text-white w-10 rounded-md'>
            3
        </button>
        <button 
        onClick={()=>handleClick("4")}
        className='bg-gray-500 text-white w-10 rounded-md'>
            4
        </button>
        </div>
        <p>Current page is {currentPage}</p>
    </div>
  )
}

export default TestComp