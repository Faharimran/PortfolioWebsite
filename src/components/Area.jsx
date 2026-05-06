import React from 'react';
import { useState } from 'react';

const Area = ({ number }) => {

  
    const [discount, setDiscount] = useState('');
  
    const handleDiscountChange = (e) => {

  
      // Allow only numbers and limit value between 0 and 100
      if (/^\d*$/.test(value) && (value === '' || (Number(value) >= 0 && Number(value) <= 100))) {
        setDiscount(value);
      
      }
    
    };
    
  return (
    <div className="ml-6 mr-6 mt-3 bg-white rounded-md border border-gray-300">
      <div className="p-3 bg-purple-50 rounded-md">
        <h2 className="text-lg font-medium mb-1 text-black">Area # {number}</h2>
      </div>
    <div className="grid grid-rows-2">
      <div className="grid grid-cols-5 gap-4 bg-white p-6 ">
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="areaServiceType">
            Area/Service Type
          </label>
          <select
            id="areaServiceType"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select</option>
            {/* Add other options here */}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="areaServiceName">
            Area/Service Name
          </label>
          <input
            type="text"
            id="areaServiceName"
            className="w-full p-2 border border-gray-300 bg-gray-100 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="area">
            Area
          </label>
          <input
            type="number"
            id="area"
            step="0.01"
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="rate">
            Rate
          </label>
          <input
            type="number"
            id="rate"
            step="0.01"
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="amount">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            step="0.01"
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 bg-white pl-6 pr-6 pb-6">
      <div>
      <label className="block text-gray-700 font-medium mb-1" htmlFor="discount">
        Discount%
      </label>
      <input
        type="text"
        id="discount"
        value={discount}
        onChange={handleDiscountChange}
        className="w-full p-2 border border-gray-300 bg-gray-100 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder=""
      />
    </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="amount">
            Amount After Discount
          </label>
          <input
            type="number"
            id="amount"
            step="0.01"
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

      </div>
    </div>
    </div>
  );
};

export default Area;
