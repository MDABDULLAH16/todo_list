import React from 'react'

const page = () => {
  return (
    <>
    <h1 className='bg-black text-white p-5 text-2xl font-bold text-center'>Abdullah's ToDo List</h1>
    <form>
      <input type='text' className='text-2xl border-zinc-800 border-2 m-8 px-5 py-2 ' placeholder='Enter task hare1'  ></input>
      <input type='text' className='text-2xl border-zinc-800 border-2 m-8 px-5 py-2 ' placeholder='Enter task hare'  ></input>
      <button className='bg-black text-2xl px-8 m-5 py-3 text-white rounded font-semibold' > Add Task</button>
    </form>
    </>
  )
}

export default page