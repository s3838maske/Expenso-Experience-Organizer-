import React from 'react'


function Header({handleForm}) {
  return (
   <>
    <nav className='bg-white w-full p-3 shadow-md flex justify-between items-center'>
      <h1 className='text-xl font-semibold'>Experience Tracker</h1>
    <button 
    type='button'
    onClick={handleForm}
    className='bg-blue-600 p-2 hover:bg-blue-700 hover:shadow-lg text-white rounded-lg'
    >
      Add Experience
    </button>
    </nav> 
   </>
  )
}

export default Header