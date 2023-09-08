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

   const deleteHandler =(i)=>{
      let copyTask =[...mainTask]
      copyTask.splice(i,1)
      setmainTask(copyTask)
   }


   let renderTask = <h2>No task abailable</h2>

    if (mainTask.length > 0) {
        renderTask = mainTask.map((t,i)=>{
        return(
          <li key={i} className='flex justify-between items-center py-1'>                
            <div className='flex justify-between items-center  w-2/3'>
              <h3 className='text-2xl font-semibold'>{t.title}</h3>
            <h4 className='text-2xl font-normal'>{t.desc}</h4>
            </div>
            <button
            onClick={()=>{deleteHandler(i)}}
            className='bg-red-600 text-white px-5 py-2 border rounded font-semibold'>delete</button>
          
          </li>
        )

      })
    }

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