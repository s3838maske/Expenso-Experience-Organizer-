import React from 'react'


function Header({handleForm}) {
  return (
   <>
    <nav className='bg-white w-full p-3 shadow-md flex justify-between items-center'>
      <h1 className='text-xl font-semibold'>Experience Tracker</h1>
    <button 
    type='button'
    onClick={handleForm}
    className='bg-black p-2 hover:bg-[rgb(35,32,32)] hover:shadow-lg text-white rounded-lg'
    >
      Add Experience
    </button>
    </nav> 
   </>
  )
}

export default Header