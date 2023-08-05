import React, {useState} from 'react'

import {useDispatch,useSelector} from 'react-redux'
import {addUserToServer} from '../../slices/userslice'
const Usersign = () => {
  
  const dispatch = useDispatch()
  const [username,setUsername] = useState('')
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const {tk,error} = useSelector((state)=>state.users)

const addusers = (e)=>{
  e.preventDefault()
  console.log({username,name,password})
  dispatch(addUserToServer({username,name,password}))
}
  return (
    <div className="w-full max-w-sm">
       {
          (error !== "") ? <h5>{error}</h5> : null
        }
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      id="username" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
        Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      id="name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
    </div>


    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
      id="password" type="password" placeholder="******************" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>


    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
      type="button" onClick={(e) => addusers(e)}>
        Sign In
      </button>
      {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-red-800" href="#">
        Forgot Password?
      </a> */}
      
    </div>
  </form>
</div>
  )
}

export default Usersign
