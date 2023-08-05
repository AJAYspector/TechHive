import React, { useState } from 'react'
import { useSelector, UseSelector } from 'react-redux/es/hooks/useSelector'

const Navbar = () => {
  

  const{tasksList} = useSelector((state) => state.tasks)
  const {title,setTitle} = useState('')
  const addTitle = (e) => {
    e.preventDefault()
    console.log({title})
}
  return (
    <>
    <h1 className="mb-4 text-4xl lg:text-6xl dark:text-black bg-blue-500 font-sans">CONTACTS MANAGEMENT</h1>
    <div className="widt">

    <div className="flex justify-center items-center widt">
     
     </div>
     <div class="flex justify-center items-center">
     <h1 class="mb-4 text-2xl leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">NUMBER OF CONTACTS - <span class="text-blue-600 dark:text-blue-500:break-normal">{tasksList.length}</span></h1>
     </div>
     </div>
    </>
  )
}
export default Navbar