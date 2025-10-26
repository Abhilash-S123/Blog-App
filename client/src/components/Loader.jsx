import React from 'react'

const Loader = () => {
  return (
    <div>
        <div className="h-screen flex justify-center items-center">
            <div className="animate-spin rounded-full border-4 border-t-white border-gray-700 h-16 w-16"></div>
        </div>
    </div>
  )
}

export default Loader