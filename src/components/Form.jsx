import React from 'react'
import Area from './Area'
import DocumentForm from './DocumentForm'
import TaxForm from './TaxForm'
import { useState } from 'react'

const Form = () => {
    const [areas, setAreas] = useState([{ id: 1 }]);

    const handleAddArea = () => {
        setAreas((prevAreas) => [...prevAreas, { id: prevAreas.length + 1 }]); // Add a new area with unique id
      };
  return (
    <div className='bg-white shadow-md rounded-md border border-gray-300'>
        <div className='p-3 bg-purple-50 rounded-md  '>
            <h2 className="text-lg font-bold mb-2 text-black ">Create Invoice</h2>
        </div>
        <DocumentForm/>
        <div>
        {areas.map((area, index) => (
          <Area key={area.id} number={index + 1} />
        ))}
      </div>
        <TaxForm/>

        <div className="flex justify-between w-full items-center space-x-4 p-6 border-t border-t-gray-300 border-t-1">
            <div className=''>
            {/* Add Area Button */}
                <button className="px-4 py-2 text-red-600 border border-red-600 rounded" onClick={handleAddArea}>
                + Add Area
                </button>
            </div>

            {/* Cancel Button */}
            <div className=''>
                <button className="px-4 py-2 text-gray-600 border border-gray-400 rounded mr-3">
                 Cancel
                </button>

                {/* Create Button */}
                <button className="px-4 py-2 text-white bg-green-600 rounded">
                Create
                </button>
            </div>
         </div>
    </div>
  )
}

export default Form