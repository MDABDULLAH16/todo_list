"use client"
import React, { useState } from 'react'

const page = () => {
  const [title,settile] = useState("")
   const [desc,setdesc ]= useState("")
   const [mainTask, setmainTask]= useState([])

   const submitHandler =(e)=>{
    e.preventDefault()
    setmainTask([...mainTask, {title,desc}])

    settile("")
    setdesc("")
    console.log(mainTask);

   }

   let renderTask = <h2>No task abailable</h2>

  return (
    <>
    <h1 className='bg-black text-white p-5 text-2xl font-bold text-center'>Abdullah's ToDo List</h1>
    <form onSubmit={submitHandler}>
      <input type='text' className='text-2xl border-zinc-800 border-2 m-8 px-5 py-2 ' placeholder='Enter title hare' 
      value={title}
      onChange={(e)=>{
        settile(e.target.value)
      }}
      ></input>
      <input type='text' className='text-2xl border-zinc-800 border-2 m-8 px-5 py-2 ' placeholder='Enter describtion  hare'  
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}

      ></input>
      <button type='submit' className='bg-black text-2xl px-8 m-5 py-3 text-white rounded font-semibold' > Add Task</button>
    </form>
    <hr></hr>
    <div className='bg-slate-200 p-8'>
        {renderTask}
    </div>
    </>
  )
}

export default page