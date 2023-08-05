import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { updatetaskserver } from '../slices/taskslice';

const Modal = ({ isOpen, onClose, children }) => {

  const dispatch = useDispatch()
  const {selectedTaskList}= useSelector((state) => state.tasks)

  const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [id,setid] = useState(selectedTaskList._id  )

    const updatetasks = () => {
      console.log("updated");
      dispatch(updatetaskserver({_id:id,title,description}))
    }
    useEffect(() => {
      if(Object.keys(selectedTaskList).length !== 0){
        setTitle(selectedTaskList.title)
        setDescription(selectedTaskList.description)
        setid(selectedTaskList._id)
    }
    },[selectedTaskList])


  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${
        isOpen ? 'visible' : 'hidden'
      }`}
    >
      <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-full bg-gradient-to-r from-orange-500 to-green-500">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        NAME
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="ENTER NAME" 
      value={title} onChange={(e) => setTitle(e.target.value)}></input>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        MOBILE NO.
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="ENTRE MOBILE NO."
      value={description} onChange={(e) => setDescription(e.target.value)}></input>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick ={() => updatetasks()}>
        SUBMIT
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={onClose}>
        close
      </button>
      
    </div>
  </form>
  </div>
      
    </div>
  );
};

export default Modal;
