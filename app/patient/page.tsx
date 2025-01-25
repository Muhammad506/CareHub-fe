'use client';

import React from 'react';

const PatientPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Patient Management</h1>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-2 border border-gray-300">Patient ID</th>
              <th className="px-4 py-2 border border-gray-300">Name</th>
              <th className="px-4 py-2 border border-gray-300">Age</th>
              <th className="px-4 py-2 border border-gray-300">Gender</th>
              <th className="px-4 py-2 border border-gray-300">Contact</th>
              <th className="px-4 py-2 border border-gray-300">Address</th>
              <th className="px-4 py-2 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Replace this with dynamic content */}
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="px-4 py-2 border border-gray-300 text-center">1</td>
              <td className="px-4 py-2 border border-gray-300 text-center">John Doe</td>
              <td className="px-4 py-2 border border-gray-300 text-center">35</td>
              <td className="px-4 py-2 border border-gray-300 text-center">Male</td>
              <td className="px-4 py-2 border border-gray-300 text-center">(123) 456-7890</td>
              <td className="px-4 py-2 border border-gray-300 text-center">123 Elm Street</td>
              <td className="px-4 py-2 border border-gray-300 text-center">
                <button className="text-blue-500 hover:underline mr-2">Edit</button>
                <button className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
            {/* End dynamic content */}
          </tbody>
        </table>
        
      </div>
    </div>
  );
};

export default PatientPage;
