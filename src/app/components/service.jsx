import React from 'react'

function Service() {
  return (
    <div id="service" className="section">
        <h1 className="text-center  text-2xl font-medium text-red-500 pb-4">
        Services
      </h1>
      <h1 className="text-white text-5xl text-center ">What I Do for Client</h1>
      <div className="grid grid-cols-2 gap-4 mt-14">
        <div className=" h-96 bg-red-600"></div>
        <div className=" h-96 bg-red-600 "></div>
        <div className=" h-96 bg-red-600"></div>
        <div className=" h-96 bg-red-600"></div>
      </div>

    </div>
  )
}

export default Service