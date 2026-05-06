import React from 'react';

const TaxForm = () => {
  // Function to handle file upload and check file size
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) { // 5 MB in bytes
      alert("File size should not exceed 5 MB.");
      event.target.value = ""; // Clear the file input
    }
  };

  return (
    <div className="m-6 bg-white">
      <div className="grid grid-cols-4 gap-4">
        {/* SGST */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="sgst">
            SGST
          </label>
          <input
            type="text"
            id="sgst"
            className="w-full p-2 border border-gray-300 bg-gray-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* CGST */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="cgst">
            CGST
          </label>
          <input
            type="text"
            id="cgst"
            className="w-full p-2 border border-gray-300 bg-gray-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Total */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="total">
            Total
          </label>
          <input
            type="text"
            id="total"
            className="w-full p-2 border border-gray-300 bg-gray-100 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Upload Document */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="uploadDocument">
            Upload Document
          </label>
          <input
            type="file"
            id="uploadDocument"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>
    </div>
  );
};

export default TaxForm;
