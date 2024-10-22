import React from 'react'

function Wrapper({formOpen}) {
  return (
   <>
    <div
        className={`bg-[rgba(0,0,0,0.38)] w-full h-full right-0 left-0 z-30 fixed backdrop-blur-sm ${
          formOpen ? "block" : "hidden"
        }`}
      ></div>
   </>
  )
}

export default Wrapper