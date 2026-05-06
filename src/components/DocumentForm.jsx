import React from 'react';

const DocumentForm = () => {
  return (
    <div className="m-6 bg-white">
      <div className="mb-4 grid grid-cols-4 gap-4">
        {/* Invoice Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="invoiceDate">
            Invoice Date
          </label>
          <div className="flex items-center">
            <input
              type="date"
              id="invoiceDate"
              className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 text-black focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Consumer */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="consumer">
            Consumer
          </label>
          <select
            id="consumer"
            className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="" disabled selected>Select a consumer...</option>
            <option value="Consumer1">Consumer 1</option>
            <option value="Consumer2">Consumer 2</option>
            <option value="Consumer3">Consumer 3</option>
          </select>
        </div>

        {/* Warehouse */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="warehouse">
            Warehouse
          </label>
          <select
            id="warehouse"
            className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="" disabled selected>Select a warehouse...</option>
            <option value="Warehouse1">Warehouse 1</option>
            <option value="Warehouse2">Warehouse 2</option>
            <option value="Warehouse3">Warehouse 3</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {/* Start Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="startDate">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* End Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="endDate">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Due Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="dueDate">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Document Number */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="documentNumber">
            Document Number
          </label>
          <input
            type="text"
            id="documentNumber"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentForm;
