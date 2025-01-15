import React from 'react'

function Navbar() {
  return (
    <div className='w-full flex align-middle justify-center bg-gray-100'>
        <div className="logo flex items-center justify-center" style={{height: '56px'}}>
            <h1 className='text-xl'>Taskify - Your personal productivity manager</h1>
        </div>
    </div>
  )
}

export default Navbar
