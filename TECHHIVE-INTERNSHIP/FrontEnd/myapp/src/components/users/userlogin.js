import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {updateUserInServer} from '../../slices/userslice'
import { setSelectedTask } from '../../slices/userslice'
const Userlogin = () => {
  const [username,setUsername] = useState('')
  const {tk,error} = useSelector((state)=>state.users)
  const [password,setPassword] = useState('')

  // async function loginUser(e) {
	// 	e.preventDefault()

	// 	const response = await fetch('http://localhost:4000/reg', {
	// 		method: 'PATCH',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify({
	// 			username,
	// 			password,
	// 		}),
	// 	});
  //   if (response.ok) {
  //     const jsonResponse = await response.json()
      
  //     window.location.href ="/"
  //     dispatch(setSelectedTask(jsonResponse))
  //   }
  // }

  const dispatch = useDispatch()
  
  const checkuser = (e)=>{
    e.preventDefault()
    console.log({username,password})
    dispatch(updateUserInServer({username,password}))
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
      type="button" onClick={(e) => checkuser(e)}>
        Sign In
      </button>
      
    </div>
  </form>
</div>
  )
}

export default Userlogin